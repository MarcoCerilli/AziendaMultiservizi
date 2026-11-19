"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";

function ZecchiLogoFooter() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 group"
      aria-label="Zecchi Multiservizi Homepage"
    >
      <div className="relative h-20 w-20 rounded-2xl bg-white border border-white/20 p-2 shadow-lg transition-transform group-hover:scale-105 shrink-0">
        <Image
          src="/images/logo.png"
          alt="Logo Zecchi"
          fill
          className="object-contain p-1.5"
          unoptimized
        />
      </div>
      <div className="text-left">
        <span className="block font-headline text-2xl font-extrabold text-white tracking-tight leading-none">
          Zecchi
        </span>
        <span className="text-primary text-xs font-bold uppercase tracking-[0.24em] mt-1 block">
          Multiservizi
        </span>
      </div>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/[0.08] bg-[#0c1410] text-white overflow-hidden">
      {/* Linea luminosa sottile in cima al footer */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-24 md:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Colonna 1: Brand & Sede */}
          <div className="flex flex-col items-start space-y-5">
            <ZecchiLogoFooter />
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Azienda multiservizi a{" "}
              <span className="text-white font-semibold">
                Terracina e Provincia
              </span>
              . Dal giardinaggio professionale all&apos;edilizia di qualità.
            </p>
            <div className="space-y-1.5 text-zinc-400 text-xs">
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                Via C. Fusco, 4 - 04019 Terracina (LT)
              </p>
              <p className="flex items-center gap-2">
                <FileText className="h-3.5 w-3.5 text-primary shrink-0" />
                C.F. ZCC MNC 72B44 L120G
              </p>
            </div>
          </div>

          {/* Colonna 2: Contatti Diretti */}
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="font-headline text-base font-bold text-white">
                Contattaci Subito
              </h3>
              <p className="text-zinc-500 text-xs mt-0.5">
                Preventivi e sopralluoghi gratuiti
              </p>
            </div>

            <div className="flex flex-col gap-2.5 max-w-xs">
              <a
                href="tel:+393404962500"
                className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/70 rounded-xl hover:bg-primary hover:text-zinc-950 transition-all group border border-white/[0.08] text-sm"
              >
                <span className="font-bold">Monica · 340 496 2500</span>
                <Phone className="h-4 w-4 text-primary group-hover:text-zinc-950" />
              </a>
              <a
                href="tel:+393333895067"
                className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/70 rounded-xl hover:bg-primary hover:text-zinc-950 transition-all group border border-white/[0.08] text-sm"
              >
                <span className="font-bold">Fabio · 333 389 5067</span>
                <Phone className="h-4 w-4 text-primary group-hover:text-zinc-950" />
              </a>
              <a
                href="mailto:monicazecchi56@gmail.com"
                className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors pt-1 text-xs"
              >
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>monicazecchi56@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Colonna 3: Social & Info Legali */}
          <div className="flex flex-col items-start lg:items-end justify-between space-y-6">
            <div className="space-y-3 lg:text-right">
              <h3 className="font-headline text-base font-bold text-white">
                Seguici sui Social
              </h3>
              <div className="flex gap-2.5 lg:justify-end">
                <Link
                  href="https://www.facebook.com/AziendaMultiserviziZecchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Zecchi Multiservizi"
                  className="h-9 w-9 rounded-full bg-[#1877F2]/90 hover:bg-[#1877F2] text-white flex items-center justify-center hover:scale-105 transition-all shadow-md"
                >
                  <Facebook className="h-4 w-4" />
                </Link>

                <Link
                  href="https://www.instagram.com/zecchimultiservizi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Zecchi Multiservizi"
                  className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center hover:scale-105 transition-all shadow-md"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="text-left lg:text-right space-y-1.5 text-zinc-500 text-xs">
              <p className="font-semibold text-zinc-400">
                P. IVA 02990560597
              </p>
              <p>
                <Link href="/privacy" className="hover:text-primary underline transition-colors">
                  Privacy Policy
                </Link>
              </p>
              <p>
                © {new Date().getFullYear()} Zecchi Multiservizi — Tutti i
                diritti riservati
              </p>
              <p className="pt-1">
                <span className="opacity-70">Progetto curato da </span>
                <a
                  href="https://marcocerilli.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-white transition-colors font-semibold underline-offset-4 hover:underline"
                >
                  M Solutions Web
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
