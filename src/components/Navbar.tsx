"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

function ZecchiLogo() {
  return (
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
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-zinc-950/95 backdrop-blur-md shadow-2xl">
      <div className="mx-auto flex h-24 md:h-28 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo a sinistra - Ingrandito */}
        <div className="flex-shrink-0 scale-110 md:scale-125 transition-transform">
          <ZecchiLogo />
        </div>

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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}