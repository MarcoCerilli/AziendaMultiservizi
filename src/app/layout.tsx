import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AiAssistant } from '@/components/AiAssistant';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { LeadPopup } from '@/components/LeadPopup';

export const metadata: Metadata = {
  title: {
    default: 'Zecchi Soluzioni - Giardinaggio, Pulizie, Edilizia a Pistoia',
    template: '%s | Zecchi Soluzioni',
  },
  description: 'Zecchi Soluzioni offre servizi professionali di giardinaggio, pulizia condomini, piccoli lavori edili, taglio piante e scavi a Pistoia e provincia. Contattaci per un preventivo gratuito.',
  keywords: 'giardinaggio, pulizie, edilizia, pistoia, zecchi monica, taglio siepi, scavi, manutenzione giardini, potatura, impianti irrigazione',
};

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="dark">
      <body className={cn('font-body antialiased min-h-screen bg-background flex flex-col')}>
        <Navbar />
        <main className="flex-1 relative"> {/* Aggiunto relative qui */}
          {children}
        </main>
        <Footer />
        
        {/* L'ordine conta: l'ultimo ha spesso la priorità visiva */}
        <AiAssistant /> 
        <WhatsAppButton /> 
        
        <Toaster />
        <LeadPopup />
      </body>
    </html>
  );
}