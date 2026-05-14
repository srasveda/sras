import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaqList } from "@/components/faq-list";
import { TrustBadges } from "@/components/trust-badges";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { getProduct, products } from "@/lib/products";
import { whatsappUrl } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | SRAS Veda`,
      description: product.shortDescription,
      images: [{ url: product.image }]
    }
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const isProductAsset = product.image.startsWith("/images/products/");

  return (
    <>
      <section className="section bg-card">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-border ${product.tone}`}>
            <Image
              src={product.image}
              alt={`${product.name} product ingredients`}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className={isProductAsset ? "object-contain p-8" : "object-cover mix-blend-multiply"}
            />
          </div>
          <div>
            <Badge>{product.category}</Badge>
            <h1 className="mt-4 font-serif text-5xl font-bold leading-tight">{product.name}</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{product.shortDescription}</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{product.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  {benefit}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="whatsapp" size="lg">
                <a href={whatsappUrl(`Hi, I want to know more about ${product.name}.`)} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={whatsappUrl(`Hi, I want to order ${product.name} via WhatsApp.`)} target="_blank" rel="noreferrer">
                  Order via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-serif text-2xl font-bold">Benefits</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
              {product.benefits.map((benefit) => (
                <li key={benefit}>- {benefit}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-serif text-2xl font-bold">Ingredients</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.ingredients.map((ingredient) => (
                <span key={ingredient} className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-serif text-2xl font-bold">Usage</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{product.usage}</p>
          </div>
        </div>
      </section>

      <section className="section bg-[#ebe1cf]">
        <div className="container">
          <TrustBadges />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { icon: Truck, title: "COD available", copy: "Confirm serviceability on WhatsApp before dispatch." },
              { icon: PackageCheck, title: "Secure packaging", copy: "Packed carefully for a premium doorstep experience." },
              { icon: ShieldCheck, title: "Consultation led", copy: "Guidance first, purchase second." }
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                <item.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-serif text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Product FAQ</p>
            <h2 className="mt-3 font-serif text-4xl font-bold">Before you consult</h2>
            <FaqList items={product.faqs} />
          </div>
          <div>
            <p className="eyebrow">Customer note</p>
            <h2 className="mt-3 font-serif text-4xl font-bold">What buyers say</h2>
            <div className="mt-5 grid gap-4">
              {product.testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="rounded-xl border border-border bg-card p-6">
                  <blockquote className="leading-7">&quot;{testimonial.quote}&quot;</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">{testimonial.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhatsAppCta
        title={`Consult before ordering ${product.name}`}
        copy="Tell us your wellness goal, routine, and any current health considerations so our team can guide you responsibly."
        message={`Hi, I want to consult before ordering ${product.name}.`}
      />
    </>
  );
}
