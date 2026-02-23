import Image from 'next/image';
import Link from 'next/link';
import placeholderImages from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] flex items-center overflow-hidden">
      {/* Background Image con overlay dinamico */}
      <div className="absolute inset-0">
        <Image
          src={placeholderImages.hero.src}
          alt="Giardino curato Zecchi Multiservizi"
          fill
          className="object-cover scale-105 animate-in fade-in duration-1000"
          priority
        />
        {/* Overlay sfumato per far risaltare il testo a sinistra */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-8xl lg:leading-[1.1]">
              Professionalità <br />
              <span className="text-primary italic">nel Verde</span>
            </h1>
            <p className="max-w-[600px] text-gray-300 text-lg md:text-2xl leading-relaxed">
              Dalle grandi potature agli scavi edili. Zecchi Monica e Fabio: l'esperienza multiservizi che trasforma i tuoi spazi.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full font-bold shadow-lg shadow-primary/20">
              <Link href="/servizi">
                I Nostri Servizi <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
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
    "Soluzioni Edili e Riparazioni"
  ];

  return (
    <section id="chi-siamo" className="relative w-full py-24 overflow-hidden">
      {/* 🎨 TRAMA DI SFONDO (Pattern Topografico / Grid) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Griglia Immagini Moderna asimmetrica */}
          <div className="relative grid grid-cols-12 gap-4 h-[500px]">
            <div className="col-span-8 h-full relative overflow-hidden rounded-3xl shadow-2xl border border-white/5">
                <Image src={placeholderImages.about1.src} alt="Lavoro di giardinaggio" fill className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="col-span-4 grid grid-rows-2 gap-4">
                <div className="relative overflow-hidden rounded-3xl shadow-xl border border-white/5">
                    <Image src={placeholderImages.about2.src} alt="Dettaglio scavi" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="relative overflow-hidden rounded-3xl bg-primary flex items-center justify-center p-6 text-center shadow-lg shadow-primary/20">
                    <p className="text-white font-black text-xl leading-tight uppercase tracking-tighter">
                      15+ Anni <br/> Esperienza
                    </p>
                </div>
            </div>
          </div>

          {/* Testo descrittivo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm italic">L'Azienda</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                La forza di un team, <br /><span className="text-primary">la cura di una famiglia.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nata dalla sinergia tra Monica e Fabio, Zecchi Multiservizi unisce la precisione del giardinaggio professionale alla robustezza degli interventi edili. Ci prendiamo cura della tua proprietà con soluzioni su misura e durature.
              </p>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map(feature => (
                <li key={feature} className="flex items-center gap-3 group bg-white/5 p-4 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
                  <div className="bg-primary/20 p-1 rounded-full text-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
                <Button asChild size="lg">
                    <Link href="/contatti">
                        Richiedi un Preventivo Gratuito
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Export finale fondamentale per Next.js
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      {/* Qui puoi aggiungere altre sezioni come ServiziHighlight o Testimonianze */}
    </div>
  );
}