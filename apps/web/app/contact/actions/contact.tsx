'use server';

import { resend } from '@repo/email';
import { ContactTemplate } from '@repo/email/templates/contact';
import { env } from '@repo/env';
import { parseError } from '@repo/observability/error';

export const contact = async (
  firstName: string,
  lastName: string,
  companyName: string,
  email: string,
  meetingDate: string,
  subject: string,
  message: string
): Promise<{
  error?: string;
}> => {
  try {
    await resend.emails.send({
      from: env.RESEND_FROM,
      to: env.RESEND_FROM,
      subject: 'New meeting request',
      replyTo: email,
      react: (
        <ContactTemplate
          firstName={firstName}
          lastName={lastName}
          companyName={companyName}
          email={email}
          meetingDate={meetingDate}
          subject={subject}
          message={message}
        />
      ),
    });

    return {};
  } catch (error) {
    const errorMessage = parseError(error);

    return { error: errorMessage };
  }
};
