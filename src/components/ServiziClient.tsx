"use client";

import { useState } from "react";
import {
  TreePine,
  Sprout,
  Truck,
  Building2,
  Droplets,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import placeholderImages from "@/lib/placeholder-images.json";

function ImageSlider({ images }: { images: { src: string; hint: string }[] }) {
  const [current, setCurrent] = useState(0);

  if (!images?.length)
    return (
      <div className="h-[260px] md:h-[360px] w-full bg-zinc-900 rounded-2xl animate-pulse" />
    );

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative h-[260px] md:h-[360px] w-full overflow-hidden rounded-2xl border border-white/10 group bg-zinc-900 shadow-xl">
      {images.map((img, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-700",
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105",
          )}
        >
          <Image
            src={img.src}
            alt={img.hint}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
        </div>
      ))}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Immagine precedente"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-zinc-950/70 backdrop-blur-md p-2 rounded-full border border-white/10 hover:bg-primary hover:text-zinc-950 md:opacity-0 md:group-hover:opacity-100 transition-all text-white z-20"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            aria-label="Immagine successiva"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-zinc-950/70 backdrop-blur-md p-2 rounded-full border border-white/10 hover:bg-primary hover:text-zinc-950 md:opacity-0 md:group-hover:opacity-100 transition-all text-white z-20"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-zinc-950/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Vai all'immagine ${idx + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  idx === current ? "w-5 bg-primary" : "w-1.5 bg-white/40 hover:bg-white/70",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function ServiziClient() {
  const SERVICES_DATA = [
    {
      id: "giardini",
      name: "Manutenzione Giardini",
      description:
        "Progettazione e cura costante del verde. Trasformiamo il tuo spazio esterno in un ambiente curato, ordinato e rigoglioso tutto l'anno.",
      icon: Sprout,
      isSlider: true,
      images: placeholderImages.services.giardinaggio.images,
      position: "object-center",
    },
    {
      id: "potature",
      name: "Potatura Alto Fusto",
      description:
        "Interventi specializzati in sicurezza per la potatura, la messa in sicurezza e l'abbattimento controllato di alberi ad alto fusto.",
      icon: TreePine,
      image: placeholderImages.services.taglioPiante,
      position: "object-top",
    },
    {
      id: "pulizie",
      name: "Pulizie e Igiene",
      description:
        "Igienizzazione e manutenzione ordinaria per condomini, uffici, residence e residenze private con prodotti professionali.",
      icon: Building,
      image: placeholderImages.services.pulizieCondomini,
      position: "object-center",
    },
    {
      id: "edilizia",
      name: "Piccoli Lavori Edili",
      description:
        "Riparazioni, muratura leggera, recinzioni e rifacimento vialetti. Soluzioni rapide, precise e pulite per casa e giardino.",
      icon: Building2,
      isSlider: true,
      images: placeholderImages.services.lavoriEdili.images,
      position: "object-center",
    },
    {
      id: "scavi",
      name: "Scavi e Terreni",
      description:
        "Movimento terra, pulizia terreni da rovi e sterpaglie, rimozione radici e livellamento con mezzi propri professionali.",
      icon: Truck,
      image: placeholderImages.services.scavi,
      position: "object-bottom",
    },
    {
      id: "irrigazione",
      name: "Impianti Irrigazione",
      description:
        "Progettazione e installazione di sistemi automatici a risparmio idrico per mantenere il prato sempre sano e verde.",
      icon: Droplets,
      image: placeholderImages.services.impiantiIrrigazione,
      position: "object-center",
    },
  ];

  return (
    <div className="bg-[#f4f7f3] min-h-screen text-[#111c16] pb-20">
      {/* Header sezione */}
      <section className="relative border-b border-white/[0.08] bg-[#0e1712] text-white bg-subtle-grid overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-12 md:pt-32 md:pb-16 relative z-10 text-center space-y-5">
          <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/25 px-3.5 py-1 text-xs font-semibold text-primary tracking-wide">
            Le Nostre Competenze
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            I Nostri <span className="text-primary">Servizi</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            Zecchi Monica e Fabio: esperienza artigiana e attrezzature dedicate a
            Terracina e provincia.
          </p>

          {/* Indice rapido servizi */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {SERVICES_DATA.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-900/80 border border-white/10 text-zinc-300 hover:border-primary/40 hover:text-primary transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 pt-14 md:pt-20">
        {/* Lista Servizi */}
        <div className="space-y-16 md:space-y-24">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div
                className={cn(
                  "relative w-full",
                  index % 2 !== 0 && "lg:col-start-2",
                )}
              >
                {service.isSlider ? (
                  <ImageSlider images={service.images!} />
                ) : (
                  <div className="relative h-[260px] md:h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 group shadow-xl">
                    {service.image && (
                      <Image
                        src={service.image.src}
                        alt={service.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className={cn(
                          "object-cover transition-transform duration-700 group-hover:scale-105",
                          service.position,
                        )}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
                  </div>
                )}
              </div>

              <div
                className={cn(
                  "space-y-5",
                  index % 2 !== 0 && "lg:col-start-1 lg:row-start-1",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 border border-primary/30 text-emerald-800">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-900/50 tracking-widest">
                    0{index + 1} / 0{SERVICES_DATA.length}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-[#111c16]">
                    {service.name}
                  </h2>
                  <p className="text-base text-emerald-950/75 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <Button
                  asChild
                  variant="link"
                  className="text-emerald-700 p-0 text-sm hover:text-emerald-950 gap-1.5 h-auto font-bold group"
                >
                  <Link href="/contatti">
                    Richiedi un sopralluogo gratuito
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Finale */}
        <section className="mt-20 p-8 md:p-12 rounded-3xl bg-[#101a14] text-white border border-emerald-950/15 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="font-headline text-2xl md:text-4xl font-extrabold tracking-tight">
              Pronto a <span className="text-primary">iniziare?</span>
            </h2>
            <p className="text-zinc-400 text-base">
              Contattaci per un preventivo gratuito senza impegno. Operiamo a
              Terracina e in tutta la provincia di Latina.
            </p>
            <div className="pt-1">
              <Button
                asChild
                size="lg"
                className="bg-primary text-zinc-950 hover:bg-accent rounded-full px-7 h-11 text-sm md:text-base font-bold transition-all shadow-[0_0_24px_-4px_rgba(87,195,34,0.45)]"
              >
                <Link href="/contatti">Parliamone ora</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
