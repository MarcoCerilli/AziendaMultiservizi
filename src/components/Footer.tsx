import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

function ZecchiLogo() {
    return (
      <Link href="/" className="flex items-center gap-2" aria-label="Zecchi Soluzioni Homepage">
        <svg
          width="24"
          height="24"
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
        <span className="text-lg font-semibold text-foreground">
          Zecchi Soluzioni
        </span>
      </Link>
    );
  }

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-card">
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-8 px-4 py-8 text-center md:grid-cols-3 md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <ZecchiLogo />
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
          <p>© {new Date().getFullYear()} Zecchi Soluzioni.</p>
          <p>Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
