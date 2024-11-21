import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';
import type { ReactNode } from 'react';

interface PricingCardProps {
  title: string;
  price: string | number;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  buttonIcon: ReactNode;
  highlighted?: boolean;
  billingPeriod: 'monthly' | 'yearly';
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  buttonHref,
  buttonIcon,
  highlighted = false,
  billingPeriod,
}) => (
  <Card
    className={`flex flex-col ${highlighted ? 'border-primary shadow-lg' : ''}`}
  >
    <CardHeader>
      <CardTitle className="text-2xl">{title}</CardTitle>
      <p className="font-bold text-3xl">
        £{price}
        <span className="font-normal text-muted-foreground text-xl">
          / {billingPeriod === 'yearly' ? 'year' : 'month'}
        </span>
      </p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button
        className="w-full"
        variant={highlighted ? 'default' : 'outline'}
        asChild
      >
        <Link href={buttonHref}>
          {buttonText}
          {buttonIcon}
        </Link>
      </Button>
    </CardFooter>
  </Card>
);

export default PricingCard;
