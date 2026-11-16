import type { Metadata } from "next";
import { ServiziClient } from "@/components/ServiziClient";

export const metadata: Metadata = {
  title: "Servizi di Giardinaggio, Potature, Scavi ed Edilizia a Terracina",
  description:
    "Scopri i servizi di Zecchi Multiservizi a Terracina e provincia: manutenzione giardini, potatura alberi alto fusto, scavi, piccoli lavori edili, impianti di irrigazione e pulizie condomini.",
  alternates: {
    canonical: "/servizi",
  },
};

export default function ServiziPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servizi Zecchi Multiservizi Terracina",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Manutenzione Giardini a Terracina" },
      { "@type": "ListItem", position: 2, name: "Potatura Alto Fusto e Abbattimenti" },
      { "@type": "ListItem", position: 3, name: "Pulizie Condomini, Residence e Privati" },
      { "@type": "ListItem", position: 4, name: "Piccoli Lavori Edili e Muratura" },
      { "@type": "ListItem", position: 5, name: "Scavi e Movimento Terra" },
      { "@type": "ListItem", position: 6, name: "Impianti di Irrigazione Automatici" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServiziClient />
    </>
  );
}
