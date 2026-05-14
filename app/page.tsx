import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  HeartPulse,
  Leaf,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { featuredProducts } from '@/lib/products';
import { brand, whatsappUrl } from '@/lib/constants';
import { SectionHeading } from '@/components/section-heading';
import { TrustBadges } from '@/components/trust-badges';
import { FaqList, commonFaqs } from '@/components/faq-list';
import { WhatsAppCta } from '@/components/whatsapp-cta';
import { WomensHealthJourney } from '@/components/womens-health-journey';

const benefits = [
  {
    icon: Leaf,
    title: 'Rooted in classical Ayurveda',
    copy: 'Formulations inspired by traditional herbs, balanced with practical modern wellness routines.',
  },
  {
    icon: HeartPulse,
    title: 'Guidance before purchase',
    copy: 'WhatsApp-first consultation helps customers choose products responsibly.',
  },
  {
    icon: ShieldCheck,
    title: 'Organic Ingredients',
    copy: 'Manufactured in GMP-certified facility',
  },
];

const testimonials = [
  {
    quote:
      'Conceive-N was recommended to me as part of an Ayurvedic wellness routine. I appreciated the personalized guidance and holistic approach toward reproductive wellness.',

    name: 'Sneha, Gurugram',
  },

  {
    quote:
      'Sperm Forte Capsules helped me feel more energetic and balanced in my daily routine. The ingredients and Ayurvedic formulation gave me confidence in the product.',

    name: 'Aman, Chandigarh',
  },

  {
    quote:
      'Leucona felt gentle and supportive during my wellness journey. I also liked how responsive the SRAS Veda team was on WhatsApp.',

    name: 'Priya, Ahmedabad',
  },

  {
    quote:
      'Sthulta Hari became part of my daily wellness and fitness routine. The formulation felt natural and aligned well with my lifestyle changes.',

    name: 'Rohit, Mumbai',
  },

  {
    quote:
      'Kof-N worked well as part of my seasonal wellness support routine. The herbal formulation felt soothing and easy to include in daily use.',

    name: 'Nitin, Jaipur',
  },

  {
    quote:
      'The consultation process before recommending Sheba Tablets made the experience feel trustworthy and personalized rather than just another online purchase.',

    name: 'Meera, Delhi',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(245,240,229,0.96),rgba(235,222,196,0.72))]" />
        <div className="container relative grid min-h-[calc(100svh-4rem)] items-center gap-10 py-10 md:grid-cols-[1.02fr_0.98fr] md:py-14">
          <div className="max-w-2xl">
            <p className="eyebrow">Premium Ayurvedic wellness</p>
            <h1 className="mt-4 font-serif text-5xl font-bold leading-[0.96] md:text-7xl">
              Rooted in Ayurveda. Designed for Modern Wellness.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
              Premium Ayurvedic wellness formulations crafted with traditional
              knowledge and modern care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="whatsapp" size="lg">
                <a
                  href={whatsappUrl(
                    'Hi, I want to consult about SRAS Veda products.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Consult on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 text-sm">
              {[
                'Founded in 1998',
                'Natural ingredients',
                'Secure packaging',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border/80 bg-card/70 p-3 font-semibold shadow-line backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-secondary shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=1200&q=85"
                alt="Ayurvedic herbs and wellness ingredients"
                fill
                priority
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-xl border border-border bg-card p-4 shadow-soft md:left-8 md:right-auto md:w-80">
              <div className="flex items-center gap-3">
                <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-full bg-primary">
                  <Image
                    src="/images/brand/sras-logo-mark.png"
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="text-sm font-bold">SRAS Veda By</p>
                  <p className="text-sm text-muted-foreground">
                    {brand.manufacturer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WomensHealthJourney compact />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Hero campaign products"
            title="Four formulations across the SRAS wellness range"
            copy="Explore one product from Women's Wellness, General Wellness, Weight Management, and Men's Vitality, then consult on WhatsApp for responsible product guidance."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#ebe1cf]">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="eyebrow">Ayurvedic trust</p>
              <h2 className="mt-3 font-serif text-4xl font-bold leading-tight md:text-5xl">
                Heritage-backed care, presented for the modern Indian home.
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                SRAS Veda brings together traditional formulation wisdom, clear
                product education, and a consultation-first purchase journey.
              </p>
            </div>
            <TrustBadges />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Benefits"
            title="Built for trust before transaction"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-border bg-card p-6 shadow-line"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <benefit.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-bold">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {benefit.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Consultation-led wellness journeys"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-xl border border-border bg-background p-6"
              >
                <blockquote className="text-base leading-7">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-muted-foreground">
                  {testimonial.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-serif text-4xl font-bold">
              Questions before you order?
            </h2>
            <Button asChild variant="outline" className="mt-6">
              <Link href="/faq">View all FAQs</Link>
            </Button>
          </div>
          <FaqList items={commonFaqs.slice(0, 3)} />
        </div>
      </section>

      <WhatsAppCta />
    </>
  );
}
