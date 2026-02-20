import { getServices } from '@/lib/data';
import type { Service } from '@/types';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Servizi - Zecchi Soluzioni',
  description: 'Scopri la nostra gamma completa di servizi professionali per casa e giardino a Pistoia e dintorni.',
};

function ServiceItem({ service, reverse = false }: { service: Service; reverse?: boolean }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center")}>
      <div className={cn("overflow-hidden rounded-lg shadow-lg", reverse && "md:col-start-2")}>
        <Image
          src={service.image.src}
          alt={`Immagine per il servizio ${service.name}`}
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          data-ai-hint={service.image.hint}
        />
      </div>
      <div className={cn("space-y-4", reverse && "md:col-start-1 md:row-start-1")}>
        <div className="flex items-center gap-4">
          <service.icon className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">{service.name}</h2>
        </div>
        <p className="text-lg text-muted-foreground">{service.description}</p>
      </div>
    </div>
  );
}

export default async function ServiziPage() {
  const services = await getServices();

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
      
      <div className="space-y-16 md:space-y-24">
        {services.map((service, index) => (
          <ServiceItem key={service.id} service={service} reverse={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}
