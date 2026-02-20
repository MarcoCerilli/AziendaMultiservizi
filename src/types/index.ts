import type { LucideIcon } from 'lucide-react';

export type Service = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  image: {
    src: string;
    hint: string;
  };
};

export type ContactInfo = {
  email: string;
  phoneMonica: string;
  phoneFabio: string;
};
