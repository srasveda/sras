import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "SRAS Veda terms and conditions for Ayurvedic wellness product consultation and WhatsApp ordering."
};

export default function TermsPage() {
  return (
    <section className="section">
      <article className="container max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-serif text-5xl font-bold">Terms & Conditions</h1>
        <div className="mt-8 grid gap-6 text-sm leading-7 text-muted-foreground">
          <p>
            By using the SRAS Veda website or ordering through WhatsApp, you agree to use the information and products responsibly and provide accurate details during consultation and ordering.
          </p>
          <p>
            Product information is provided for wellness education. It does not constitute medical advice, diagnosis, or emergency care. Consult a qualified healthcare professional for medical conditions, pregnancy, lactation, chronic illness, or prescription medication.
          </p>
          <p>
            Prices, availability, COD eligibility, delivery timelines, and offers may change and are confirmed during the WhatsApp order conversation.
          </p>
          <p>
            Orders are processed after customer confirmation. Return, replacement, or cancellation requests are reviewed based on product condition, dispatch status, and applicable policy shared during purchase.
          </p>
          <p>
            SRAS Veda reserves the right to update website content, product details, and these terms as needed.
          </p>
        </div>
      </article>
    </section>
  );
}
