import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/design-system/components/ui/accordion';
import { Button } from '@repo/design-system/components/ui/button';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

const faqItems = [
  {
    question: 'What services does NetGuru Solutions offer?',
    answer:
      'NetGuru Solutions specializes in building custom e-commerce platforms. We offer tailored solutions including custom storefront designs, powerful backend systems, API integrations, authentication systems, payment solutions, inventory management, marketing optimization, and IT support.',
  },
  {
    question: 'What technologies do you use for e-commerce solutions?',
    answer:
      'We use cutting-edge technologies to build scalable and performant e-commerce solutions. This includes Next.js 15 for the frontend, ShadCN UI for design components, Framer Motion for smooth animations, and Medusa.js as an open-source backend server.',
  },
  {
    question: 'Can you integrate with existing payment systems?',
    answer:
      'Yes, we offer integrations with a wide range of payment solutions including Stripe, Klarna, Apple Pay, Google Pay, and more. We ensure secure and seamless transactions for your customers.',
  },
  {
    question:
      'Do you provide ongoing support after the e-commerce platform is built?',
    answer:
      'We offer end-to-end support, from initial infrastructure setup to ongoing IT support. This includes networking solutions, POS system integration, and continuous platform optimization.',
  },
  {
    question: 'How do you approach SEO and marketing for e-commerce platforms?',
    answer:
      'We implement comprehensive SEO optimization to improve your visibility on search engines. Additionally, we can help with email marketing campaigns to engage customers and develop social media strategies to drive traffic to your e-commerce platform.',
  },
  {
    question:
      'What makes NetGuru Solutions different from other e-commerce solution providers?',
    answer:
      'Our tailored approach sets us apart. We understand that every business is unique, so we create custom solutions that adapt to your specific needs. We also leverage open-source tools like Medusa.js, giving businesses the flexibility to customize their operations.',
  },
  {
    question: 'Can your solutions scale as my business grows?',
    answer:
      'Yes, our solutions are built to be future-ready. We use the latest technologies and scalable architectures to ensure that your e-commerce platform can grow alongside your business, handling increased traffic and expanded product lines with ease.',
  },
  {
    question: 'How do I get started with NetGuru Solutions?',
    answer:
      "Getting started is easy! Simply reach out to us through our contact page or give us a call. We'll schedule a consultation to discuss your business needs and how we can create a tailored e-commerce solution for you.",
  },
];

export const FAQ = () => (
  <section className="w-full bg-muted/40 py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              Find answers to common questions about NetGuru Solutions and our
              e-commerce platform services.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground">
              Can't find what you're looking for? We're here to help.
            </p>
            <Button className="w-fit gap-2" variant="outline" asChild>
              <Link href="/contact">
                Contact Us <PhoneCall className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`faq-${item.question.replace(/\s+/g, '-').toLowerCase()}`}
              value={`item-${index}`}
            >
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
