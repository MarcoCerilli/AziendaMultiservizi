'use client';

<<<<<<< HEAD
function AppLogo() {
    return (
      <Link href="/" className="flex items-center gap-2" aria-label="Multiservizi Homepage">
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <title>Multiservizi Logo</title>
            <rect width="20" height="20" x="0" y="0" fill="#8cc63f" />
            <rect width="20" height="20" x="20" y="0" fill="#8d6e63" />
            <rect width="20" height="20" x="0" y="20" fill="#37474f" />
            <rect width="20" height="20" x="20" y="20" fill="#29b6f6" />
            {/* Leaf */}
            <path d="M10 7 a 6 6 0 0 1 0 12 a 1 1 0 0 0 0 -12" fill="white" transform="rotate(45 10 13)" />
            {/* Hammer */}
            <path d="M26 7h6v3h-6z M29 10v6" stroke="white" strokeWidth="2" />
            {/* Wrench */}
            <circle cx="8" cy="28" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
            <line x1="11" y1="31" x2="16" y2="36" stroke="white" strokeWidth="2" />
            <path d="M5.5 25.5 l-2 -2 l2.5 0 l0 -2.5 l2 2" fill="white"/>
            {/* Broom */}
            <path d="M30 24v12m-5 1h10m-10-1v-2m3 2v-2m4 2v-2m3 2v-2" stroke="white" strokeWidth="1.5" />
        </svg>
        <div>
            <span className="text-xl font-semibold uppercase">
                Multiservizi
            </span>
            <p className="text-xs text-muted-foreground -mt-1">Soluzioni Complete</p>
        </div>
=======
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
>>>>>>> d90c444682f08800da410ce2851b1b0560a89fa7
      </Link>
    );
}

// components/Footer.tsx
export function Footer() {
  return (
<<<<<<< HEAD
    <footer className="w-full border-t border-border/40 bg-card">
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-8 px-4 py-8 text-center md:grid-cols-3 md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <AppLogo />
          <p className="mt-2 text-sm text-muted-foreground">Soluzioni per casa e giardino.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center gap-6 text-sm font-medium">
                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">Home</Link>
                <Link href="/servizi" className="text-muted-foreground transition-colors hover:text-primary">Servizi</Link>
                <Link href="/contatti" className="text-muted-foreground transition-colors hover:text-primary">Contatti</Link>
=======
    <footer className="w-full border-t-4 border-primary bg-zinc-950 text-white">
      <div className="container mx-auto max-w-screen-xl px-6 py-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          
          {/* Colonna 1: Logo Grande e Mission */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="scale-125 origin-left">
              <ZecchiLogoFooter />
>>>>>>> d90c444682f08800da410ce2851b1b0560a89fa7
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
<<<<<<< HEAD
        </div>
        <div className="text-center text-sm text-muted-foreground md:text-right">
          <p>© {new Date().getFullYear()} Multiservizi.</p>
          <p>Tutti i diritti riservati.</p>
=======
            <div className="text-center md:text-right">
              <p className="text-primary font-black text-xl italic uppercase tracking-tighter">Zecchi Soluzioni</p>
              <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">© {new Date().getFullYear()} Tutti i diritti riservati.</p>
            </div>
          </div>
>>>>>>> d90c444682f08800da410ce2851b1b0560a89fa7
        </div>
      </div>
      
      {/* WhatsApp Button è iniettato qui sotto */}
      <WhatsAppButton />
    </footer>
  );
}