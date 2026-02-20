'use client';

import { getContactInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const WhatsAppSVGIcon = () => (
    <svg 
        viewBox="0 0 32 32" 
        className="h-8 w-8 text-white"
        fill="currentColor"
    >
        <path d="M16.1,0A16.1,16.1,0,0,0,0,16.1C0,25,6.6,32,16.1,32a15.9,15.9,0,0,0,10.6-3.9L32,30.3,30.3,25.4a15.9,15.9,0,0,0,1.8-10.6A16.1,16.1,0,0,0,16.1,0Zm8.1,23a1.9,1.9,0,0,1-1.6.3,9.5,9.5,0,0,1-4.7-2.3,14.7,14.7,0,0,1-6-6.4,3.7,3.7,0,0,1-.4-2,2,2,0,0,1,.6-1.5,1.1,1.1,0,0,1,.8-.4l.3,0h.2a1.4,1.4,0,0,1,1.1.7,5.5,5.5,0,0,1,1,1.7.9.9,0,0,1,0,1,2.8,2.8,0,0,1-.5.7,1.8,1.8,0,0,0-.7,1.1,5.3,5.3,0,0,0,1.1,2.5,9.7,9.7,0,0,0,4.8,4.4.9.9,0,0,0,1-.2,3.3,3.3,0,0,0,.7-1.2.9.9,0,0,1,1.2-.4,10.9,10.9,0,0,1,3.4.9,1.8,1.8,0,0,1,1.2,1.7A1.8,1.8,0,0,1,24.2,23Z" />
    </svg>
);

export function WhatsAppButton() {
    const [phone, setPhone] = useState('');

    useEffect(() => {
        async function fetchPhone() {
            try {
                const contactInfo = await getContactInfo();
                setPhone(contactInfo.phoneMonica);
            } catch (error) {
                console.error("Failed to fetch contact info for WhatsApp button", error);
            }
        }
        fetchPhone();
    }, []);

    if (!phone) {
        return null;
    }

    const whatsappLink = `https://wa.me/${phone.replace(/\D/g, '')}`;

    return (
        <Button
            asChild
            className="fixed bottom-6 right-24 z-50 h-16 w-16 rounded-full bg-green-500 shadow-lg hover:bg-green-600"
            aria-label="Contattaci su WhatsApp"
        >
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppSVGIcon />
            </Link>
        </Button>
    );
}
