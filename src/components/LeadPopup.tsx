"use client";

import { useState, useEffect } from "react";
import { X, Gift, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  useEffect(() => {
    // 1. Appare dopo 8 secondi
    const timer = setTimeout(() => {
      if (!hasClosed) setIsVisible(true);
    }, 8000);

    // 2. O appare quando l'utente prova ad uscire (Exit Intent)
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasClosed) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseOut);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseOut);
    };
  }, [hasClosed]);

  const closePopup = () => {
    setIsVisible(false);
    setHasClosed(true);
    // Salviamo nel session storage per non stressare l'utente nella stessa sessione
    sessionStorage.setItem("zecchi-popup-closed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-zinc-950 border-2 border-primary/50 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(87,195,34,0.3)] animate-in zoom-in-95 duration-300">
        
        {/* Pulsante Chiusura */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative p-8 md:p-12 flex flex-col items-center text-center">
          {/* Badge Offerta */}
          <div className="bg-primary/20 text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2">
            <Sparkles className="h-3 w-3" /> Promozione Limitata
          </div>

          <Gift className="h-16 w-16 text-primary mb-6 animate-bounce" />

          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 uppercase italic tracking-tighter">
            Sopralluogo <br /> <span className="text-primary underline">Gratuito</span>
          </h2>

          <p className="text-zinc-400 text-lg mb-8">
            Vuoi rinnovare il tuo giardino o ristrutturare casa? Prenota oggi un controllo tecnico a costo zero.
          </p>

          <div className="flex flex-col w-full gap-4">
            <Button 
              asChild
              className="bg-primary hover:bg-white text-black font-black h-16 rounded-2xl text-xl shadow-xl transition-all hover:scale-105"
            >
              <a href="tel:+393404962500" className="flex items-center justify-center gap-2">
                RICHIEDI ORA <ArrowRight className="h-6 w-6" />
              </a>
            </Button>
            
            <button 
              onClick={closePopup}
              className="text-zinc-500 text-sm hover:underline font-medium"
            >
              No grazie, sto solo guardando
            </button>
          </div>

          {/* Sfondo decorativo */}
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}