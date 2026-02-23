import { getContactInfo } from '@/lib/data';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Contatti e Preventivi Gratuiti - Zecchi Soluzioni',
  description: 'Contatta Zecchi Soluzioni per informazioni o un preventivo gratuito. Chiama ora Monica Zecchi o invia una mail per i tuoi lavori di giardinaggio, pulizia o edilizia.',
};

export default async function ContattiPage() {
  const contactInfo = await getContactInfo();

  return (
    <div className="flex flex-col w-full">
      {/* --- HERO SECTION RESPONSIVE --- */}
      <section className="relative w-full py-16 md:py-32 overflow-hidden bg-zinc-950">
        {/* Cerchi di luce soffusa per profondità (SEO friendly) */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

        <div className="container relative mx-auto px-6">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
              Siamo al tuo <br />
              <span className="text-primary bg-clip-text">Servizio</span>
            </h1>
            <p className="max-w-xl text-zinc-400 text-lg md:text-2xl leading-relaxed">
              Hai un progetto in mente? Dalla cura del verde alle ristrutturazioni, Zecchi Multiservizi è il tuo partner di fiducia a <span className="text-white font-bold">Pistoia</span> e provincia.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTENUTO PAGINA --- */}
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Colonna Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-8 flex items-center gap-3">
              I Nostri <span className="text-primary">Recapiti</span>
            </h2>

            <Card className="border-white/10 bg-white/5 backdrop-blur-md overflow-hidden group">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-xl text-primary uppercase font-bold">
                  <Phone className="h-5 w-5" /> Linea Diretta
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <a href={`tel:${contactInfo.phoneMonica}`} className="flex flex-col p-4 rounded-xl bg-white/5 hover:bg-primary hover:text-black transition-all group">
                  <span className="text-xs uppercase font-bold opacity-70">Monica</span>
                  <span className="text-lg font-black">{contactInfo.phoneMonica}</span>
                </a>
                <a href={`tel:${contactInfo.phoneFabio}`} className="flex flex-col p-4 rounded-xl bg-white/5 hover:bg-primary hover:text-black transition-all group">
                  <span className="text-xs uppercase font-bold opacity-70">Fabio</span>
                  <span className="text-lg font-black">{contactInfo.phoneFabio}</span>
                </a>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-white/10 bg-white/5 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg text-primary uppercase">
                    <Mail className="h-5 w-5" /> Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`mailto:${contactInfo.email}`} className="text-base font-bold break-all hover:text-primary transition-colors">
                    {contactInfo.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg text-primary uppercase">
                    <MapPin className="h-5 w-5" /> Dove Siamo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold">Pistoia (PT), Italia</p>
                  <p className="text-sm text-zinc-500">Copertura in tutta la Toscana settentrionale.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Immagine con Overlay (Ottimizzata Responsive) */}
          <div className="relative group h-[400px] md:h-full min-h-[400px] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={placeholderImages.contact.src}
              alt="Contatti Zecchi Soluzioni"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8 right-8">
               <div className="bg-primary/90 text-black p-6 rounded-2xl backdrop-blur-md">
                  <p className="font-black uppercase tracking-tighter text-xl mb-1">Preventivi gratuiti</p>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Risposta garantita entro 24 ore</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}