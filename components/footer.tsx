import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { brand, navLinks, whatsappUrl } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#2f2a20] text-stone-100">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-primary">
              <Image
                src="/images/brand/sras-logo-wordmark.png"
                alt="SRAS logo"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-serif text-3xl font-bold">{brand.name}</div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">
                Ayurvedic wellness
              </div>
            </div>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-stone-300">
            Premium Ayurvedic wellness formulations by {brand.manufacturer},
            crafted for modern routines with traditional care.
          </p>
          <Button asChild variant="secondary" className="mt-5">
            <a
              href={whatsappUrl('Hi, I want to know more about SRAS Veda.')}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-400">
            Pages
          </h2>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-stone-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/privacy-policy"
              className="text-sm text-stone-300 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-stone-300 hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-400">
            Contact
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-stone-300">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {brand.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {brand.email}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {brand.address}
            </span>
            <span className="flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              @srasveda
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container text-xs text-stone-400">
          &copy; {new Date().getFullYear()} {brand.name}. Ayurvedic wellness
          support is not a substitute for medical diagnosis or treatment.
        </div>
      </div>
    </footer>
  );
}
