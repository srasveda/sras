import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { Header } from '@/components/header';
import { AnalyticsPlaceholders } from '@/components/analytics-placeholders';
import { brand } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL('https://srasveda.com'),
  title: {
    default: 'Srasveda | Premium Ayurvedic Wellness',
    template: '%s | Srasveda',
  },
  description:
    'Premium Ayurvedic wellness formulations rooted in traditional knowledge and modern care. Consult and order Srasveda products on WhatsApp.',
  keywords: [
    'Srasveda',
    'Ayurvedic wellness',
    'Shri Ram Ayurvedshala',
    'women wellness Ayurveda',
    'fertility support Ayurveda',
    'weight management Ayurveda',
  ],
  openGraph: {
    title: 'Srasveda | Premium Ayurvedic Wellness',
    description: 'Rooted in Ayurveda. Designed for modern wellness.',
    url: 'https://srasveda.com',
    siteName: brand.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/brand/sras-logo-wordmark.png',
        width: 2048,
        height: 2048,
        alt: 'Srasveda logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srasveda | Premium Ayurvedic Wellness',
    description:
      'Premium Ayurvedic wellness formulations with WhatsApp consultation.',
  },
  icons: {
    icon: '/images/brand/sras-logo-mark.png',
    apple: '/images/brand/sras-logo-mark.png',
  },
  verification: {
    other: {
      'facebook-domain-verification': 'cvzpkgstepba84idph6j286r8rtyq8',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className="font-sans">
        <AnalyticsPlaceholders />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
