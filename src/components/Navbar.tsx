"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";

function ZecchiLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 transition-transform hover:scale-105"
      aria-label="Zecchi Multiservizi Homepage"
    >
      {/* Logo Ingrandito */}
      <div className="relative w-20 h-20 md:w-24 md:h-24">
        <Image
          src="/images/logo.png"
          alt="Logo Zecchi Multiservizi"
          fill
          priority
          className="object-contain"
          unoptimized
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-2xl md:text-3xl font-black leading-none text-white uppercase tracking-tighter">
          Zecchi
        </span>
        <span className="text-xs md:text-sm font-bold leading-none text-primary uppercase tracking-[0.4em]">
          Multiservizi
        </span>
      </div>
    </Link>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/contatti", label: "Contatti" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/30 bg-zinc-950/95 backdrop-blur-xl shadow-2xl">
      {/* Altezza aumentata a h-28 / h-32 */}
      <div className="mx-auto flex h-28 md:h-32 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden bg-zinc-900/40 border border-white/5 p-2 transition-transform hover:scale-105">
          <ZecchiLogo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative text-base uppercase tracking-widest font-black transition-colors",
                pathname === link.href
                  ? "text-primary"
                  : "text-white/80 hover:text-white",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-2 left-0 h-1 bg-primary transition-all duration-300",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full",
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Pulsante Contattaci Animato */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden lg:flex bg-primary hover:bg-white text-zinc-950 font-black rounded-full px-10 h-14 transition-all shadow-[0_0_30px_rgba(87,195,34,0.5)] uppercase group relative overflow-hidden"
          >
            <a href="tel:+393404962500">
              <span className="relative z-10 flex items-center">
                <Phone className="mr-2 h-5 w-5 animate-pulse" />
                Contattaci
                <ArrowRight className="ml-2 h-0 w-0 transition-all group-hover:h-5 group-hover:w-5" />
              </span>
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-primary/20"
                >
                  <Menu className="h-10 w-10 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-zinc-950 border-primary/20 text-white w-[300px]"
              >
                <SheetTitle className="sr-only">Menu di Navigazione</SheetTitle>
                <SheetDescription className="sr-only">
                  Accedi alle sezioni del sito Zecchi Multiservizi
                </SheetDescription>
                <div className="flex flex-col gap-10 pt-16 items-center">
                  <ZecchiLogo />
                  <div className="flex flex-col gap-6 text-center">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-black uppercase tracking-tighter hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <Button className="w-full bg-primary text-black font-bold h-14 rounded-full">
                    <a href="tel:+393404962500">CHIAMA ORA</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
