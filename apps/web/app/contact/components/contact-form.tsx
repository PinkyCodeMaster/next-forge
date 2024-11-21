'use client';

import { Button } from '@repo/design-system/components/ui/button';
import { Calendar } from '@repo/design-system/components/ui/calendar';
import { Input } from '@repo/design-system/components/ui/input';
import { Label } from '@repo/design-system/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@repo/design-system/components/ui/popover';
import { Textarea } from '@repo/design-system/components/ui/textarea';
import { cn } from '@repo/design-system/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon, Check, MoveRight } from 'lucide-react';
import { useState } from 'react';
import { contact } from '../actions/contact';

export const ContactForm = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // biome-ignore lint/correctness/noUndeclaredVariables: <explanation>
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const companyName = formData.get('companyName') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
      const result = await contact(
        firstName,
        lastName,
        companyName,
        email,
        date?.toISOString() || '',
        subject,
        message
      );
      if (result.error) {
        setSubmitError(result.error);
      } else {
        setSubmitSuccess(true);
      }
    } catch (_error) {
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl">
                  Book a Meeting
                </h4>
                <p className="max-w-sm text-left text-lg text-muted-foreground leading-relaxed tracking-tight">
                  Let's discuss how we can help your business grow with our
                  tailored e-commerce solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6 text-left">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Personalized Consultation</p>
                <p className="text-muted-foreground text-sm">
                  We'll discuss your specific needs and challenges.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6 text-left">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Expert Insights</p>
                <p className="text-muted-foreground text-sm">
                  Gain valuable insights from our experienced team.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6 text-left">
              <Check className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Tailored Solutions</p>
                <p className="text-muted-foreground text-sm">
                  We'll propose solutions customized to your business.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex max-w-sm flex-col gap-4 rounded-md border p-8"
            >
              <h2 className="mb-4 font-semibold text-2xl">Book a meeting</h2>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="meetingDate">Preferred Meeting Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="meetingDate"
                      variant="outline"
                      className={cn(
                        'w-full max-w-sm justify-start text-left font-normal',
                        !date && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" name="firstName" type="text" required />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" name="lastName" type="text" required />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="companyName">Company name</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" type="text" required />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required />
              </div>

              <Button
                type="submit"
                className="w-full gap-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Book the meeting'}
                <MoveRight className="h-4 w-4" />
              </Button>

              {submitError && (
                <p className="mt-2 text-destructive text-sm">{submitError}</p>
              )}
              {submitSuccess && (
                <p className="mt-2 text-green-600 text-sm">
                  Meeting request submitted successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
