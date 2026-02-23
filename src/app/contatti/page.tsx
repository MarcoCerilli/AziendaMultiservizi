import { Mail, Phone, MapPin, FileText, Star } from 'lucide-react';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Contatti e Preventivi Gratuiti - Zecchi Multiservizi',
  description: 'Contatta Zecchi Multiservizi a Terracina per un preventivo gratuito. Chiama Monica o Fabio per giardinaggio professionale, scavi ed edilizia.',
};

export default function ContattiPage() {
  // Dati aggiornati dal timbro e dalla tua richiesta
  const contactData = {
    monica: "+39 340 496 2500",
    fabio: "+39 333 389 5067",
    email: "monicazecchi56@gmail.com",
    address: "Via C. Fusco, 4 - 04019 Terracina (LT)",
    piva: "02990560597",
    cf: "ZCC MNC 72B44 L120G"
  };

  return (
    <div className="flex flex-col w-full bg-zinc-950">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full py-16 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container relative mx-auto px-6">
          <div className="max-w-4xl space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-primary/30">
              <Star className="h-3 w-3 fill-current" /> Sempre Operativi 24/7
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
              Siamo al tuo <br />
              <span className="text-primary italic">Servizio</span>
            </h1>
            <p className="max-w-2xl text-zinc-400 text-lg md:text-2xl leading-relaxed">
              Hai un progetto in mente? Zecchi Multiservizi è il tuo partner di fiducia a <span className="text-white font-bold">Terracina</span> e in tutto il Lazio per soluzioni definitive.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTENUTO PAGINA --- */}
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          
          {/* Colonna Info */}
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white flex items-center gap-3">
              I Nostri <span className="text-primary italic">Recapiti</span>
            </h2>

            {/* Card Telefoni */}
            <Card className="border-white/10 bg-white/5 backdrop-blur-md overflow-hidden border-l-4 border-l-primary">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-xl text-primary uppercase font-black tracking-widest">
                  <Phone className="h-6 w-6 text-white" /> Linea Diretta
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <a href={`tel:${contactData.monica.replace(/\s/g, '')}`} className="flex flex-col p-5 rounded-2xl bg-zinc-900 hover:bg-primary hover:text-black transition-all group border border-white/5 shadow-xl">
                  <span className="text-[10px] uppercase font-black opacity-60 tracking-widest">Monica</span>
                  <span className="text-xl font-black">{contactData.monica}</span>
                </a>
                <a href={`tel:${contactData.fabio.replace(/\s/g, '')}`} className="flex flex-col p-5 rounded-2xl bg-zinc-900 hover:bg-primary hover:text-black transition-all group border border-white/5 shadow-xl">
                  <span className="text-[10px] uppercase font-black opacity-60 tracking-widest">Fabio</span>
                  <span className="text-xl font-black">{contactData.fabio}</span>
                </a>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <Card className="border-white/10 bg-white/5 backdrop-blur-md hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-sm text-primary uppercase font-bold tracking-widest">
                    <Mail className="h-5 w-5" /> Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`mailto:${contactData.email}`} className="text-base font-bold break-all hover:text-white transition-colors underline decoration-primary">
                    {contactData.email}
                  </a>
                </CardContent>
              </Card>

              {/* Dove Siamo */}
              <Card className="border-white/10 bg-white/5 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-sm text-primary uppercase font-bold tracking-widest">
                    <MapPin className="h-5 w-5" /> Sede
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  <p className="font-bold text-white uppercase tracking-tight">{contactData.address}</p>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Copertura: Terracina e Provincia</p>
                </CardContent>
              </Card>
            </div>

            {/* Dati Fiscali (Timbro) */}
            <div className="p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-zinc-900 to-black space-y-4 shadow-inner">
              <h3 className="flex items-center gap-2 text-zinc-400 font-black text-xs uppercase tracking-[0.3em]">
                <FileText className="h-4 w-4 text-primary" /> Dati Aziendali
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                    <span className="block text-[10px] text-zinc-600 font-black uppercase">Partita IVA</span>
                    <span className="text-lg font-mono font-bold text-zinc-300">{contactData.piva}</span>
                </div>
                <div>
                    <span className="block text-[10px] text-zinc-600 font-black uppercase">Codice Fiscale</span>
                    <span className="text-lg font-mono font-bold text-zinc-300">{contactData.cf}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Immagine e Card Preventivo */}
          <div className="flex flex-col gap-6 h-full">
            <div className="relative group h-[400px] lg:flex-1 overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <Image
                src={placeholderImages.contact.src}
                alt="Contatti Zecchi Multiservizi"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10">
                 <div className="bg-primary p-8 rounded-[2rem] shadow-2xl transform transition-transform group-hover:-translate-y-2">
                    <p className="font-black uppercase tracking-tighter text-3xl text-black leading-none mb-2">Preventivi <br/>Gratuiti</p>
                    <p className="text-black/70 font-bold uppercase tracking-widest text-xs">Sopralluogo immediato senza impegno</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}