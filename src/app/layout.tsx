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
    // Sostituito Pistoia con Terracina e reso più incisivo
    default: 'Zecchi Multiservizi | Giardinaggio, Scavi ed Edilizia a Terracina',
    template: '%s | Zecchi Multiservizi',
  },
  description: 'Zecchi Monica e Fabio: specialisti in potature alto fusto, manutenzione giardini, scavi e piccoli lavori edili a Terracina. Soluzioni definitive per privati e condomini.',
  keywords: 'giardinaggio Terracina, potatura alto fusto Terracina, scavi Terracina, manutenzione giardini, pulizia condomini Terracina, Zecchi Monica, Zecchi Fabio, lavori edili Terracina, impianti irrigazione',
  // Aggiunto per migliorare l'anteprima sui social
  openGraph: {
    title: 'Zecchi Multiservizi Terracina',
    description: 'Professionalità e cura nel giardinaggio e nell\'edilizia.',
    type: 'website',
    locale: 'it_IT',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={cn('font-body antialiased min-h-screen bg-background flex flex-col')}>
        <Navbar />
        
        {/* Il main flex-1 assicura che il footer stia sempre in fondo */}
        <main className="flex-1 relative"> 
          {children}
        </main>
        
        <Footer />
        
        {/* Widget flottanti */}
        <AiAssistant /> 
        <WhatsAppButton /> 
        
        {/* Componenti di utilità */}
        <Toaster />
        <LeadPopup />
      </body>
    </html>
  );
}