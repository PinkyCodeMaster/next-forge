import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

type WelcomeEmailProps = {
  readonly name: string;
  readonly dashboardUrl: string;
};

export const WelcomeEmail = ({ name, dashboardUrl }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Welcome to Net Guru Solutions - Your Digital Growth Partner
    </Preview>
    <Tailwind>
      <Body className="bg-gray-100 font-sans">
        <Container className="mx-auto px-4 py-8">
          <Img
            src="https://netgurusolutions.co.uk/logo.png"
            alt="Net Guru Solutions Logo"
            width="150"
            height="50"
            className="mx-auto mb-6"
          />
          <Section className="rounded-lg bg-white p-8 shadow-lg">
            <Heading className="mb-4 font-bold text-2xl text-gray-800">
              Welcome to Net Guru Solutions, {name}!
            </Heading>
            <Text className="mb-4 text-gray-600">
              We're thrilled to have you on board. At Net Guru Solutions, we're
              committed to helping small businesses and startups like yours
              thrive in the digital world.
            </Text>
            <Text className="mb-4 text-gray-600">
              Here's what you can expect from us:
            </Text>
            <ul className="mb-4 list-disc pl-6 text-gray-600">
              <li>Custom web solutions tailored to your business needs</li>
              <li>Effective email marketing campaigns</li>
              <li>Comprehensive digital strategy guidance</li>
              <li>Ongoing support and expert advice</li>
            </ul>
            <Button
              href={dashboardUrl}
              className="rounded-md bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
            >
              Access Your Dashboard
            </Button>
            <Hr className="my-6 border-gray-300" />
            <Text className="mb-4 text-gray-600">
              If you have any questions or need assistance, don't hesitate to
              reach out to our support team at support@netgurusolutions.co.uk.
            </Text>
            <Text className="text-gray-600">
              We look forward to helping you grow your online presence!
            </Text>
            <Text className="mt-4 font-bold text-gray-600">
              The Net Guru Solutions Team
            </Text>
          </Section>
          <Text className="mt-6 text-center text-gray-500 text-sm">
            © 2024 Net Guru Solutions. All rights reserved.
            <br />
            123 Digital Street, Web City, WC1 2NG, United Kingdom
          </Text>
          <Text className="mt-2 text-center text-gray-500 text-xs">
            If you no longer wish to receive these emails, you can{' '}
            <Link
              href="https://netgurusolutions.co.uk/unsubscribe"
              className="text-blue-600 hover:underline"
            >
              unsubscribe here
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

const ExampleWelcomeEmail = () => (
  <WelcomeEmail
    name="Jane Smith"
    dashboardUrl="https://dashboard.netgurusolutions.co.uk"
  />
);

export default ExampleWelcomeEmail;
