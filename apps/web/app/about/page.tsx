import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { CheckCircle, Globe, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto space-y-16 px-4 py-16">
      <section className="space-y-4 text-center">
        <h1 className="font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl">
          About NetGuru Solutions
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
          Empowering businesses with cutting-edge e-commerce solutions and
          seamless user experiences.
        </p>
      </section>

      <section className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-semibold text-3xl tracking-tight">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            At NetGuru Solutions, we're dedicated to revolutionizing the
            e-commerce landscape. Our mission is to provide businesses of all
            sizes with powerful, tailored solutions that drive growth, enhance
            customer experiences, and simplify complex operations.
          </p>
          <Button asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="/logo.svg"
            alt="Team collaboration"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight">
          Why Choose Us
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              id: 1,
              title: 'Expertise',
              description: 'Years of experience in e-commerce solutions',
              icon: CheckCircle,
            },
            {
              id: 2,
              title: 'Custom Solutions',
              description: 'Tailored approaches for your unique needs',
              icon: Users,
            },
            {
              id: 3,
              title: 'Cutting-edge Tech',
              description: 'Leveraging the latest in web technologies',
              icon: Zap,
            },
            {
              id: 4,
              title: 'Global Reach',
              description: 'Supporting businesses worldwide',
              icon: Globe,
            },
          ].map((feature) => (
            <Card key={feature.id}>
              <CardHeader>
                <feature.icon className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-lg bg-muted p-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight">
          Our Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              id: 1,
              title: 'Custom E-commerce Solutions',
              description: 'Bespoke platforms tailored to your business needs',
            },
            {
              id: 2,
              title: 'Marketing & SEO',
              description:
                'Boost your visibility and drive traffic to your store',
            },
            {
              id: 3,
              title: 'IT Support & Infrastructure',
              description: 'Robust networking and POS system integration',
            },
            {
              id: 4,
              title: 'Open-Source Development',
              description:
                'Leveraging and contributing to open-source technologies',
            },
          ].map((service) => (
            <div key={service.id} className="flex gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 text-center">
        <h2 className="font-semibold text-3xl tracking-tight">
          Ready to Transform Your E-commerce Experience?
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
          Let's work together to create a solution that drives your business
          forward.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </section>
    </div>
  );
}
