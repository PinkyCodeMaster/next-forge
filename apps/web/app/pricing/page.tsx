import type React from 'react';
import AdditionalInfo from './components/additional-info';
import PricingTabs from './components/pricing-tabs';

const Pricing: React.FC = () => (
  <div className="w-full bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Tailored E-Commerce Solutions
          </h2>
          <p className="max-w-2xl text-muted-foreground text-xl">
            Choose the plan that fits your business needs and scale as you grow.
          </p>
        </div>
        <PricingTabs />
        <AdditionalInfo />
      </div>
    </div>
  </div>
);

export default Pricing;
