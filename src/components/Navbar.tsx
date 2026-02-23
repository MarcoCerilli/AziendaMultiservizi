"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

function AppLogo() {
  return (
<<<<<<< HEAD
    <Link href="/" className="flex items-center gap-3" aria-label="Multiservizi Homepage">
      <svg width="50" height="50" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
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
        <span className="text-xl font-bold uppercase text-foreground">
          Multiservizi
        </span>
        <p className="text-xs text-muted-foreground -mt-1">Soluzioni Complete</p>
=======
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
      aria-label="Zecchi Multiservizi Homepage"
    >
      {/* Contenitore flessibile: rimosso overflow-hidden e aggiunto padding negativo se necessario */}
      <div className="relative w-16 h-16 md:w-20 md:h-20">
        <Image
          src="/images/logo.png"
          alt="Logo Zecchi Multiservizi"
          fill
          priority
          className="object-contain object-center"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-xl md:text-2xl font-black leading-tight text-foreground uppercase tracking-tight">
          Zecchi
        </span>
        <span className="text-[10px] md:text-xs font-bold leading-tight text-primary uppercase tracking-[0.3em] -mt-1">
          Multiservizi
        </span>
>>>>>>> d90c444682f08800da410ce2851b1b0560a89fa7
      </div>
    </Link>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/contatti", label: "Contatti" },
];

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-semibold transition-colors hover:text-primary py-2",
        isActive
          ? "text-primary border-b-2 border-primary"
          : "text-muted-foreground",
      )}
    >
      {children}
    </Link>
  );
}
// components/Navbar.tsx
// components/Navbar.tsx
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<<<<<<< HEAD
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card">
      <div className="container flex h-24 max-w-screen-xl items-center justify-between px-4">
        <AppLogo />
=======
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-zinc-950/95 backdrop-blur-md shadow-2xl">
      <div className="mx-auto flex h-24 md:h-28 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo a sinistra - Ingrandito */}
        <div className="flex-shrink-0 scale-110 md:scale-125 transition-transform">
          <ZecchiLogo />
        </div>
>>>>>>> d90c444682f08800da410ce2851b1b0560a89fa7

        {/* Links centrati con contrasto alto */}
        <nav className="hidden md:flex flex-1 justify-center gap-10">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              <span className="text-white hover:text-primary transition-colors text-base uppercase tracking-widest font-bold">
                {link.label}
              </span>
            </NavLink>
          ))}
        </nav>

<<<<<<< HEAD
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Apri menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
                <div className="p-4">
                    <div className="mb-8">
                        <AppLogo />
                    </div>
                    <nav className="flex flex-col gap-6 text-lg font-medium">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
=======
        {/* Azioni a destra */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden lg:flex bg-primary hover:bg-white hover:text-primary text-zinc-950 font-black rounded-full px-8 h-12 transition-all shadow-[0_0_20px_rgba(87,195,34,0.4)] uppercase"
          >
            <a href="tel:+393404962500">
              <Phone className="mr-2 h-5 w-5 fill-current" /> Monica
            </a>
          </Button>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-9 w-9 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-zinc-950 border-primary/20 text-white w-full">
                <div className="flex flex-col gap-8 pt-12">
                   <ZecchiLogo />
                   {/* ... link mobile ... */}
>>>>>>> d90c444682f08800da410ce2851b1b0560a89fa7
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}