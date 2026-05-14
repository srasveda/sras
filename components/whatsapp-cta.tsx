import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/constants";

export function WhatsAppCta({
  title = "Need help choosing the right Ayurvedic support?",
  copy = "Share your wellness goal with us and get guided product recommendations on WhatsApp.",
  message = "Hi, I want help choosing the right SRAS Veda product."
}: {
  title?: string;
  copy?: string;
  message?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-6 rounded-2xl bg-primary p-7 text-primary-foreground shadow-soft md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Consultation first</p>
            <h2 className="mt-3 font-serif text-3xl font-bold md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-primary-foreground/80">{copy}</p>
          </div>
          <Button asChild variant="secondary" size="lg">
            <a href={whatsappUrl(message)} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" />
              Consult on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
