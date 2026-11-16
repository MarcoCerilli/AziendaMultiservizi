import { Mail, Phone, MapPin, FileText, Sparkles, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Contatti e Preventivi Gratuiti - Zecchi Multiservizi',
  description: 'Contatta Zecchi Multiservizi a Terracina per un preventivo gratuito. Chiama Monica o Fabio per giardinaggio professionale, scavi ed edilizia.',
  alternates: {
    canonical: '/contatti',
  },
};

export default function ContattiPage() {
  const contactData = {
    monica: "+39 340 496 2500",
    fabio: "+39 333 389 5067",
    email: "monicazecchi56@gmail.com",
    address: "Via C. Fusco, 4 - 04019 Terracina (LT)",
    piva: "02990560597",
    cf: "ZCC MNC 72B44 L120G"
  };

  return (
    <div className="flex flex-col w-full bg-[#f4f7f3] text-[#111c16]">
      {/* Header */}
      <section className="relative w-full pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden border-b border-white/[0.08] bg-[#0e1712] text-white bg-subtle-grid">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 z-10">
          <div className="max-w-2xl space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/30">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Affidati a Zecchi Multiservizi</span>
            </div>
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Siamo al tuo <span className="text-primary">servizio.</span>
            </h1>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              Hai un progetto in mente? Zecchi Multiservizi è il tuo partner di fiducia a{' '}
              <span className="text-white font-semibold">Terracina</span> e provincia per soluzioni concrete e durature.
            </p>
          </div>
        </div>
      </section>

      {/* Contenuto Pagina */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">

          {/* Colonna Info */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-[#111c16]">
              I Nostri <span className="text-emerald-700">Recapiti</span>
            </h2>

            {/* Card Telefoni */}
            <Card className="surface-light-card rounded-2xl overflow-hidden border-l-4 border-l-primary">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2.5 text-sm text-emerald-800 uppercase font-bold tracking-wider">
                  <Phone className="h-4 w-4 text-primary" /> Linea Diretta
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${contactData.monica.replace(/\s/g, '')}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#f4f7f3] border border-emerald-950/10 text-[#111c16] hover:bg-primary hover:text-zinc-950 hover:border-primary transition-all group"
                >
                  <div>
                    <span className="block text-[11px] uppercase font-bold opacity-65 tracking-wider">
                      Monica
                    </span>
                    <span className="text-base font-bold tracking-tight">
                      {contactData.monica}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href={`tel:${contactData.fabio.replace(/\s/g, '')}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#f4f7f3] border border-emerald-950/10 text-[#111c16] hover:bg-primary hover:text-zinc-950 hover:border-primary transition-all group"
                >
                  <div>
                    <span className="block text-[11px] uppercase font-bold opacity-65 tracking-wider">
                      Fabio
                    </span>
                    <span className="text-base font-bold tracking-tight">
                      {contactData.fabio}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <Card className="surface-light-card rounded-2xl hover:border-primary/60 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xs text-emerald-800 uppercase font-bold tracking-wider">
                    <Mail className="h-4 w-4 text-primary" /> Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-sm font-semibold text-[#111c16] break-all hover:text-emerald-700 transition-colors underline decoration-primary underline-offset-4"
                  >
                    {contactData.email}
                  </a>
                </CardContent>
              </Card>

              {/* Dove Siamo */}
              <Card className="surface-light-card rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xs text-emerald-800 uppercase font-bold tracking-wider">
                    <MapPin className="h-4 w-4 text-primary" /> Sede
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  <p className="text-sm font-semibold text-[#111c16]">
                    {contactData.address}
                  </p>
                  <p className="text-xs text-emerald-950/65">
                    Copertura: Terracina e Provincia
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Dati Fiscali */}
            <div className="p-5 rounded-2xl surface-light-card space-y-3">
              <h3 className="flex items-center gap-2 text-emerald-900/70 font-bold text-xs uppercase tracking-wider">
                <FileText className="h-4 w-4 text-primary" /> Dati Aziendali
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <span className="block text-[11px] text-emerald-950/55 font-semibold uppercase">
                    Partita IVA
                  </span>
                  <span className="text-sm font-mono font-semibold text-[#111c16]">
                    {contactData.piva}
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] text-emerald-950/55 font-semibold uppercase">
                    Codice Fiscale
                  </span>
                  <span className="text-sm font-mono font-semibold text-[#111c16]">
                    {contactData.cf}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Immagine e Card Preventivo */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative group h-[340px] lg:h-full min-h-[380px] overflow-hidden rounded-2xl border border-emerald-950/15 shadow-xl">
              <Image
                src={placeholderImages.contact.src}
                alt="Contatti Zecchi Multiservizi"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1611] via-[#0d1611]/25 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-primary/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20 transition-transform duration-300 group-hover:-translate-y-1">
                  <p className="font-headline font-extrabold text-xl text-zinc-950 leading-tight">
                    Preventivi Gratuiti
                  </p>
                  <p className="text-zinc-900/80 font-semibold text-xs mt-1">
                    Sopralluogo rapido senza impegno a Terracina e dintorni
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
