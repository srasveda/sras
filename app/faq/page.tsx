import type { Metadata } from 'next';
import { FaqList, commonFaqs } from '@/components/faq-list';
import { SectionHeading } from '@/components/section-heading';
import { WhatsAppCta } from '@/components/whatsapp-cta';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about Srasveda Ayurvedic wellness products, WhatsApp ordering, COD, and consultation.',
};

const faqs = [
  ...commonFaqs,
  {
    question: 'Why does Srasveda use WhatsApp instead of a cart?',
    answer:
      'Ayurvedic wellness choices often need context. WhatsApp lets customers ask questions, confirm suitability, and order with confidence.',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Delivery timelines depend on location and product availability. Our team will confirm dispatch and expected delivery during the WhatsApp conversation.',
  },
  {
    question: 'Do you provide dosage guidance?',
    answer:
      'Basic usage guidance is shared for each product, and personalized guidance can be discussed during consultation.',
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="section bg-card">
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers before your WhatsApp consultation"
            copy="Clear, practical information about ordering, COD, product suitability, and responsible Ayurvedic wellness use."
          />
        </div>
      </section>
      <section className="section">
        <div className="container max-w-3xl">
          <FaqList items={faqs} />
        </div>
      </section>
      <WhatsAppCta />
    </>
  );
}
