import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/constants';

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl('Hi, I want to consult about Srasveda products.')}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f7a4d] text-white shadow-soft transition-transform hover:scale-105"
      aria-label="Chat with Srasveda on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
