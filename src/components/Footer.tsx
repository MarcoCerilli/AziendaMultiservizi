import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

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
      </Link>
    );
  }

export function Footer() {
  return (
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
            </div>
            <div className="flex justify-center gap-6">
                <Link href="#" aria-label="Pagina Facebook" className="text-muted-foreground transition-colors hover:text-primary">
                    <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="Pagina Instagram" className="text-muted-foreground transition-colors hover:text-primary">
                    <Instagram className="h-5 w-5" />
                </Link>
            </div>
        </div>
        <div className="text-center text-sm text-muted-foreground md:text-right">
          <p>© {new Date().getFullYear()} Multiservizi.</p>
          <p>Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
