import { WelcomeEmail } from '@repo/email/templates/welcome';

const ExampleWelcomeEmail = () => (
  <WelcomeEmail
    name="Jane Smith"
    dashboardUrl="https://dashboard.netgurusolutions.co.uk"
  />
);

export default ExampleWelcomeEmail;