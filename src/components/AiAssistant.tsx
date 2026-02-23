"use client";

import { useState, useRef, useEffect } from "react";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zecchiBotServiceInquiry } from "@/ai/flows/zecchi-bot-service-inquiry-flow";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, Send, Loader2, Sparkles } from "lucide-react"; // Aggiunto Sparkles
import { cn } from "@/lib/utils";
import { Form, FormControl, FormField, FormItem } from "./ui/form";

const chatSchema = z.object({
  message: z.string().min(1, "Il messaggio non può essere vuoto."),
});

type ChatInput = z.infer<typeof chatSchema>;

type Message = {
  role: "user" | "bot";
  text: string;
};

export function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const form = useForm<ChatInput>({
    resolver: zodResolver(chatSchema),
    defaultValues: { message: "" },
  });

  const onSubmit: SubmitHandler<ChatInput> = async (data) => {
    const userMessage: Message = { role: "user", text: data.message };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    form.reset();

    try {
      const result = await zecchiBotServiceInquiry({ message: data.message });
      const botMessage: Message = { role: "bot", text: result.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error with AI assistant:", error);
      const errorMessage: Message = {
        role: "bot",
        text: "Spiacente, si è verificato un errore. Riprova più tardi.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector("div");
      if (viewport) {
        viewport.scrollTo({
          top: viewport.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "bot",
          text: "Ciao! Sono Zecchi Bot. Come posso aiutarti con i nostri servizi oggi?",
        },
      ]);
    }
  }, [isOpen, messages.length]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className="fixed bottom-6 right-6 z-50">
          {/* EFFETTO PULSE AI: Colore Ciano/Azzurro per distinguersi da WhatsApp */}
          {!isOpen && (
            <div className="absolute inset-0 rounded-full bg-cyan-500/40 animate-pulse scale-125 blur-md" />
          )}

          <Button
            /* Ridotto il padding interno e aumentata l'icona */
            className="relative h-14 w-14 rounded-full bg-cyan-600 p-0 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:bg-cyan-500 transition-all hover:scale-110 border-none flex items-center justify-center overflow-hidden"
            aria-label="Apri assistente AI"
          >
            {/* Icona h-10 w-10 o h-11 w-11 per riempire quasi tutto il cerchio da 14 */}
            <Bot className="h-10 w-10 text-white stroke-[1.5]" />

            {/* Sparkles posizionati meglio sul bordo */}
            <Sparkles className="absolute top-1 right-1 h-4 w-4 text-cyan-200 animate-pulse" />
          </Button>
        </div>
      </PopoverTrigger>

      <PopoverContent
        side="top"
        align="end"
        sideOffset={20}
        className="w-[350px] md:w-[400px] h-[550px] rounded-3xl border-2 border-cyan-500/30 bg-zinc-950/95 p-0 shadow-[0_0_40px_rgba(6,182,212,0.2)] backdrop-blur-xl z-[9999] overflow-hidden"
      >
        <div className="flex h-full flex-col">
          <header className="flex items-center gap-3 bg-cyan-600 p-5 text-white">
            <div className="bg-white/20 p-2 rounded-lg">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-black uppercase tracking-tighter leading-none">
                Zecchi Bot
              </h3>
              <span className="text-[10px] opacity-80 uppercase tracking-widest font-bold">
                Assistente Virtuale AI
              </span>
            </div>
          </header>

          <ScrollArea className="flex-1 bg-zinc-900/50" ref={scrollAreaRef}>
            <div className="space-y-4 p-5">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3",
                    message.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  {message.role === "bot" && (
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-500/30">
                      <Bot className="h-4 w-4 text-cyan-400" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                      message.role === "user"
                        ? "bg-cyan-600 text-white rounded-tr-none"
                        : "bg-zinc-800 text-zinc-100 rounded-tl-none border border-white/5",
                    )}
                  >
                    {message.text}
                  </div>
                  {message.role === "user" && (
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-zinc-700">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3 justify-start">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20">
                    <Bot className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="max-w-[80%] rounded-2xl bg-zinc-800 p-4 border border-white/5">
                    <Loader2 className="h-5 w-5 animate-spin text-cyan-500" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 bg-zinc-950 border-t border-white/10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex items-center gap-2"
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="Chiedi informazioni sui servizi..."
                          className="bg-zinc-900 border-white/10 focus:border-cyan-500 text-white rounded-xl h-12"
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading}
                  className="h-12 w-12 rounded-xl bg-cyan-600 hover:bg-cyan-500"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
