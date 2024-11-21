import { Button } from '@repo/design-system/components/ui/button';
import { env } from '@repo/env';
import { Headphones, MoveRight, Rocket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => (
  <div className="w-full bg-gradient-to-b from-primary-50 to-background">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-32">
        <div className="flex w-full items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Net Guru Solutions Mascot"
            width={150}
            height={150}
            className="animate-bounce rounded-full border-4 border-primary"
          />
        </div>
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Welcome to <span className="text-primary">Net Guru Solutions</span>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
            Your friendly neighborhood tech wizards! We're here to sprinkle some
            digital magic on your business. 🪄✨
          </p>
        </div>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 text-center md:grid-cols-3">
          <div className="rounded-lg bg-card p-6 shadow-md">
            <h3 className="mb-2 font-semibold text-lg">
              E-commerce Enchantment
            </h3>
            <p className="text-muted-foreground">
              Transform your online store into a customer-attracting wonderland!
            </p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-md">
            <h3 className="mb-2 font-semibold text-lg">Marketing Marvels</h3>
            <p className="text-muted-foreground">
              Boost your brand with our digital marketing superpowers!
            </p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-md">
            <h3 className="mb-2 font-semibold text-lg">IT Innovations</h3>
            <p className="text-muted-foreground">
              Solve tech troubles with our geeky genius squad!
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="gap-2" asChild>
            <Link href={env.NEXT_PUBLIC_APP_URL}>
              Get Started <Rocket className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <Link href="/contact">
              Talk to a Guru <Headphones className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-8">
          <Button
            variant="link"
            size="sm"
            className="text-muted-foreground"
            asChild
          >
            <Link href="/blog">
              Read our latest tech tips <MoveRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
);
