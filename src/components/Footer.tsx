'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton'; // Assicurati che il nome del file sia corretto

function ZecchiLogoFooter() {
    return (
      <Link href="/" className="flex items-center gap-3" aria-label="Zecchi Multiservizi Homepage">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image 
                src="/images/logo.png" 
                alt="Logo Zecchi" 
                fill 
                className="object-contain"
            />
        </div>
        <span className="text-xl font-bold text-foreground tracking-tight">
          Zecchi <span className="text-primary text-sm font-medium">Multiservizi</span>
        </span>
      </Link>
    );
}

// components/Footer.tsx
export function Footer() {
  return (
    <footer className="w-full border-t-4 border-primary bg-zinc-950 text-white">
      <div className="container mx-auto max-w-screen-xl px-6 py-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          
          {/* Colonna 1: Logo Grande e Mission */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="scale-125 origin-left">
              <ZecchiLogoFooter />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm text-center md:text-left">
              Dalla cura del verde ai lavori edili: <span className="text-white font-bold">Zecchi Multiservizi</span> trasforma i tuoi spazi con passione e competenza.
            </p>
          </div>

          {/* Colonna 2: Contatti con icone colorate */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">Pronto Intervento</h3>
            <div className="flex flex-col items-center space-y-4 text-lg">
                <a href="tel:+393404962500" className="flex items-center gap-3 hover:text-primary transition-all group">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-black transition-all">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span className="font-bold">Monica: 340 4962500</span>
                </a>
                <a href="tel:+393333895067" className="flex items-center gap-3 hover:text-primary transition-all group">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-black transition-all">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span className="font-bold">Fabio: 333 3895067</span>
                </a>
                <a href="mailto:monicazecchi56@gmail.com" className="flex items-center gap-3 hover:text-primary transition-all group pt-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-gray-400 text-sm">monicazecchi56@gmail.com</span>
                </a>
            </div>
          </div>

          {/* Colonna 3: Social & Qualità */}
          <div className="flex flex-col items-center md:items-end justify-between space-y-8">
            <div className="flex gap-6">
                <Link href="#" className="bg-white/5 p-4 rounded-2xl hover:bg-primary hover:text-black transition-all shadow-xl">
                    <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="bg-white/5 p-4 rounded-2xl hover:bg-primary hover:text-black transition-all shadow-xl">
                    <Instagram className="h-6 w-6" />
                </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-primary font-black text-xl italic uppercase tracking-tighter">Zecchi Soluzioni</p>
              <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">© {new Date().getFullYear()} Tutti i diritti riservati.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Button è iniettato qui sotto */}
      <WhatsAppButton />
    </footer>
  );
}