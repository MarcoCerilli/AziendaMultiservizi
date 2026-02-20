import { getContactInfo } from '@/lib/data';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Contatti - Zecchi Soluzioni',
  description: 'Contattaci per informazioni, preventivi o qualsiasi altra esigenza. Siamo a tua disposizione.',
};

export default async function ContattiPage() {
  const contactInfo = await getContactInfo();

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-20">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
          Contattaci
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Siamo qui per aiutarti. Richiedi un preventivo gratuito o maggiori informazioni sui nostri servizi.
        </p>
      </div>

      <Separator className="my-12" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <Card className="border-border/60 bg-secondary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Phone className="h-6 w-6 text-primary" />
                Telefoni
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <a href={`tel:${contactInfo.phoneMonica}`} className="flex items-center gap-3 transition-colors hover:text-primary">
                <span>Monica:</span>
                <span className="font-semibold">{contactInfo.phoneMonica}</span>
              </a>
              <a href={`tel:${contactInfo.phoneFabio}`} className="flex items-center gap-3 transition-colors hover:text-primary">
                <span>Fabio:</span>
                <span className="font-semibold">{contactInfo.phoneFabio}</span>
              </a>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-secondary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Mail className="h-6 w-6 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 font-semibold transition-colors hover:text-primary">
                {contactInfo.email}
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-border/60 bg-secondary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <MapPin className="h-6 w-6 text-primary" />
                Sede Operativa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>Pistoia (PT), Italia</p>
              <p className="text-base text-muted-foreground">Operiamo in tutta la provincia di Pistoia e aree limitrofe.</p>
            </CardContent>
          </Card>
        </div>

        <div className="overflow-hidden rounded-lg">
          <Image
            src={placeholderImages.contact.src}
            alt="Contatti Zecchi Soluzioni"
            width={1200}
            height={800}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            data-ai-hint={placeholderImages.contact.hint}
          />
        </div>
      </div>
    </div>
  );
}
