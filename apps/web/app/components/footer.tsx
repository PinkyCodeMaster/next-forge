import { env } from '@repo/env';
import { Status } from '@repo/observability/status';
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  const navigationItems = [
    {
      title: 'Services',
      items: [
        {
          title: 'Custom E-Commerce',
          href: '/services/e-commerce',
        },
        {
          title: 'Marketing & SEO',
          href: '/services/marketing',
        },
        {
          title: 'IT Support',
          href: '/services/it-support',
        },
      ],
    },
    {
      title: 'Company',
      items: [
        {
          title: 'About Us',
          href: '/about',
        },
        {
          title: 'Docs',
          href: env.NEXT_PUBLIC_DOCS_URL,
        },
        {
          title: 'Blog',
          href: '/blog',
        },
        {
          title: 'Careers',
          href: '/careers',
        },
        {
          title: 'Contact',
          href: '/contact',
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          title: 'Terms of Service',
          href: '/legal/terms',
        },
        {
          title: 'Privacy Policy',
          href: '/legal/privacy',
        },
        {
          title: 'Acceptable Use',
          href: '/legal/acceptable-use',
        },
      ],
    },
  ];

  return (
    <footer className="border-foreground/10 border-t bg-background">
      <div className="container mx-auto py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl">NetGuru Solutions</span>
            </Link>
            <p className="max-w-md text-foreground/75">
              Empowering businesses with tailored e-commerce solutions,
              cutting-edge technology, and seamless user experiences.
            </p>
            <Status />
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="text-foreground/75 hover:text-foreground"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="text-foreground/75 hover:text-foreground"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-foreground/75 hover:text-foreground"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                aria-label="GitHub"
                className="text-foreground/75 hover:text-foreground"
              >
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {navigationItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <ul className="flex flex-col gap-2">
                  {item.items?.map((subItem) => (
                    <li key={subItem.title}>
                      <Link
                        href={subItem.href}
                        className="text-foreground/75 transition-colors hover:text-foreground"
                        target={
                          subItem.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          subItem.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-foreground/10 border-t pt-8 text-center">
          <p className="text-foreground/75">
            © {new Date().getFullYear()} NetGuru Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
