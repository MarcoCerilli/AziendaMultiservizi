"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

function ZecchiLogoFooter() {
    return (
      <Link href="/" className="flex flex-col md:flex-row items-center gap-5 group" aria-label="Zecchi Multiservizi Homepage">
        <div className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-2xl shadow-2xl transition-transform group-hover:scale-110">
            <Image 
                src="/images/logo.png" 
                alt="Logo Zecchi" 
                fill 
                className="object-contain"
            />
        </div>
        <div className="text-center md:text-left">
          <span className="block text-3xl font-black text-white tracking-tighter uppercase leading-none">
            Zecchi
          </span>
          <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
            Multiservizi
          </span>
        </div>
      </Link>
    );
}

export function Footer() {
  return (
    <footer className="w-full border-t-[10px] border-primary bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          
          {/* Colonna 1: Brand Power */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            <ZecchiLogoFooter />
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md text-center lg:text-left">
              Leader nel settore multiservizi a <span className="text-white font-bold">Terracina e Provincia</span>. Dal giardinaggio professionale all'edilizia di qualità.
            </p>
          </div>

          {/* Colonna 2: Contatti Premium */}
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-primary">Contattaci Subito</h3>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mt-1">Sempre operativi 24/7</p>
            </div>
            
            <div className="flex flex-col w-full max-w-xs space-y-5">
                <a href="tel:+393404962500" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all group border border-white/10">
                    <span className="font-black text-lg">MONICA</span>
                    <Phone className="h-6 w-6" />
                </a>
                <a href="tel:+393333895067" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all group border border-white/10">
                    <span className="font-black text-lg">FABIO</span>
                    <Phone className="h-6 w-6" />
                </a>
                <div className="flex items-center gap-3 justify-center text-zinc-400 pt-2 text-sm">
                   <Mail className="h-4 w-4 text-primary" />
                   <span>monicazecchi56@gmail.com</span>
                </div>
            </div>
          </div>

          {/* Colonna 3: Social & Trust */}
          <div className="flex flex-col items-center lg:items-end space-y-10">
            <div className="flex gap-4">
                <Link href="#" className="bg-primary text-black p-5 rounded-full hover:bg-white hover:scale-110 transition-all shadow-2xl">
                    <Facebook className="h-7 w-7" />
                </Link>
                <Link href="#" className="bg-primary text-black p-5 rounded-full hover:bg-white hover:scale-110 transition-all shadow-2xl">
                    <Instagram className="h-7 w-7" />
                </Link>
            </div>
            
            <div className="text-center lg:text-right space-y-2">
              <div className="flex items-center justify-center lg:justify-end gap-2 text-primary font-bold uppercase text-xs">
                <MapPin className="h-4 w-4" />
                <span>Terracina (LT), Lazio</span>
              </div>
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">© {new Date().getFullYear()} Zecchi Multiservizi P.IVA 02931210591</p>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </footer>
  );
}