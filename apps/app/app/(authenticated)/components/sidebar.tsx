'use client';

import { OrganizationSwitcher, UserButton } from '@repo/auth/client';
import { ModeToggle } from '@repo/design-system/components/mode-toggle';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@repo/design-system/components/ui/collapsible';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/design-system/components/ui/dropdown-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@repo/design-system/components/ui/sidebar';
import { cn } from '@repo/design-system/lib/utils';
import {
  BarChart3Icon,
  BoxIcon,
  ChevronRightIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
  PackageIcon,
  ShoppingCartIcon,
  TagIcon,
  TruckIcon,
  UsersIcon,
} from 'lucide-react';
import type { ReactNode } from 'react';

type GlobalSidebarProperties = {
  readonly children: ReactNode;
};

const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      icon: LayoutDashboardIcon,
      isActive: true,
    },
    {
      title: 'Products',
      url: '/products',
      icon: BoxIcon,
      items: [
        { title: 'All Products', url: '/products' },
        { title: 'Add New', url: '/products/new' },
        { title: 'Categories', url: '/products/categories' },
      ],
    },
    {
      title: 'Orders',
      url: '/orders',
      icon: ShoppingCartIcon,
      items: [
        { title: 'All Orders', url: '/orders' },
        { title: 'Abandoned Carts', url: '/orders/abandoned' },
      ],
    },
    {
      title: 'Customers',
      url: '/customers',
      icon: UsersIcon,
    },
    {
      title: 'Analytics',
      url: '/analytics',
      icon: BarChart3Icon,
      items: [
        { title: 'Sales', url: '/analytics/sales' },
        { title: 'Traffic', url: '/analytics/traffic' },
      ],
    },
    {
      title: 'Marketing',
      url: '/marketing',
      icon: TagIcon,
      items: [
        { title: 'Discounts', url: '/marketing/discounts' },
        { title: 'Campaigns', url: '/marketing/campaigns' },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Inventory',
      url: '/inventory',
      icon: PackageIcon,
    },
    {
      title: 'Shipping',
      url: '/shipping',
      icon: TruckIcon,
    },
    {
      title: 'Payments',
      url: '/payments',
      icon: CreditCardIcon,
    },
  ],
};

export default function GlobalSidebar({ children }: GlobalSidebarProperties) {
  const sidebar = useSidebar();

  return (
    <>
      <Sidebar variant="inset">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <div
                className={cn(
                  'h-[36px] overflow-hidden transition-all [&>div]:w-full',
                  sidebar.open ? '' : '-mx-1'
                )}
              >
                <OrganizationSwitcher
                  hidePersonal
                  afterSelectOrganizationUrl="/dashboard"
                />
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <CollapsibleTrigger asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </CollapsibleTrigger>
                    </SidebarMenuButton>
                    {item.items?.length ? (
                      <>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuAction className="data-[state=open]:rotate-90">
                            <ChevronRightIcon />
                            <span className="sr-only">Toggle</span>
                          </SidebarMenuAction>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <a href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </>
                    ) : null}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup className="mt-auto">
            <SidebarGroupContent>
              <SidebarMenu>
                {data.navSecondary.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center gap-2">
              <UserButton
                showName
                appearance={{
                  elements: {
                    rootBox: 'flex overflow-hidden w-full',
                    userButtonBox: 'flex-row-reverse',
                    userButtonOuterIdentifier: 'truncate pl-0',
                  },
                }}
              />
              <ModeToggle />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </>
  );
}
