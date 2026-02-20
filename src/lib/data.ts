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

const mockServicesData: string[] = [
  'Giardinaggio (pubblico/privato)',
  'Pulizia terreni',
  'Taglio piante alto fusto',
  'Pulizie condomini',
  'Piccoli lavori edili',
  'Scavi',
  'Impianti irrigazione',
  'Taglio siepi',
];

const mockServices: Service[] = mockServicesData.map((name, index) => ({
  id: (index + 1).toString(),
  name,
  icon: iconMap[name] || Leaf,
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
      return {
        id: doc.id,
        name: data.name,
        icon: iconMap[data.name] || Leaf,
      };
    });
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
