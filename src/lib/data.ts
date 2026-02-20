import { db } from './firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import type { Service, ContactInfo } from '@/types';
import {
  Leaf,
  Tractor,
  Trees,
  Building,
  Construction,
  Droplets,
  Scissors,
  type LucideIcon,
} from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';

const iconMap: { [key: string]: LucideIcon } = {
  'Giardinaggio (pubblico/privato)': Leaf,
  'Pulizia terreni': Tractor,
  'Taglio piante alto fusto': Trees,
  'Pulizie condomini': Building,
  'Piccoli lavori edili': Construction,
  'Scavi': Construction,
  'Impianti irrigazione': Droplets,
  'Taglio siepi': Scissors,
};

const serviceDetails = [
  {
    name: 'Giardinaggio (pubblico/privato)',
    description: 'Progettiamo, realizziamo e manteniamo giardini e aree verdi, sia per clienti privati che per enti pubblici, con passione e professionalità.',
    image: placeholderImages.services.giardinaggio,
  },
  {
    name: 'Pulizia terreni',
    description: 'Effettuiamo pulizia e bonifica di terreni da rovi, sterpaglie e piante infestanti, preparando il terreno per nuove coltivazioni o costruzioni.',
    image: placeholderImages.services.puliziaTerreni,
  },
  {
    name: 'Taglio piante alto fusto',
    description: 'Eseguiamo potature e abbattimenti controllati di alberi ad alto fusto in sicurezza, anche in contesti urbani complessi.',
    image: placeholderImages.services.taglioPiante,
  },
  {
    name: 'Pulizie condomini',
    description: 'Offriamo un servizio completo di pulizia per condomini, curando le aree comuni interne ed esterne con regolarità e precisione.',
    image: placeholderImages.services.pulizieCondomini,
  },
  {
    name: 'Piccoli lavori edili',
    description: 'Realizziamo piccoli interventi di muratura, ristrutturazioni e manutenzioni edili per la tua casa o il tuo giardino.',
    image: placeholderImages.services.lavoriEdili,
  },
  {
    name: 'Scavi',
    description: 'Effettuiamo scavi di varie dimensioni per la posa di tubature, la realizzazione di fondamenta, piscine e altri lavori preparatori.',
    image: placeholderImages.services.scavi,
  },
  {
    name: 'Impianti irrigazione',
    description: 'Progettiamo e installiamo impianti di irrigazione automatici e personalizzati per giardini, orti e aree verdi, ottimizzando i consumi idrici.',
    image: placeholderImages.services.impiantiIrrigazione,
  },
  {
    name: 'Taglio siepi',
    description: 'Eseguiamo il taglio e la potatura di siepi di qualsiasi tipo e dimensione, per un risultato estetico impeccabile e una crescita sana delle piante.',
    image: placeholderImages.services.taglioSiepi,
  },
];

const mockServices: Service[] = serviceDetails.map((service, index) => ({
  id: (index + 1).toString(),
  name: service.name,
  icon: iconMap[service.name] || Leaf,
  description: service.description,
  image: service.image
}));

const mockContactInfo: ContactInfo = {
  email: 'monicazecchi56@gmail.com',
  phoneMonica: '3404962500',
  phoneFabio: '3333895067',
};

export async function getServices(): Promise<Service[]> {
  // For this project, we will return mock data as Firestore setup is out of scope for the code generation.
  // The code to fetch from Firestore is provided for reference.
  if (process.env.NODE_ENV !== 'development_with_db') {
    return mockServices;
  }

  try {
    const servicesCollection = collection(db, 'servizi');
    const serviceSnapshot = await getDocs(servicesCollection);
    if (serviceSnapshot.empty) {
      console.warn("Firestore 'servizi' collection is empty, using mock data.");
      return mockServices;
    }
    const servicesList = serviceSnapshot.docs.map(doc => {
      const data = doc.data();
      const serviceName = data.name || '';
      // A simple way to map service name to image key
      const imageKey = serviceName.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '');
      const serviceImages = placeholderImages.services as Record<string, {src: string, hint: string}>;
      const image = serviceImages[imageKey] || placeholderImages.services.giardinaggio;

      return {
        id: doc.id,
        name: serviceName,
        icon: iconMap[serviceName] || Leaf,
        description: data.description || `Descrizione per ${serviceName}`,
        image: image,
      };
    }) as Service[];
    return servicesList;
  } catch (error) {
    console.error("Error fetching services from Firestore, using mock data:", error);
    return mockServices;
  }
}

export async function getContactInfo(): Promise<ContactInfo> {
    // For this project, we will return mock data as Firestore setup is out of scope for the code generation.
    // The code to fetch from Firestore is provided for reference.
    if (process.env.NODE_ENV !== 'development_with_db') {
        return mockContactInfo;
    }

  try {
    // As per prompt, Documento info: Email..., Cell...
    // Assuming a single document 'details' in 'info' collection.
    const infoDoc = doc(db, 'info', 'details');
    const docSnap = await getDoc(infoDoc);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        email: data.Email,
        phoneMonica: data.Cell, // Assuming 'Cell' is Monica's
        phoneFabio: data.CellFabio, // Assuming a 'CellFabio' field
      };
    } else {
      console.warn("Firestore 'info/details' document not found, using mock data.");
      return mockContactInfo;
    }
  } catch (error) {
    console.error("Error fetching contact info from Firestore, using mock data:", error);
    return mockContactInfo;
  }
}
