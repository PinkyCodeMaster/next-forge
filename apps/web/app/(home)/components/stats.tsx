import { MagicWandIcon } from '@radix-ui/react-icons';
import { Button } from '@repo/design-system/components/ui/button';
import { RocketIcon, ShoppingCartIcon, WrenchIcon } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-b from-primary/10 to-background py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-bold text-4xl tracking-tighter md:text-6xl lg:max-w-xl">
              Your One-Stop Tech Wizardry Shop!
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed tracking-tight lg:max-w-lg">
              We're Net Guru Solutions, your friendly neighborhood tech genies!
              From e-commerce magic to digital marketing marvels and IT support
              sorcery, we've got all your tech needs covered.
            </p>
            <Link href="/contact">
              <Button size="lg" className="mt-4">
                Let's Create Some Tech Magic!
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid w-full grid-cols-1 gap-4 text-center sm:grid-cols-2">
              <div className="flex flex-col items-center justify-between gap-2 rounded-md border p-6 transition-all hover:border-primary hover:shadow-md">
                <ShoppingCartIcon className="mb-4 h-10 w-10 text-primary" />
                <h2 className="font-semibold text-2xl">E-commerce Wizardry</h2>
                <p className="text-muted-foreground">
                  Custom-coded storefronts that'll make your products fly off
                  the virtual shelves!
                </p>
              </div>
              <div className="flex flex-col items-center justify-between gap-2 rounded-md border p-6 transition-all hover:border-primary hover:shadow-md">
                <RocketIcon className="mb-4 h-10 w-10 text-primary" />
                <h2 className="font-semibold text-2xl">
                  Digital Marketing Magic
                </h2>
                <p className="text-muted-foreground">
                  We'll sprinkle some SEO fairy dust and wave our social media
                  wand to boost your online presence!
                </p>
              </div>
              <div className="flex flex-col items-center justify-between gap-2 rounded-md border p-6 transition-all hover:border-primary hover:shadow-md">
                <WrenchIcon className="mb-4 h-10 w-10 text-primary" />
                <h2 className="font-semibold text-2xl">IT Support Sorcery</h2>
                <p className="text-muted-foreground">
                  We'll banish those tech gremlins and keep your systems running
                  smoother than a wizard's robe!
                </p>
              </div>
              <div className="flex flex-col items-center justify-between gap-2 rounded-md border p-6 transition-all hover:border-primary hover:shadow-md">
                <MagicWandIcon className="mb-4 h-10 w-10 text-primary" />
                <h2 className="font-semibold text-2xl">Custom Solutions</h2>
                <p className="text-muted-foreground">
                  No cookie-cutter spells here! We'll craft bespoke solutions
                  tailored to your unique business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
