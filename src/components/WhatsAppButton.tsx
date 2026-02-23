"use client";

import { getContactInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

<<<<<<< HEAD
const WhatsAppSVGIcon = () => (
    <svg 
        viewBox="0 0 24 24" 
        className="h-8 w-8 text-white"
        fill="currentColor"
    >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/>
    </svg>
=======
const WhatsAppSVGIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 448 512" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.3-8.6-44.4-27.5-16.4-14.6-27.4-32.8-30.6-38.3-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.6-9.2 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
>>>>>>> d90c444682f08800da410ce2851b1b0560a89fa7
);

export function WhatsAppButton() {
  const [phone, setPhone] = useState("3404962500");

  useEffect(() => {
    async function fetchPhone() {
      try {
        const contactInfo = await getContactInfo();
        if (contactInfo?.phoneMonica) setPhone(contactInfo.phoneMonica);
      } catch (error) { console.error("Errore fetch WhatsApp:", error); }
    }
    fetchPhone();
  }, []);

  const whatsappLink = `https://wa.me/${phone.replace(/\D/g, "")}`;

<<<<<<< HEAD
    return (
        <Button
            asChild
            className="fixed bottom-6 right-24 z-50 h-16 w-16 rounded-full bg-[#25D366] shadow-lg hover:bg-[#1EBE57]"
            aria-label="Contattaci su WhatsApp"
        >
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppSVGIcon />
            </Link>
        </Button>
    );
}
=======
  return (
    /* Posizione SOPRA l'AI (bottom-24 o bottom-[100px]) */
    <div className="fixed bottom-24 right-6 z-[9999]">
      {/* Pulse esterno più evidente */}
      <span className="absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-25"></span>
      
      <Button
        asChild
        className="relative h-14 w-14 rounded-full bg-[#25D366] p-0 shadow-2xl hover:bg-[#128C7E] transition-all hover:scale-110 border-none flex items-center justify-center overflow-hidden"
      >
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
          {/* h-10 w-10 con scale-125 elimina quasi tutto il padding verde interno */}
          <WhatsAppSVGIcon className="h-10 w-10 scale-[1.3] text-white" /> 
        </Link>
      </Button>
    </div>
  );
}
>>>>>>> d90c444682f08800da410ce2851b1b0560a89fa7
