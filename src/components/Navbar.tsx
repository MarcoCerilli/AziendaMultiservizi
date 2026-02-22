'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { cn } from '@/lib/utils';

function AppLogo() {
  return (
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
      </div>
    </Link>
  );
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/contatti', label: 'Contatti' },
];

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} className={cn("transition-colors text-lg hover:text-primary", isActive ? 'text-primary' : 'text-muted-foreground')}>
            {children}
        </Link>
    );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card">
      <div className="container flex h-24 max-w-screen-xl items-center justify-between px-4">
        <AppLogo />

        <nav className="hidden items-center gap-8 font-medium md:flex">
          {navLinks.map(link => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </nav>

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
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
