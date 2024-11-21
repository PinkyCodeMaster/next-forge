import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/design-system/components/ui/tabs';
import { env } from '@repo/env';
import { MoveRight, PhoneCall } from 'lucide-react';
import type React from 'react';
import PricingCard from './pricing-card';

const PricingTabs: React.FC = () => (
  <Tabs defaultValue="monthly" className="w-full max-w-5xl">
    <TabsList className="mb-8 grid w-full grid-cols-2">
      <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
      <TabsTrigger value="yearly">Yearly Billing (Save 10%)</TabsTrigger>
    </TabsList>
    <TabsContent value="monthly" className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <PricingCard
          title="Startup"
          price={125}
          description="Perfect for small businesses starting their e-commerce journey."
          features={[
            '2 account users',
            '3 storefront templates',
            'Pre-configured backend server',
            'Admin UI access',
            'Integrated email functionality',
            'Basic payment processing',
          ]}
          buttonText="Get Started"
          buttonHref={env.NEXT_PUBLIC_APP_URL}
          buttonIcon={<MoveRight className="ml-2 h-4 w-4" />}
          billingPeriod="monthly"
        />
        <PricingCard
          title="Growth"
          price={325}
          description="For growing businesses that need more tools and customization."
          features={[
            '5 account users',
            '5 customizable storefront designs',
            'SEO optimization',
            'React email templates',
            'Social media integration',
            'Enhanced product customization',
            'Theme customization',
          ]}
          buttonText="Upgrade Now"
          buttonHref={env.NEXT_PUBLIC_APP_URL}
          buttonIcon={<MoveRight className="ml-2 h-4 w-4" />}
          highlighted={true}
          billingPeriod="monthly"
        />
        <PricingCard
          title="Enterprise"
          price="Custom"
          description="Fully tailored solutions for established businesses."
          features={[
            'Custom-built backend server',
            'Bespoke storefront design',
            'AI-powered chatbot',
            'Version control',
            'Custom email marketing',
            'Unlimited social media accounts',
            'Priority support',
          ]}
          buttonText="Contact Sales"
          buttonHref="/contact"
          buttonIcon={<PhoneCall className="ml-2 h-4 w-4" />}
          billingPeriod="monthly"
        />
      </div>
    </TabsContent>
    <TabsContent value="yearly" className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <PricingCard
          title="Startup"
          price={1350}
          description="Perfect for small businesses starting their e-commerce journey."
          features={[
            '2 account users',
            '3 storefront templates',
            'Pre-configured backend server',
            'Admin UI access',
            'Integrated email functionality',
            'Basic payment processing',
          ]}
          buttonText="Get Started"
          buttonHref={env.NEXT_PUBLIC_APP_URL}
          buttonIcon={<MoveRight className="ml-2 h-4 w-4" />}
          billingPeriod="yearly"
        />
        <PricingCard
          title="Growth"
          price={3510}
          description="For growing businesses that need more tools and customization."
          features={[
            '5 account users',
            '5 customizable storefront designs',
            'SEO optimization',
            'React email templates',
            'Social media integration',
            'Enhanced product customization',
            'Theme customization',
          ]}
          buttonText="Upgrade Now"
          buttonHref={env.NEXT_PUBLIC_APP_URL}
          buttonIcon={<MoveRight className="ml-2 h-4 w-4" />}
          highlighted={true}
          billingPeriod="yearly"
        />
        <PricingCard
          title="Enterprise"
          price="Custom"
          description="Fully tailored solutions for established businesses."
          features={[
            'Custom-built backend server',
            'Bespoke storefront design',
            'AI-powered chatbot',
            'Version control',
            'Custom email marketing',
            'Unlimited social media accounts',
            'Priority support',
          ]}
          buttonText="Contact Sales"
          buttonHref="/contact"
          buttonIcon={<PhoneCall className="ml-2 h-4 w-4" />}
          billingPeriod="yearly"
        />
      </div>
    </TabsContent>
  </Tabs>
);

export default PricingTabs;
