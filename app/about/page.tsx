import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { TrustBadges } from "@/components/trust-badges";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { brand } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about SRAS Veda, a premium Ayurvedic wellness brand manufactured by Shri Ram Ayurvedshala."
};

export default function AboutPage() {
  return (
    <>
      <section className="section bg-card">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">About SRAS Veda</p>
            <h1 className="mt-3 font-serif text-5xl font-bold leading-tight">
              Premium Ayurveda for thoughtful modern wellness.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              SRAS Veda is rooted in traditional Ayurvedic knowledge and presented with the clarity, trust, and convenience expected from a modern D2C wellness brand.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85"
              alt="Ayurvedic ingredients and wellness preparation"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our foundation"
            title={`Manufactured by ${brand.manufacturer}`}
            copy="Every customer journey begins with context. We believe Ayurvedic wellness should be guided, transparent, and grounded in responsible use."
          />
          <div className="mt-10">
            <TrustBadges />
          </div>
        </div>
      </section>
      <section className="section bg-[#ebe1cf]">
        <div className="container grid gap-5 md:grid-cols-3">
          {[
            ["Heritage", "Traditional Ayurvedic positioning informs the brand's approach to wellness categories."],
            ["Modern care", "Clean product education, mobile-first browsing, and WhatsApp consultation make purchase decisions easier."],
            ["Responsible commerce", "No complex checkout or rushed cart flow. Customers can ask questions before ordering."]
          ].map(([title, copy]) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-serif text-2xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </section>
      <WhatsAppCta />
    </>
  );
}
