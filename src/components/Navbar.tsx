import Link from 'next/link';
import { getContactInfo } from '@/lib/data';
import { Phone, Mail } from 'lucide-react';

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


export async function Navbar() {
  const contactInfo = await getContactInfo();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <ZecchiLogo />
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${contactInfo.phoneMonica}`}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            <span>Monica: {contactInfo.phoneMonica}</span>
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            <span>{contactInfo.email}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
