'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/design-system/components/ui/avatar';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@repo/design-system/components/ui/carousel';
import { User } from 'lucide-react';
import { useEffect, useState } from 'react';

// Placeholder testimonial data
const placeholderTestimonials = [
  {
    id: 1,
    title: 'Best decision',
    content:
      'Our goal was to streamline SMB trade, making it easier and faster than ever and we did it together.',
    author: 'John Johnsen',
    avatarUrl: 'https://github.com/shadcn.png',
  },
  {
    id: 2,
    title: 'Incredible results',
    content:
      'V0 has transformed our e-commerce operations. The custom solutions are exactly what we needed.',
    author: 'Sarah Smith',
    avatarUrl: 'https://github.com/sarah.png',
  },
  {
    id: 3,
    title: 'Game changer',
    content:
      'The integration capabilities of V0 have streamlined our entire business process. Highly recommended!',
    author: 'Mike Johnson',
    avatarUrl: 'https://github.com/mike.png',
  },
  {
    id: 4,
    title: 'Exceptional support',
    content:
      "The V0 team's dedication to customer success is unparalleled. They've been there every step of the way.",
    author: 'Emily Chen',
    avatarUrl: 'https://github.com/emily.png',
  },
  {
    id: 5,
    title: 'Scalability at its best',
    content:
      "As our business grew, V0's solutions scaled seamlessly with us. It's been a crucial part of our success.",
    author: 'Alex Rodriguez',
    avatarUrl: 'https://github.com/alex.png',
  },
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  //const [current, setCurrent] = useState(0)
  const [testimonials] = useState(placeholderTestimonials);

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [api]);

  // Placeholder for future API call
  useEffect(() => {
    // This is where you'll fetch testimonials from your API
    // For now, we're using the placeholder data
    // Example of how it might look:
    // const fetchTestimonials = async () => {
    //   try {
    //     const response = await fetch('/api/testimonials')
    //     const data = await response.json()
    //     setTestimonials(data)
    //   } catch (error) {
    //     console.error('Failed to fetch testimonials:', error)
    //   }
    // }
    // fetchTestimonials()
  }, []);

  return (
    <section className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-left font-regular text-3xl tracking-tighter md:text-5xl lg:max-w-xl">
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem className="lg:basis-1/2" key={testimonial.id}>
                  <div className="flex aspect-video h-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2">
                    <User className="h-8 w-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          {testimonial.title}
                        </h3>
                        <p className="max-w-xs text-base text-muted-foreground">
                          {testimonial.content}
                        </p>
                      </div>
                      <p className="flex flex-row items-center gap-2 text-sm">
                        <span className="text-muted-foreground">By</span>
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src={testimonial.avatarUrl}
                            alt={testimonial.author}
                          />
                          <AvatarFallback>
                            {testimonial.author
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span>{testimonial.author}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
