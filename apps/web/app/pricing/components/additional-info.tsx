import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';

const AdditionalInfo: React.FC = () => (
  <div className="mt-16 w-full max-w-3xl space-y-8">
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Setup Fees</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Startup</span>
            <span className="font-semibold">£500 - £800</span>
          </li>
          <li className="flex justify-between">
            <span>Growth</span>
            <span className="font-semibold">£1,000 - £1,500</span>
          </li>
          <li className="flex justify-between">
            <span>Enterprise</span>
            <span className="font-semibold">£2,000+</span>
          </li>
        </ul>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Optional Add-Ons</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Monthly Maintenance</span>
            <span className="font-semibold">£50 - £200 / month</span>
          </li>
          <li className="flex justify-between">
            <span>Advanced SEO Optimization</span>
            <span className="font-semibold">£100 - £300 / month</span>
          </li>
          <li className="flex justify-between">
            <span>Additional Users (Startup and Growth)</span>
            <span className="font-semibold">£20 - £50 / user / month</span>
          </li>
        </ul>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Payment Processing Rates</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>UK Standard Cards</span>
            <span className="font-semibold">1.5% + 20p per transaction</span>
          </li>
          <li className="flex justify-between">
            <span>EU Cards</span>
            <span className="font-semibold">2.5% + 20p per transaction</span>
          </li>
          <li className="flex justify-between">
            <span>UK Debit Cards</span>
            <span className="font-semibold">1.2% + 20p per transaction</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full gap-2" asChild>
          <Link
            href="https://stripe.com/gb/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More About Payment Rates
            <MoveRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  </div>
);

export default AdditionalInfo;
