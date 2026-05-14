import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { categories, products } from "@/lib/products";
import { WomensHealthJourney } from "@/components/womens-health-journey";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore SRAS Veda Ayurvedic wellness products for women's wellness, fertility support, weight management, general wellness, and men's vitality."
};

export default function ProductsPage() {
  return (
    <>
      <section className="section bg-card">
        <div className="container">
          <SectionHeading
            eyebrow="Product catalogue"
            title="Ayurvedic wellness formulations"
            copy="Browse by wellness goal, then consult on WhatsApp for personalized product guidance and ordering."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-muted-foreground">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>
      <WomensHealthJourney compact />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <WhatsAppCta />
    </>
  );
}
