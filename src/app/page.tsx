import Image from "next/image";
import Link from "next/link";
import placeholderImages from "@/lib/placeholder-images.json";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  MapPin,
  ShieldCheck,
  Clock,
  Sprout,
  TreePine,
  Truck,
  Building2,
  Droplets,
  Building,
  Sparkles,
} from "lucide-react";

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: "15+ anni di esperienza" },
  { icon: MapPin, label: "Terracina e Provincia" },
  { icon: Clock, label: "Sopralluoghi e preventivi gratuiti" },
];

const QUICK_SERVICES = [
  {
    id: "giardini",
    title: "Manutenzione Giardini",
    desc: "Cura costante, sfalcio e progettazione di aree verdi private e condominiali.",
    icon: Sprout,
  },
  {
    id: "potature",
    title: "Potatura Alto Fusto",
    desc: "Interventi in sicurezza per potatura e abbattimento alberi ad alto fusto.",
    icon: TreePine,
  },
  {
    id: "scavi",
    title: "Scavi e Movimento Terra",
    desc: "Livellamento terreni, rimozione radici e scavi con mezzi propri.",
    icon: Truck,
  },
  {
    id: "edilizia",
    title: "Piccoli Lavori Edili",
    desc: "Muratura leggera, riparazioni, recinzioni e rifacimento vialetti.",
    icon: Building2,
  },
  {
    id: "irrigazione",
    title: "Impianti Irrigazione",
    desc: "Sistemi automatici su misura per un giardino sempre sano senza sprechi.",
    icon: Droplets,
  },
  {
    id: "pulizie",
    title: "Pulizie e Igiene",
    desc: "Manutenzione e pulizia ordinaria per condomini, residence e privati.",
    icon: Building,
  },
];

function HeroSection() {
  return (
    <section className="relative w-full min-h-[82vh] lg:min-h-[640px] lg:max-h-[780px] flex items-center overflow-hidden border-b border-white/[0.08] bg-[#0d1611]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={placeholderImages.hero.src}
          alt="Giardino curato Zecchi Multiservizi"
          fill
          sizes="100vw"
          className="object-cover scale-[1.02] animate-in fade-in duration-1000"
          style={{ objectPosition: "50% 25%" }}
          priority
        />
        {/* Overlay verde foresta profondo al posto del nero piatto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1611] via-[#0d1611]/70 to-[#0d1611]/35 lg:bg-gradient-to-r lg:from-[#0d1611]/95 lg:via-[#0d1611]/70 lg:to-[#0d1611]/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(87,195,34,0.16),transparent_55%)]" />
      </div>

      <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 z-10 pt-28 pb-14 md:pt-32 md:pb-16">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-zinc-900/80 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/30 backdrop-blur-md shadow-lg">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Multiservizi a Terracina &amp; Dintorni</span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            Soluzioni concrete{" "}
            <span className="text-primary block sm:inline">
              al tuo servizio.
            </span>
          </h1>

          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl">
            Dalle potature ad alto fusto agli scavi edili.{" "}
            <span className="text-white font-semibold">
              Zecchi Monica e Fabio
            </span>
            : esperienza artigiana e cura dei dettagli per valorizzare i tuoi
            spazi esterni e condominiali.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Button
              asChild
              size="lg"
              className="h-11 px-6 text-sm md:text-base rounded-full font-bold bg-primary text-zinc-950 hover:bg-accent transition-all shadow-[0_0_24px_-4px_rgba(87,195,34,0.5)] group"
            >
              <Link href="/servizi">
                Scopri i Servizi
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 px-6 text-sm md:text-base rounded-full border-white/20 bg-zinc-950/50 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-md font-semibold"
            >
              <Link href="/contatti">Richiedi Preventivo</Link>
            </Button>
          </div>

          {/* Trust Bar compatta */}
          <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-white/10">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300"
              >
                <Icon className="h-4 w-4 text-primary shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPreviewSection() {
  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#f4f7f3] text-[#111c16] border-b border-emerald-950/10">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <span className="inline-block text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs">
              Cosa Facciamo
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#111c16]">
              Un unico partner per verde ed edilizia
            </h2>
          </div>
          <Link
            href="/servizi"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-900 transition-colors group shrink-0"
          >
            Tutti i servizi nel dettaglio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {QUICK_SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={`/servizi#${item.id}`}
                className="surface-light-card rounded-2xl p-5 flex flex-col justify-between gap-4 hover:border-primary hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 border border-primary/30 text-emerald-800 group-hover:bg-primary group-hover:text-zinc-950 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-headline text-lg font-bold text-[#111c16] group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-emerald-950/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors pt-1">
                  Scopri di più
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const features = [
    "Potature alto fusto e abbattimenti",
    "Manutenzione giardini e aree verdi",
    "Piccoli scavi e movimento terra",
    "Soluzioni edili e riparazioni",
    "Impianti di irrigazione automatici",
    "Pulizie per condomini e privati",
  ];

  return (
    <section
      id="chi-siamo"
      className="relative w-full py-16 lg:py-24 overflow-hidden bg-[#101a14]"
    >
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Composizione Immagini Bilanciata */}
          <div className="relative h-[360px] sm:h-[420px]">
            <div className="absolute top-0 left-0 w-[78%] h-[82%] overflow-hidden rounded-2xl shadow-2xl border border-white/10 z-20">
              <Image
                src={placeholderImages.about1.src}
                alt="Lavoro professionale Zecchi"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-[56%] h-[58%] overflow-hidden rounded-2xl shadow-2xl border border-primary/30 z-30 bg-zinc-900">
              <Image
                src={placeholderImages.about2.src}
                alt="Dettaglio intervento tecnico"
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover object-top"
              />
            </div>

            {/* Badge Esperienza compatto e raffinato */}
            <div className="absolute bottom-4 left-4 bg-zinc-950/90 backdrop-blur-md border border-primary/40 px-4 py-3 rounded-2xl z-40 shadow-xl hidden sm:flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary text-zinc-950 flex items-center justify-center font-headline font-extrabold text-sm">
                15+
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">
                  Anni di esperienza
                </p>
                <p className="text-zinc-400 text-xs">
                  Affidabilità sul territorio
                </p>
              </div>
            </div>
          </div>

          {/* Testo descrittivo */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
                L&apos;Azienda di Famiglia
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                La forza di un team,{" "}
                <span className="text-primary">la cura dei dettagli.</span>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Nata dalla sinergia tra{" "}
                <span className="text-white font-semibold">Monica e Fabio</span>
                , Zecchi Multiservizi unisce la precisione del giardinaggio alla
                solida esperienza negli interventi edili. Trattiamo ogni
                proprietà a Terracina come se fosse la nostra.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 surface-card px-3.5 py-3 rounded-xl hover:border-primary/40 transition-colors group"
                >
                  <div className="bg-primary/15 border border-primary/30 p-1 rounded-full text-primary shrink-0 group-hover:bg-primary group-hover:text-zinc-950 transition-colors">
                    <Check className="h-3.5 w-3.5 stroke-[2.5px]" />
                  </div>
                  <span className="text-sm font-medium text-zinc-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-11 px-7 bg-white text-zinc-950 hover:bg-primary hover:text-zinc-950 font-bold rounded-full transition-all text-sm md:text-base group"
              >
                <Link href="/contatti">
                  Inizia il tuo progetto
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#0e1712]">
      <HeroSection />
      <ServicesPreviewSection />
      <AboutSection />
    </div>
  );
}
