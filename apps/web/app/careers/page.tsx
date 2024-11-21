import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { Clock, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="container mx-auto space-y-16 px-4 py-16">
      <section className="space-y-4 text-center">
        <h1 className="font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl">
          Careers at NetGuru Solutions
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
          Join our team and help shape the future of e-commerce solutions.
        </p>
      </section>

      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Clock className="h-6 w-6" />
            Coming Soon
          </CardTitle>
          <CardDescription>
            We're preparing to launch exciting career opportunities.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            At NetGuru Solutions, we're always on the lookout for talented
            individuals who are passionate about e-commerce and technology.
            While we don't have any open positions at the moment, we're working
            on expanding our team in the near future.
          </p>
          <p>
            If you're interested in joining our team, please check back soon or
            sign up for our newsletter to be notified when new positions become
            available.
          </p>
          <div className="flex justify-center pt-4">
            <Button asChild>
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Stay Updated
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <section className="space-y-6 text-center">
        <h2 className="font-semibold text-3xl tracking-tight">
          Why Work With Us?
        </h2>
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Innovation',
              description: 'Work on cutting-edge e-commerce solutions',
            },
            {
              title: 'Growth',
              description:
                'Opportunities for personal and professional development',
            },
            {
              title: 'Impact',
              description:
                'Make a real difference in the world of online business',
            },
            {
              title: 'Culture',
              description: 'Collaborative and inclusive work environment',
            },
            {
              title: 'Benefits',
              description:
                'Competitive salary and comprehensive benefits package',
            },
            {
              title: 'Work-Life Balance',
              description: 'Flexible working hours and remote options',
            },
          ].map((perk) => (
            <Card key={perk.title}>
              <CardHeader>
                <CardTitle>{perk.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{perk.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
