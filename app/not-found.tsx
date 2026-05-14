import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-serif text-5xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">The page you are looking for is not available.</p>
        <Button asChild className="mt-6">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </section>
  );
}
