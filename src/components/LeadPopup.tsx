"use client";

import { useState, useEffect } from "react";
import { X, Gift, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("zecchi-popup-closed") === "true") {
      setHasClosed(true);
      return;
    }

    const timer = setTimeout(() => {
      if (!hasClosed) setIsVisible(true);
    }, 8000);

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
    sessionStorage.setItem("zecchi-popup-closed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-zinc-950 border border-primary/40 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(87,195,34,0.2)] animate-in zoom-in-95 duration-300">
        <button
          onClick={closePopup}
          aria-label="Chiudi finestra"
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors z-10 p-1 rounded-full hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative p-7 md:p-8 flex flex-col items-center text-center">
          <div className="bg-primary/15 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4 flex items-center gap-1.5 border border-primary/25">
            <Sparkles className="h-3.5 w-3.5" /> Promozione Attiva
          </div>

          <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4">
            <Gift className="h-6 w-6" />
          </div>

          <h2 className="font-headline text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 tracking-tight">
            Sopralluogo <span className="text-primary">Gratuito</span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-base mb-6 leading-relaxed">
            Vuoi rinnovare il tuo giardino o eseguire lavori edili? Prenota oggi un controllo tecnico senza impegno.
          </p>

          <div className="flex flex-col w-full gap-3">
            <Button
              asChild
              className="bg-primary hover:bg-accent text-zinc-950 font-bold h-11 rounded-full text-sm md:text-base shadow-lg transition-all"
            >
              <a href="tel:+393404962500" className="flex items-center justify-center gap-2">
                Richiedi Ora <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <button
              onClick={closePopup}
              className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors py-1"
            >
              No grazie, sto solo guardando
            </button>
          </div>

          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
