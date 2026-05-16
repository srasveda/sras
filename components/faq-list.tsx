import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const commonFaqs = [
  {
    question: 'How do I order Srasveda products?',
    answer:
      'Tap any WhatsApp CTA, share the product you are interested in, and our team will guide consultation, availability, payment, and dispatch.',
  },
  {
    question: 'Is Cash on Delivery available?',
    answer:
      'Yes, COD is available for eligible locations and products. Confirm availability on WhatsApp before placing your order.',
  },
  {
    question: 'Are these products a replacement for medical treatment?',
    answer:
      'No. Srasveda products are Ayurvedic wellness support and should not replace medical diagnosis, emergency care, or prescribed treatment.',
  },
  {
    question: 'Can I use products during pregnancy or while taking medicines?',
    answer:
      'Please consult a qualified professional and speak with our team before use, especially during pregnancy, lactation, chronic illness, or prescription medication.',
  },
];

export function FaqList({ items = commonFaqs }: { items?: typeof commonFaqs }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`item-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
