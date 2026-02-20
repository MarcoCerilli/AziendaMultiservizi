import { getServices } from '@/lib/data';
import type { Service } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Servizi - Zecchi Soluzioni',
  description: 'Scopri la nostra gamma completa di servizi professionali per casa e giardino a Pistoia e dintorni.',
};

async function ServicesGrid() {
  const services = await getServices();
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((service: Service) => (
        <Card
          key={service.id}
          className="flex transform-gpu flex-col justify-between border-border/60 bg-secondary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">{service.name}</CardTitle>
            <service.icon className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Descrizione del servizio {service.name.toLowerCase()}.</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default async function ServiziPage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-20">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
          I Nostri Servizi
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Offriamo una vasta gamma di soluzioni per la cura della tua casa e del tuo giardino, con professionalità e passione.
        </p>
      </div>

      <Separator className="my-12" />
      
      <ServicesGrid />
    </div>
  );
}
