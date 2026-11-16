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
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zecchi Multiservizi - Manutenzione Verde ed Edilizia a Terracina',
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
    <html lang="it" className="dark scroll-smooth" style={{ colorScheme: 'dark' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased min-h-screen bg-background flex flex-col')}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Zecchi Multiservizi",
              "image": "https://zecchimultiservizi.it/og-image.jpg",
              "@id": "https://zecchimultiservizi.it",
              "url": "https://zecchimultiservizi.it",
              "telephone": "+393404962500",
              "email": "monicazecchi56@gmail.com",
              "priceRange": "$$",
              "sameAs": [
                "https://www.facebook.com/AziendaMultiserviziZecchi",
                "https://www.instagram.com/zecchimultiservizi"
              ],
              "areaServed": [
                { "@type": "City", "name": "Terracina" },
                { "@type": "City", "name": "San Felice Circeo" },
                { "@type": "City", "name": "Sabaudia" },
                { "@type": "City", "name": "Fondi" },
                { "@type": "City", "name": "Latina" },
                { "@type": "AdministrativeArea", "name": "Provincia di Latina" }
              ],
              "knowsAbout": [
                "Potatura alto fusto",
                "Manutenzione giardini",
                "Scavi e movimento terra",
                "Piccoli lavori edili",
                "Impianti di irrigazione",
                "Pulizia condomini"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via C. Fusco, 4",
                "addressLocality": "Terracina",
                "postalCode": "04019",
                "addressRegion": "LT",
                "addressCountry": "IT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.2842,
                "longitude": 13.2458
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            })
          }}
        />
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