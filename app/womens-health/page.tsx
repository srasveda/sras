import type { Metadata } from "next";
import { WomensHealthJourney } from "@/components/womens-health-journey";
import { WhatsAppCta } from "@/components/whatsapp-cta";

export const metadata: Metadata = {
  title: "Women's Health Range",
  description:
    "Explore the SRAS Veda women's health campaign for PCOS, hormonal imbalance, fertility support, uterine wellness, and guided WhatsApp consultation."
};

export default function WomensHealthPage() {
  return (
    <>
      <WomensHealthJourney />
      <WhatsAppCta
        title="Not sure which women's health support fits your concern?"
        copy="Tell us about your cycle pattern, wellness goal, and current treatment context. We will guide the next step on WhatsApp."
        message="Hi, I want guidance for the SRAS women's health range."
      />
    </>
  );
}
