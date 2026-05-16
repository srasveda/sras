import type { Metadata } from 'next';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import { brand, whatsappUrl } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Srasveda on WhatsApp for Ayurvedic wellness consultation and product ordering.',
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Start with a quick WhatsApp conversation"
          copy="Share your wellness goal, product interest, and delivery city. Our team will guide consultation and order next steps."
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-serif text-3xl font-bold">Consult and order</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              WhatsApp is the primary purchase and support channel for SRAS
              Veda.
            </p>
            <Button asChild variant="whatsapp" size="lg" className="mt-6">
              <a
                href={whatsappUrl(
                  'Hi, I want to consult and order Srasveda products.'
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-serif text-3xl font-bold">Brand details</h2>
            <div className="mt-5 grid gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                {brand.phone}
              </span>
              <span className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                {brand.email}
              </span>
              <span className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                {brand.address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
