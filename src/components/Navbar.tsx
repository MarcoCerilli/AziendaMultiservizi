'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { cn } from '@/lib/utils';

function ZecchiLogo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Zecchi Soluzioni Homepage">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 9.5L17 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-xl font-semibold text-foreground">
        Zecchi Soluzioni
      </span>
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
      <div className="container flex h-20 max-w-screen-xl items-center justify-between px-4">
        <ZecchiLogo />

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
                        <ZecchiLogo />
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
