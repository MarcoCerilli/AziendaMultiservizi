import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AiAssistant } from '@/components/AiAssistant';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'Zecchi Soluzioni - Giardinaggio, Pulizie, Edilizia a Pistoia',
    template: '%s | Zecchi Soluzioni',
  },
  description: 'Zecchi Soluzioni offre servizi professionali di giardinaggio, pulizia condomini, piccoli lavori edili, taglio piante e scavi a Pistoia e provincia. Contattaci per un preventivo gratuito.',
  keywords: 'giardinaggio, pulizie, edilizia, pistoia, zecchi monica, taglio siepi, scavi, manutenzione giardini, potatura, impianti irrigazione',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased min-h-screen bg-background flex flex-col')}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <AiAssistant />
        <Toaster />
      </body>
    </html>
  );
}
