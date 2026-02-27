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

// --- COMPONENTE SLIDER OTTIMIZZATO ---
function ImageSlider({ images }: { images: { src: string; hint: string }[] }) {
  const [current, setCurrent] = useState(0);

  if (!images?.length)
    return (
      <div className="h-[300px] md:h-[500px] w-full bg-zinc-900 rounded-3xl animate-pulse" />
    );

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-3xl border border-white/10 group bg-zinc-900 shadow-xl">
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
            className="object-cover object-center"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md p-2 rounded-full hover:bg-primary hover:text-black opacity-0 group-hover:opacity-100 transition-all text-white z-20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md p-2 rounded-full hover:bg-primary hover:text-black opacity-0 group-hover:opacity-100 transition-all text-white z-20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
    </div>
  );
}

export default function ServiziPage() {
  const SERVICES_DATA = [
    {
      id: "giardini",
      name: "Manutenzione Giardini",
      description: "Progettazione e cura costante del verde. Trasformiamo il tuo spazio esterno in un angolo di paradiso.",
      icon: Sprout,
      isSlider: true,
      images: placeholderImages.services.giardinaggio.images,
      position: "object-center"
    },
    {
      id: "potature",
      name: "Potatura Alto Fusto",
      description: "Interventi specializzati in sicurezza per la potatura e l'abbattimento di alberi ad alto fusto.",
      icon: TreePine,
      image: placeholderImages.services.taglioPiante,
      position: "object-top" // Punta in ALTO per vedere le chiome
    },
    {
      id: "pulizie",
      name: "Pulizie e Igiene",
      description: "Igienizzazione e manutenzione ordinaria per condomini, uffici e residenze private.",
      icon: Building,
      image: placeholderImages.services.pulizieCondomini,
      position: "object-center"
    },
    {
      id: "edilizia",
      name: "Piccoli Lavori Edili",
      description: "Riparazioni, muratura leggera e rifacimento vialetti. Soluzioni rapide e pulite.",
      icon: Building2,
      isSlider: true,
      images: placeholderImages.services.lavoriEdili.images,
      position: "object-center"
    },
    {
      id: "scavi",
      name: "Scavi e Terreni",
      description: "Movimento terra, rimozione radici e livellamento con mezzi propri professionali.",
      icon: Truck,
      image: placeholderImages.services.scavi,
      position: "object-bottom" // Punta in BASSO per vedere lo scavo a terra
    },
    {
      id: "irrigazione",
      name: "Impianti Irrigazione",
      description: "Sistemi automatici a risparmio idrico per un prato sempre rigoglioso.",
      icon: Droplets,
      image: placeholderImages.services.impiantiIrrigazione,
      position: "object-center"
    },
  ];

  return (
    <div className="bg-zinc-950 min-h-screen text-white pb-20">
      <div className="container mx-auto max-w-6xl px-6 py-16 md:py-24">
        
        {/* Header bilanciato */}
        <div className="text-center mb-24 space-y-4">
          <h1 className="text-4xl md:text-7xl font-black tracking-tight uppercase">
            I Nostri <span className="text-primary italic">Servizi</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light italic">
            Zecchi Monica e Fabio: eccellenza artigiana a Terracina.
          </p>
        </div>

        {/* Griglia Servizi */}
        <div className="space-y-24 md:space-y-40">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div
                className={cn(
                  "relative w-full",
                  index % 2 !== 0 && "lg:col-start-2",
                )}
              >
                {service.isSlider ? (
                  <ImageSlider images={service.images} />
                ) : (
                  <div className="relative h-[300px] md:h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 group shadow-lg">
                    {service.image && (
                      <Image
                        src={service.image.src}
                        alt={service.name}
                        fill
                        className={cn(
                          "object-cover transition-transform duration-700 group-hover:scale-105",
                          service.position // Applica la posizione specifica (top, center, bottom)
                        )}
                        unoptimized
                      />
                    )}
                  </div>
                )}
              </div>

              <div
                className={cn(
                  "space-y-6",
                  index % 2 !== 0 && "lg:col-start-1 lg:row-start-1",
                )}
              >
                <div className="inline-flex p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                  <service.icon className="h-8 w-8 md:h-10 md:w-10" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-none">
                    {service.name}
                  </h2>
                  <p className="text-lg text-zinc-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
                <Button
                  asChild
                  variant="link"
                  className="text-primary p-0 text-lg hover:text-white gap-2 h-auto font-bold uppercase tracking-tighter"
                >
                  <Link href="/contatti" className="group">
                    Richiedi sopralluogo
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Finale */}
        <section className="mt-40 p-10 md:p-20 rounded-[2.5rem] border border-white/10 bg-zinc-900/40 backdrop-blur-md text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              Pronto a <span className="text-primary italic">iniziare?</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Contattaci per un preventivo gratuito. Operiamo a Terracina e in
              tutta la provincia di Latina.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-zinc-950 hover:bg-white rounded-full px-10 py-7 text-xl font-bold transition-all shadow-xl"
            >
              <Link href="/contatti">Parliamone ora</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}