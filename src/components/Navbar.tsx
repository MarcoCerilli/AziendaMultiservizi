"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, Home, Wrench, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

function ZecchiLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
      aria-label="Zecchi Multiservizi Homepage"
    >
      <div
        className={cn(
          "rounded-full bg-white border border-emerald-950/10 p-2 shadow-sm overflow-hidden transition-transform duration-300 group-hover:scale-105 shrink-0",
          compact ? "w-12 h-12" : "w-14 h-14",
        )}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/logo.png"
            alt="Logo Zecchi Multiservizi"
            fill
            priority
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-headline text-lg md:text-xl font-extrabold leading-none text-[#111c16] tracking-tight">
          Zecchi
        </span>
        <span className="text-[10px] md:text-[11px] font-bold leading-tight text-emerald-700 uppercase tracking-[0.22em] mt-0.5">
          Multiservizi
        </span>
      </div>
    </Link>
  );
}

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/servizi", label: "Servizi", icon: Wrench },
  { href: "/contatti", label: "Contatti", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* DESKTOP: Floating Pill Navbar */}
      <header className="hidden md:block fixed top-4 inset-x-0 z-50 px-4 pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-5xl rounded-full bg-white/95 backdrop-blur-xl border border-emerald-950/15 shadow-[0_12px_40px_rgba(0,0,0,0.22)] px-3 py-1.5 flex items-center justify-between gap-4">
          <ZecchiLogo />

          <nav className="flex items-center gap-1 rounded-full bg-emerald-950/[0.05] border border-emerald-950/10 p-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "bg-primary text-zinc-950 font-bold shadow-sm"
                      : "text-emerald-950/75 hover:text-[#111c16] hover:bg-emerald-950/[0.06]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-emerald-500 text-zinc-950 font-bold rounded-full px-5 h-11 text-sm transition-all shadow-md group shrink-0"
          >
            <a href="tel:+393404962500">
              <Phone className="mr-2 h-3.5 w-3.5" />
              Chiama Ora
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </header>

      {/* MOBILE TOP: Floating Brand Pill */}
      <header className="md:hidden fixed top-3 inset-x-3 z-40 pointer-events-none">
        <div className="pointer-events-auto mx-auto rounded-full bg-white/95 backdrop-blur-xl border border-emerald-950/15 shadow-[0_10px_30px_rgba(0,0,0,0.22)] px-2.5 py-1.5 flex items-center justify-between">
          <ZecchiLogo compact />
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-emerald-500 text-zinc-950 font-bold rounded-full px-4 h-10 text-xs shadow-sm"
          >
            <a href="tel:+393404962500">
              <Phone className="mr-1.5 h-3.5 w-3.5" />
              Chiama
            </a>
          </Button>
        </div>
      </header>

      {/* MOBILE BOTTOM: Footer Pill Navbar */}
      <nav
        aria-label="Navigazione mobile"
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm rounded-full bg-white/95 backdrop-blur-xl border border-emerald-950/15 shadow-[0_12px_36px_rgba(0,0,0,0.28)] p-1.5 flex items-center justify-around"
      >
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-full text-xs font-semibold transition-all duration-200",
                isActive
                  ? "bg-primary text-zinc-950 font-bold shadow-sm"
                  : "text-emerald-950/75 hover:text-[#111c16]",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
