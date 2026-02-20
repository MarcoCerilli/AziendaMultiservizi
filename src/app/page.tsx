import { Navbar } from '@/components/Navbar';
import { AiAssistant } from '@/components/AiAssistant';
import { getServices, getContactInfo } from '@/lib/data';
import type { Service } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

async function ServicesGrid() {
  const services = await getServices();
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((service: Service) => (
        <Card
          key={service.id}
          className="transform-gpu border-border/60 bg-secondary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">{service.name}</CardTitle>
            <service.icon className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            {/* Can add a short description here later if needed */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
              Soluzioni Professionali per Casa e Giardino
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Dal giardinaggio all'edilizia, la nostra esperienza al vostro servizio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

async function Footer() {
  const contactInfo = await getContactInfo();
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-4 py-12 text-center md:grid-cols-3 md:text-left">
        <div>
          <h3 className="text-lg font-semibold text-primary">Zecchi Soluzioni</h3>
          <p className="mt-2 text-sm text-muted-foreground">La vostra soddisfazione è il nostro obiettivo.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">Servizi Principali</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Giardinaggio</li>
            <li>Pulizie</li>
            <li>Lavori Edili</li>
            <li>... e molto altro</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">Contattaci</h3>
          <div className="mt-2 space-y-2 text-sm">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center justify-center gap-2 text-muted-foreground transition-colors hover:text-primary md:justify-start">
              <Mail className="h-4 w-4" />
              <span>{contactInfo.email}</span>
            </a>
            <a href={`tel:${contactInfo.phoneMonica}`} className="flex items-center justify-center gap-2 text-muted-foreground transition-colors hover:text-primary md:justify-start">
              <Phone className="h-4 w-4" />
              <span>Monica: {contactInfo.phoneMonica}</span>
            </a>
            <a href={`tel:${contactInfo.phoneFabio}`} className="flex items-center justify-center gap-2 text-muted-foreground transition-colors hover:text-primary md:justify-start">
              <Phone className="h-4 w-4" />
              <span>Fabio: {contactInfo.phoneFabio}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 py-4">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zecchi Soluzioni. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <section id="servizi" className="w-full bg-black/20 py-12 md:py-24">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl">
              I Nostri Servizi
            </h2>
            <ServicesGrid />
          </div>
        </section>
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
}
