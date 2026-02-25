"use client";

import Image from "next/image";
import Link from "next/link";
import placeholderImages from "@/lib/placeholder-images.json";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] lg:h-[85vh] flex items-center overflow-hidden">
      {/* Background Image con fix inquadratura e luminosità */}
      <div className="absolute inset-0">
        <Image
          src={placeholderImages.hero.src}
          alt="Giardino curato Zecchi Multiservizi"
          fill
          className="object-cover scale-105 animate-in fade-in duration-1000"
          style={{ objectPosition: "50% 25%" }} // Centra meglio il soggetto senza tagliare troppo
          priority
          unoptimized
        />

        {/* Overlay più chiaro: ridotto l'opacità dei neri */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/40 to-transparent lg:bg-gradient-to-r lg:from-zinc-950/90 lg:via-zinc-950/30 lg:to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 z-10 pt-20 lg:pt-0">
        <div className="max-w-7xl space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-zinc-950/80 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-primary/40 backdrop-blur-md shadow-2xl">
              <Star className="h-3 w-3 fill-current shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
              <span className="ml-1 italic tracking-wider">
                Multiservizi Terracina & Dintorni
              </span>
            </div>

            <h1 className="font-black tracking-tighter text-white uppercase italic leading-[0.95]">
              <span className="text-[12.5vw] sm:text-7xl md:text-8xl block mb-2">
                Soluzioni
              </span>
              <span className="text-[11vw] sm:text-7xl md:text-8xl text-primary not-italic block">
                al tuo Servizio
              </span>
            </h1>

            <p className="max-w-[650px] text-zinc-300 text-lg md:text-2xl leading-relaxed font-light">
              Dalle grandi potature agli scavi edili.{" "}
              <span className="text-white font-bold">
                Zecchi Monica e Fabio
              </span>
              : l'esperienza multiservizi che trasforma i tuoi spazi con
              soluzioni definitive.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button
              asChild
              size="lg"
              className="h-16 px-10 text-xl rounded-full font-black shadow-2xl shadow-primary/40 bg-primary hover:bg-white hover:text-black transition-all uppercase tracking-tighter"
            >
              <Link href="/servizi">
                I Nostri Servizi <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-16 px-10 text-xl rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-md font-bold uppercase tracking-tighter"
            >
              <Link href="/contatti">Richiedi Preventivo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const features = [
    "Potature Alto Fusto e Abbattimenti",
    "Manutenzione Giardini e Aree Verde",
    "Piccoli Scavi e Movimento Terra",
    "Soluzioni Edili e Riparazioni",
  ];

  return (
    <section
      id="chi-siamo"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-zinc-950"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          {/* Griglia Immagini Moderna */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute top-0 left-0 w-4/5 h-[80%] overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10 z-20">
              <Image
                src={placeholderImages.about1.src}
                alt="Lavoro professionale Zecchi"
                fill
                className="object-cover object-top" // AGGIUNTO: object-top
                unoptimized
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3/5 h-[60%] overflow-hidden rounded-[2.5rem] shadow-2xl border border-primary/20 z-30">
              <Image
                src={placeholderImages.about2.src}
                alt="Dettaglio intervento tecnico"
                fill
                className="object-cover object-top" // AGGIUNTO: object-top
                unoptimized
              />
              <div className="absolute inset-0 bg-primary/5 backdrop-blur-[1px] hover:backdrop-blur-0 transition-all duration-500" />
            </div>

            {/* Box Esperienza */}
            <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-3xl z-40 shadow-2xl rotate-[-3deg] hidden md:block">
              <p className="text-zinc-950 font-black text-3xl leading-none uppercase tracking-tighter">
                15+ ANNI
                <br />
                <span className="text-white">DI ESPERIENZA</span>
              </p>
            </div>
          </div>

          {/* Testo descrittivo */}
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">
                L'Azienda di Famiglia
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none uppercase">
                La forza di un team, <br />
                <span className="text-primary italic">
                  la cura dei dettagli.
                </span>
              </h2>
              <p className="text-zinc-400 text-xl leading-relaxed font-light">
                Nata dalla sinergia tra{" "}
                <span className="text-white font-bold">Monica e Fabio</span>,
                Zecchi Multiservizi unisce la precisione del giardinaggio alla
                robusta esperienza negli interventi edili. Trattiamo ogni
                proprietà a Terracina come se fosse la nostra.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 bg-white/[0.03] p-5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group shadow-sm"
                >
                  <div className="bg-primary p-1.5 rounded-full text-zinc-950 group-hover:scale-110 transition-transform">
                    <Check className="h-4 w-4 stroke-[4px]" />
                  </div>
                  <span className="text-base font-bold text-zinc-200 uppercase tracking-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-16 px-10 bg-white text-zinc-950 hover:bg-primary hover:text-white font-black rounded-full transition-all text-xl uppercase tracking-tighter"
            >
              <Link href="/contatti">
                Inizia il tuo Progetto <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-zinc-950">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
