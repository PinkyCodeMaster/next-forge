import { Button } from '@repo/design-system/components/ui/button';
import { env } from '@repo/env';
import { PhoneCall, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export const CTA = () => (
  <div className="w-full bg-gradient-to-br from-primary/10 to-secondary/10 py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-8 rounded-xl bg-background p-8 text-center shadow-lg lg:p-14">
        <div className="flex flex-col gap-4">
          <h3 className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-4xl text-transparent tracking-tight md:text-5xl lg:text-6xl">
            Empower Your E-Commerce Journey
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience the power of tailored e-commerce solutions. From custom
            storefronts to robust backend systems, NetGuru Solutions is your
            partner in building a scalable, future-ready online business.
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="gap-2" variant="outline" asChild>
            <Link href="/contact">
              Schedule a Consultation <PhoneCall className="h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" className="gap-2" asChild>
            <Link href={env.NEXT_PUBLIC_APP_URL}>
              Start Your Project <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        <p className="mt-4 text-muted-foreground text-sm">
          Join the ranks of successful businesses powered by NetGuru Solutions
        </p>
      </div>
    </div>
  </div>
);
