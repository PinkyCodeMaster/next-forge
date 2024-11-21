import {
  Code,
  Headphones,
  Mail,
  Rocket,
  Server,
  ShoppingCart,
} from 'lucide-react';

export default function Features() {
  return (
    <div className="w-full bg-gradient-to-b from-purple-50 to-white py-20 lg:py-40 dark:from-purple-900 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-bold text-4xl text-purple-600 tracking-tight md:text-6xl dark:text-purple-400">
              Your One-Stop Tech Shop!
            </h2>
            <p className="max-w-2xl text-muted-foreground text-xl leading-relaxed">
              At Net Guru Solutions, we're cooking up a storm of digital
              awesomeness. From e-commerce to IT support, we've got all the
              ingredients for your success!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-800"
              >
                <feature.icon className="mb-4 h-12 w-12 text-purple-500" />
                <div className="flex flex-col">
                  <h3 className="mb-2 font-semibold text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'Custom E-commerce Solutions',
    description:
      "We'll build you a storefront so cool, your products will be jealous of the website!",
  },
  {
    id: 'fullstack',
    icon: Code,
    title: 'Full-Stack Development',
    description:
      'From front-end to back-end, we stack our skills higher than a tower of pancakes.',
  },
  {
    id: 'it-support',
    icon: Server,
    title: 'IT Support & Servers',
    description:
      "We'll keep your tech running smoother than a freshly waxed surfboard.",
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Email Systems',
    description:
      "We'll set up email systems so reliable, even spam will be impressed.",
  },
  {
    id: 'support',
    icon: Headphones,
    title: '24/7 Customer Support',
    description: "We're always here for you. Think of us as your tech BFFs!",
  },
  {
    id: 'marketing',
    icon: Rocket,
    title: 'Digital Marketing',
    description:
      "We'll skyrocket your online presence faster than you can say 'SEO'!",
  },
];
