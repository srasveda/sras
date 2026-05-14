import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/lib/products";
import { whatsappUrl } from "@/lib/constants";

export function ProductCard({ product }: { product: Product }) {
  const isProductAsset = product.image.startsWith("/images/products/");

  return (
    <Card className="group overflow-hidden bg-card">
      <div className={`relative aspect-[4/3] overflow-hidden ${product.tone}`}>
        <Image
          src={product.image}
          alt={`${product.name} Ayurvedic wellness product`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`transition-transform duration-500 group-hover:scale-105 ${
            isProductAsset ? "object-contain p-5" : "object-cover mix-blend-multiply"
          }`}
        />
      </div>
      <CardContent className="grid gap-4">
        <div>
          <Badge>{product.category}</Badge>
          <h2 className="mt-3 font-serif text-2xl font-bold">{product.name}</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.shortDescription}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.ingredients.slice(0, 3).map((ingredient) => (
            <span key={ingredient} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              {ingredient}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href={`/products/${product.slug}`}>View Details</Link>
          </Button>
          <Button asChild variant="whatsapp" size="sm">
            <a href={whatsappUrl(`Hi, I want to know more about ${product.name}.`)} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
