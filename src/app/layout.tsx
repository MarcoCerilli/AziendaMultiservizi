import type { Metadata } from 'next';
//@ts-ignore
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AiAssistant } from '@/components/AiAssistant';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { LeadPopup } from '@/components/LeadPopup';

export const metadata: Metadata = {
  // MetadataBase è cruciale per risolvere gli URL della sitemap e delle immagini OG su Vercel
  metadataBase: new URL('https://zecchimultiservizi.it'),
  
  title: {
    default: 'Zecchi Multiservizi | Giardinaggio, Scavi ed Edilizia a Terracina',
    template: '%s | Zecchi Multiservizi',
  },
  description: 'Zecchi Monica e Fabio: specialisti in potature alto fusto, manutenzione giardini, scavi e piccoli lavori edili a Terracina. Soluzioni definitive per privati e condomini.',
  keywords: [
    'giardinaggio Terracina', 
    'potatura alto fusto Terracina', 
    'scavi Terracina', 
    'manutenzione giardini', 
    'pulizia condomini Terracina', 
    'Zecchi Monica', 
    'Zecchi Fabio', 
    'lavori edili Terracina', 
    'impianti irrigazione'
  ],
  authors: [{ name: 'Zecchi Multiservizi' }],
  creator: 'Zecchi Multiservizi',
  
  openGraph: {
    title: 'Zecchi Multiservizi Terracina | Giardinaggio ed Edilizia',
    description: 'Professionalità e cura nel giardinaggio, scavi e manutenzioni edili. Contattaci per un preventivo gratuito.',
    url: 'https://zecchimultiservizi.it',
    siteName: 'Zecchi Multiservizi',
    images: [
      {
        url: '/og-image.jpg', // Assicurati che questo file esista in /public
        width: 1200,
        height: 630,
        alt: 'Zecchi Multiservizi - Manutenzione Verde ed Edilizia',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Zecchi Multiservizi Terracina',
    description: 'Specialisti in potature, scavi e lavori edili.',
    images: ['/og-image.jpg'],
  },

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={cn('font-body antialiased min-h-screen bg-background flex flex-col')}>
        {/* Navigazione */}
        <Navbar />
        
        {/* Contenuto Principale: flex-1 spinge il footer in basso se la pagina è corta */}
        <main className="flex-1 relative"> 
          {children}
        </main>
        
        {/* Chiusura Pagina */}
        <Footer />
        
        {/* Widget Flottanti e Interazioni */}
        <AiAssistant /> 
        <WhatsAppButton /> 
        
        {/* Utility e Notifiche */}
        <Toaster />
        <LeadPopup />
      </body>
    </html>
  );
}