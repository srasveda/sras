import type { Metadata } from 'next';
import { brand } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Srasveda privacy policy for customer information, WhatsApp conversations, and order support.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <article className="container max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-serif text-5xl font-bold">Privacy Policy</h1>
        <div className="mt-8 grid gap-6 text-sm leading-7 text-muted-foreground">
          <p>
            Srasveda collects information you voluntarily share through
            WhatsApp, contact forms, calls, or order conversations, including
            name, phone number, address, product interest, and wellness context
            needed for consultation.
          </p>
          <p>
            This information is used to respond to enquiries, recommend suitable
            products, process orders, coordinate delivery, improve customer
            support, and comply with applicable requirements.
          </p>
          <p>
            We do not sell personal information. Information may be shared with
            delivery, payment, or operational partners only when needed to
            complete customer service or order fulfilment.
          </p>
          <p>
            Wellness information shared by customers should be accurate and
            complete. Srasveda products are wellness support and are not a
            substitute for medical diagnosis or treatment.
          </p>
          <p>
            For privacy requests, corrections, or deletion queries, contact{' '}
            {brand.email}.
          </p>
        </div>
      </article>
    </section>
  );
}
