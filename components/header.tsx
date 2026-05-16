'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { brand, navLinks, whatsappUrl } from '@/lib/constants';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Srasveda home"
        >
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-primary shadow-line">
            <Image
              src="/images/brand/sras-logo-mark.png"
              alt=""
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span>
            <span className="block font-display text-xl font-bold leading-5">
              {brand.name}
            </span>
            <span className="block text-[11px] font-medium text-muted-foreground">
              By Shri Ram Ayurvedshala
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="whatsapp" size="sm">
            <a
              href={whatsappUrl(
                'Hi, I want to consult about Srasveda products.'
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              Consult
            </a>
          </Button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav
            className="container grid gap-1 py-4"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-3 text-sm font-semibold hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="whatsapp" className="mt-2">
              <a
                href={whatsappUrl(
                  'Hi, I want to consult about Srasveda products.'
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Consult on WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
