'use client';

import { ModeToggle } from '@repo/design-system/components/mode-toggle';
import { Button } from '@repo/design-system/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@repo/design-system/components/ui/navigation-menu';
import { env } from '@repo/env';
import { Menu, MoveRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './logo.svg';

export default function Header() {
  const navigationItems = [
    {
      title: 'Home',
      href: '/',
      description: '',
    },
    {
      title: 'Product',
      description:
        'Managing a small business today is already tough. Our products make it easier.',
      items: [
        {
          title: 'Pricing',
          href: '/pricing',
          description: 'Flexible plans for businesses of all sizes',
        },
        {
          title: 'Features',
          href: '/features',
          description: 'Powerful tools to streamline your operations',
        },
        {
          title: 'Solutions',
          href: '/solutions',
          description: 'Tailored approaches for various industries',
        },
        {
          title: 'Integrations',
          href: '/integrations',
          description: 'Connect with your favorite tools seamlessly',
        },
      ],
    },
    {
      title: 'Blog',
      href: '/blog',
      description: '',
    },
    {
      title: 'Docs',
      href: env.NEXT_PUBLIC_DOCS_URL,
      description: '',
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex min-h-16 items-center justify-between px-4 lg:min-h-20">
        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Logo"
            width={24}
            height={24}
            className="dark:invert"
          />
          <p className="whitespace-nowrap font-semibold">Net Guru Soltuions</p>
        </div>

        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-row justify-start gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink asChild>
                      <Button variant="ghost" asChild>
                        <Link href={item.href}>{item.title}</Link>
                      </Button>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[600px] p-6">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="flex flex-col justify-between space-y-4">
                            <div>
                              <h3 className="font-semibold text-lg">
                                {item.title}
                              </h3>
                              <p className="mt-1 text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="w-fit" asChild>
                              <Link href="/contact">Book a call today</Link>
                            </Button>
                          </div>
                          <div className="flex flex-col space-y-3">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="block space-y-1 rounded-md p-3 hover:bg-muted"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-sm">
                                    {subItem.title}
                                  </span>
                                  <MoveRight className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <p className="line-clamp-2 text-muted-foreground text-sm">
                                  {subItem.description}
                                </p>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden lg:inline-flex" asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
          <div className="hidden border-r lg:inline-block" />
          <ModeToggle />
          <Button variant="outline" className="hidden sm:inline-flex" asChild>
            <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-in`}>Sign in</Link>
          </Button>
          <Button className="hidden sm:inline-flex" asChild>
            <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-up`}>Get started</Link>
          </Button>
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background lg:hidden">
          <nav className="container mx-auto flex flex-col gap-6 overflow-y-auto p-4">
            {navigationItems.map((item) => (
              <div key={item.title} className="border-b pb-4">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="font-medium text-lg"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <p className="font-medium text-lg">{item.title}</p>
                    <p className="mt-1 text-muted-foreground text-sm">
                      {item.description}
                    </p>
                    {item.items && (
                      <div className="mt-2 flex flex-col gap-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="flex items-center justify-between rounded-md p-2 hover:bg-muted"
                            onClick={() => setOpen(false)}
                          >
                            <span>{subItem.title}</span>
                            <MoveRight className="h-4 w-4 text-muted-foreground" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-4">
              <Button asChild onClick={() => setOpen(false)}>
                <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-up`}>
                  Get started
                </Link>
              </Button>
              <Button variant="outline" asChild onClick={() => setOpen(false)}>
                <Link href={`${env.NEXT_PUBLIC_APP_URL}/sign-in`}>Sign in</Link>
              </Button>
              <Button variant="ghost" asChild onClick={() => setOpen(false)}>
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
