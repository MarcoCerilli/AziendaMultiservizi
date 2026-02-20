import Image from 'next/image';
import Link from 'next/link';
import placeholderImages from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
       <Image
          src={placeholderImages.hero.src}
          alt="Giardino curato"
          fill
          className="object-cover object-center"
          priority
          data-ai-hint={placeholderImages.hero.hint}
       />
       <div className="absolute inset-0 bg-black/50" />
       <div className="relative container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl/none">
              Zecchi Soluzioni
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Dal giardinaggio all'edilizia, la nostra esperienza al vostro servizio.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/servizi">
                Scopri i Servizi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contatti">Contattaci Ora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const features = [
    "Servizi completi a 360°",
    "Professionalità e competenza",
    "Preventivi chiari e gratuiti",
    "Passione per il nostro lavoro"
  ];

  return (
    <section id="chi-siamo" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Chi Siamo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              La tua soluzione unica per casa e giardino
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Zecchi Soluzioni è un'azienda multiservizi che nasce dalla passione e dall'esperienza. Offriamo un'ampia gamma di servizi per privati, aziende e condomini, garantendo sempre la massima qualità e attenzione al cliente.
            </p>
            <ul className="grid gap-4">
              {features.map(feature => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-primary" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
              <Image
                src={placeholderImages.about1.src}
                alt="Servizio Giardinaggio"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                data-ai-hint={placeholderImages.about1.hint}
              />
              <Image
                src={placeholderImages.about2.src}
                alt="Servizio Pulizie"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                data-ai-hint={placeholderImages.about2.hint}
              />
               <Image
                src={placeholderImages.about3.src}
                alt="Servizio Edilizia"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full col-span-2 transform transition-transform duration-300 hover:scale-105"
                data-ai-hint={placeholderImages.about3.hint}
              />
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}
