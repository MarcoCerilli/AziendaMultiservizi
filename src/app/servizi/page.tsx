"use client";

import { useState } from "react";
import {
  TreePine,
  Sprout,
  Truck,
  Building2,
  Droplets,
  Shovel,
  Building,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import placeholderImages from "@/lib/placeholder-images.json";

// --- COMPONENTE SLIDER OTTIMIZZATO (FORMATO ALLARGATO) ---
function ImageSlider({ images }: { images: { src: string; hint: string }[] }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="h-[450px] md:h-[550px] w-full bg-zinc-900 rounded-[2.5rem] animate-pulse" />
    );
  }

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10 group bg-zinc-900">
      {images.map((img, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105",
          )}
        >
          {/* Sfondo sfocato: riempie i bordi per qualsiasi formato (verticale o orizzontale) */}
          <Image
            src={img.src}
            alt=""
            fill
            className="object-cover blur-2xl opacity-25"
            unoptimized
          />
          {/* Immagine principale: Nessun taglio grazie a contain, più grande grazie al contenitore h-550 */}
          <Image
            src={img.src}
            alt={img.hint}
            fill
            className="object-contain p-4 md:p-8" 
            unoptimized
          />
        </div>
      ))}

      {/* Overlay Sfumato leggero */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md p-4 rounded-full hover:bg-primary hover:text-black opacity-0 group-hover:opacity-100 z-20 transition-all text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md p-4 rounded-full hover:bg-primary hover:text-black opacity-0 group-hover:opacity-100 z-20 transition-all text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicatori */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300", 
                  i === current ? "bg-primary w-8" : "bg-white/30 w-4"
                )} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ServiziPage() {
  const SERVICES_DATA = [
    {
      id: "giardini",
      name: "Creazione e Manutenzione Giardini",
      description: "Dalla progettazione alla cura costante. Trasformiamo il tuo spazio esterno in un angolo di paradiso curato nei minimi dettagli.",
      icon: Sprout,
      isSlider: true,
      images: placeholderImages.services.giardinaggio.images,
    },
    {
      id: "potature",
      name: "Taglio e Potatura Alto Fusto",
      description: "Interventi specializzati in sicurezza per la potatura e l'abbattimento di alberi ad alto fusto mediante tecniche avanzate.",
      icon: TreePine,
      image: placeholderImages.services.taglioPiante,
    },
    {
      id: "pulizie",
      name: "Pulizie Condomini e Privati",
      description: "Igienizzazione e manutenzione ordinaria/straordinaria per aree comuni condominiali, uffici e residenze private.",
      icon: Building,
      image: placeholderImages.services.pulizieCondomini,
    },
    {
      id: "edilizia",
      name: "Piccoli Lavori Edili",
      description: "Riparazioni, muratura leggera, rifacimento vialetti e manutenzioni edili per interni ed esterni. Soluzioni rapide e garantite.",
      icon: Building2,
      isSlider: true,
      images: placeholderImages.services.lavoriEdili.images,
    },
    {
      id: "scavi",
      name: "Scavi Terreni",
      description: "Movimento terra, rimozioni tronchi d'albero e radici, impianti di irrigazione o livellamento del terreno con mezzi propri professionali.",
      icon: Truck,
      image: placeholderImages.services.scavi,
    },
    {
      id: "irrigazione",
      name: "Impianti di Irrigazione",
      description: "Progettazione e installazione di sistemi automatici a risparmio idrico per mantenere il tuo verde sempre rigoglioso.",
      icon: Droplets,
      image: placeholderImages.services.impiantiIrrigazione,
    },
  ];

  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <div className="container mx-auto max-w-screen-xl px-6 py-24">
        
        {/* Header Sezione */}
        <div className="text-center mb-32 space-y-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
            I Nostri <span className="text-primary not-italic">Servizi</span>
          </h1>
          <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl mx-auto italic font-light">
            Zecchi Monica e Fabio: l’eccellenza artigiana al servizio del tuo verde a Terracina.
          </p>
        </div>

        {/* Lista Servizi */}
        <div className="space-y-48">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center",
              )}
            >
              <div
                className={cn(
                  "relative w-full",
                  index % 2 !== 0 && "md:col-start-2",
                )}
              >
                {service.isSlider ? (
                  <ImageSlider images={service.images} />
                ) : (
                  <div className="relative h-[450px] md:h-[550px] overflow-hidden rounded-[2.5rem] border border-white/10 group shadow-2xl bg-zinc-900">
                    {service.image && (
                      <>
                        <Image
                          src={service.image.src}
                          alt=""
                          fill
                          className="object-cover blur-2xl opacity-20"
                          unoptimized
                        />
                        <Image
                          src={service.image.src}
                          alt={service.name}
                          fill
                          className="object-contain p-6 md:p-10 transition-transform duration-700 group-hover:scale-105"
                          unoptimized
                        />
                      </>
                    )}
                  </div>
                )}
              </div>

              <div
                className={cn(
                  "space-y-8 px-4",
                  index % 2 !== 0 && "md:col-start-1 md:row-start-1",
                )}
              >
                <div className="inline-flex p-5 rounded-2xl bg-primary/10 border border-primary/20 text-primary shadow-[0_0_20px_rgba(100,255,0,0.1)]">
                  <service.icon className="h-12 w-12" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic leading-tight">
                    {service.name}
                  </h2>
                  <p className="text-xl text-zinc-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
                <Button
                  asChild
                  variant="link"
                  className="text-primary p-0 text-xl hover:text-white transition-colors gap-2 italic font-bold"
                >
                  <Link href="/contatti" className="group">
                    Richiedi sopralluogo gratuito
                    <ArrowRight className="h-6 w-6 ml-2 transition-transform group-hover:translate-x-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Finale */}
        <section className="relative w-full py-24 px-8 mt-40 overflow-hidden rounded-[4rem] border border-white/10 bg-zinc-900/40 backdrop-blur-xl text-center shadow-3xl">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
              Hai un progetto <br />{" "}
              <span className="text-primary not-italic text-shadow-glow">
                in mente?
              </span>
            </h2>
            <p className="text-zinc-400 text-xl max-w-xl mx-auto italic mb-4">
              Dalla piccola riparazione alla creazione del tuo giardino ideale.
              Siamo qui per realizzarlo.
            </p>
            <Button
              asChild
              size="lg"
              className="h-20 px-16 bg-primary text-zinc-950 hover:bg-white hover:text-black rounded-full text-2xl font-black transition-all shadow-2xl shadow-primary/20 uppercase tracking-tighter transform hover:scale-105"
            >
              <Link href="/contatti">Parliamo del tuo progetto</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}