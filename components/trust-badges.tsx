import {
  CheckCircle2,
  Leaf,
  PackageCheck,
  ShieldCheck,
} from 'lucide-react';
import { brand } from '@/lib/constants';

const items = [
  { icon: Leaf, label: 'Natural ingredients' },
  { icon: ShieldCheck, label: `By ${brand.manufacturer}` },
  { icon: PackageCheck, label: 'Secure packaging' },
  { icon: ShieldCheck, label: 'Founded in 1998' },
  { icon: CheckCircle2, label: 'Traditional formulations' },
];

export function TrustBadges() {
  return (
    <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="grid min-w-0 w-full grid-cols-[auto_1fr] items-center gap-3 rounded-xl border border-border bg-card p-4"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
            <item.icon className="h-5 w-5" />
          </span>
          <span className="min-w-0 break-words whitespace-pre-wrap text-sm font-semibold leading-5">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
