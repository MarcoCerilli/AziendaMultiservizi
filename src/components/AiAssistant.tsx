'use client';

import { useState, useRef, useEffect } from 'react';
import { z } from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { zecchiBotServiceInquiry } from '@/ai/flows/zecchi-bot-service-inquiry-flow';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, User, Send, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Form, FormControl, FormField, FormItem } from './ui/form';

const chatSchema = z.object({
  message: z.string().min(1, 'Il messaggio non può essere vuoto.'),
});

type ChatInput = z.infer<typeof chatSchema>;

type Message = {
  role: 'user' | 'bot';
  text: string;
};

export function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const form = useForm<ChatInput>({
    resolver: zodResolver(chatSchema),
    defaultValues: {
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ChatInput> = async (data) => {
    const userMessage: Message = { role: 'user', text: data.message };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    form.reset();

    try {
      const result = await zecchiBotServiceInquiry({ message: data.message });
      const botMessage: Message = { role: 'bot', text: result.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error with AI assistant:', error);
      const errorMessage: Message = {
        role: 'bot',
        text: 'Spiacente, si è verificato un errore. Riprova più tardi.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('div');
      if (viewport) {
        viewport.scrollTo({
          top: viewport.scrollHeight,
          behavior: 'smooth',
        });
      }
    }
  }, [messages]);
  

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add initial greeting message
      setMessages([
        {
          role: 'bot',
          text: 'Ciao! Sono Zecchi Bot. Come posso aiutarti con i nostri servizi oggi?',
        },
      ]);
    }
  }, [isOpen, messages.length]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-primary shadow-lg hover:bg-primary/90"
          aria-label="Apri assistente AI"
        >
          <Bot className="h-8 w-8 text-primary-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="w-[350px] md:w-[400px] h-[500px] rounded-lg border-2 border-border/40 bg-background/80 p-0 shadow-2xl backdrop-blur-md"
      >
        <div className="flex h-full flex-col">
          <header className="flex items-center gap-3 border-b border-border/40 p-4">
            <Bot className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Zecchi Bot</h3>
          </header>
          <ScrollArea className="flex-1" ref={scrollAreaRef}>
            <div className="space-y-4 p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-start gap-3',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {message.role === 'bot' && (
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                  )}
                  <div
                    className={cn(
                      'max-w-[80%] rounded-lg p-3 text-sm',
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary'
                    )}
                  >
                    {message.text}
                  </div>
                  {message.role === 'user' && (
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                      <User className="h-5 w-5" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3 justify-start">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div className="max-w-[80%] rounded-lg bg-secondary p-3 text-sm">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <div className="border-t border-border/40 p-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="Chiedi qualcosa..."
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
