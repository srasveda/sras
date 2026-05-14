import Image from 'next/image';
import Link from 'next/link';
import {
  HeartPulse,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProduct } from '@/lib/products';
import { whatsappUrl } from '@/lib/constants';

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Focused women's health",
    copy: 'Ayurvedic support for hormonal, uterine, cycle, and reproductive wellness.',
  },
  {
    icon: HeartPulse,
    title: 'PCOS and fertility support',
    copy: 'A guided range for irregular cycles, anovulatory patterns, and conception support.',
  },
  {
    icon: Leaf,
    title: 'Heritage-led formulations',
    copy: 'By Shri Ram Ayurvedshala with a consultation-first approach.',
  },
];

const journeyRows = [
  {
    condition: 'PCOS',
    focus: 'Hormonal balance',
    support: 'Oligocure + Sheba',
    href: '/products/oligocure',
  },
  {
    condition: 'Irregular cycles',
    focus: 'Cycle support',
    support: 'Oligocure',
    href: '/products/oligocure',
  },
  {
    condition: 'Anovulatory cycles',
    focus: 'Ovulation support',
    support: 'Conceive-N + Oligocure',
    href: '/products/conceive-n-drops',
  },
  {
    condition: 'Delayed conception',
    focus: 'Fertility support',
    support: 'Conceive-N',
    href: '/products/conceive-n-drops',
  },
  {
    condition: 'Fibroid conditions',
    focus: 'Uterine support',
    support: 'Mayoma',
    href: '/products/mayoma',
  },
  {
    condition: 'Menstrual discomfort',
    focus: 'Menstrual wellness',
    support: 'Oligocure + Sheba',
    href: '/products/sheba-drops',
  },
  {
    condition: 'Endometrial support',
    focus: 'Reproductive support',
    support: 'Conceive-N',
    href: '/products/conceive-n-drops',
  },
];

const productStory = [
  {
    slug: 'conceive-n-drops',
    title: 'For ovulation and conception support',
    copy: 'Supports ovulatory function, endometrial receptivity, and reproductive wellness.',
  },
  {
    slug: 'oligocure',
    title: 'For cycle and PCOS-linked irregularity',
    copy: 'Helps maintain menstrual regularity, hormonal balance, and endometrial function.',
  },
  {
    slug: 'sheba-drops',
    title: 'For cystic and hormonal wellness',
    copy: 'Supports fibrocystic conditions, hormonal equilibrium, and uterine wellness.',
  },
  {
    slug: 'mayoma',
    title: 'For uterine and fibroid-related support',
    copy: 'Supports uterine health, bulky uterus concerns, and menstrual cycle stability.',
  },
];

export function WomensHealthJourney({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section className={compact ? 'section bg-[#f1eadc]' : 'section'}>
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Women&apos;s health campaign</p>
            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight md:text-5xl">
              Managing PCOS, hormonal imbalance and infertility with guided
              Ayurvedic support.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Inspired by the SRAS women&apos;s health range, this journey helps
              customers start with their concern, understand the wellness focus,
              and consult before choosing a formulation.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="whatsapp" size="lg">
                <a
                  href={whatsappUrl(
                    'Hi, I want guidance for PCOS, hormonal imbalance or fertility support.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Start Consultation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/womens-health">View Journey</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-border bg-card p-5 shadow-line"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <point.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {point.copy}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
          <div className="overflow-hidden rounded-2xl border border-border bg-primary text-primary-foreground shadow-soft">
            <div className="grid gap-6 p-6 md:p-8">
              <div className="flex items-center gap-4">
                <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white/10">
                  <Image
                    src="/images/brand/sras-logo-mark.png"
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                    Campaign range
                  </p>
                  <h3 className="font-serif text-3xl font-bold">
                    SRAS Women&apos;s Health Range
                  </h3>
                </div>
              </div>
              <p className="text-sm leading-6 text-primary-foreground/80">
                A focused path for PCOS-related irregularities, hormonal
                wellness, uterine support, and reproductive care.
              </p>
              <div className="grid gap-2 text-sm">
                {[
                  'Trusted by doctors and retailers',
                  'By Shri Ram Ayurvedshala',
                  "25+ years of Ayurvedic women's health experience",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-secondary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-px bg-border text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <div className="bg-muted p-3">Concern</div>
              <div className="bg-muted p-3">Focus</div>
              <div className="bg-muted p-3">Support</div>
            </div>
            <div className="divide-y divide-border">
              {journeyRows
                .slice(0, compact ? 5 : journeyRows.length)
                .map((row) => (
                  <Link
                    key={`${row.condition}-${row.support}`}
                    href={row.href}
                    className="grid grid-cols-[1fr_1fr_1fr] gap-px text-sm hover:bg-muted/60"
                  >
                    <div className="p-3 font-semibold">{row.condition}</div>
                    <div className="p-3 text-muted-foreground">{row.focus}</div>
                    <div className="p-3 font-semibold text-primary">
                      {row.support}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productStory.map((item) => {
            const product = getProduct(item.slug);
            if (!product) {
              return null;
            }

            return (
              <div
                key={item.slug}
                className="rounded-xl border border-border bg-card p-5 shadow-line"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg ${product.tone}`}
                >
                  <Image
                    src={product.image}
                    alt={`${product.name} product`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-contain p-4"
                  />
                </div>
                <Badge className="mt-4">{product.name}</Badge>
                <h3 className="mt-3 font-serif text-2xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.copy}
                </p>
                <div className="mt-5 grid gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/products/${product.slug}`}>View Details</Link>
                  </Button>
                  <Button asChild variant="whatsapp" size="sm">
                    <a
                      href={whatsappUrl(
                        `Hi, I want guidance for ${product.name} in the women's health range.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Consult
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-muted-foreground">
          For wellness support and product education only. Please consult a
          qualified professional for diagnosis, treatment, pregnancy, chronic
          illness, or prescription medicine use.
        </p>
      </div>
    </section>
  );
}
