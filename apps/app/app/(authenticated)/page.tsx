import { auth } from '@repo/auth/server';
import { database } from '@repo/database';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@repo/design-system/components/ui/breadcrumb';
import { Separator } from '@repo/design-system/components/ui/separator';
import { SidebarTrigger } from '@repo/design-system/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/design-system/components/ui/card';
import { env } from '@repo/env';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { AvatarStack } from './components/avatar-stack';
import { Cursors } from './components/cursors';
import { BarChart, LineChart } from '@repo/design-system/components/ui/chart';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';

const title = 'E-commerce Dashboard';
const description = 'Manage your online store with ease.';

const CollaborationProvider = dynamic(() =>
  import('./components/collaboration-provider').then(
    (mod) => mod.CollaborationProvider
  )
);

export const metadata: Metadata = {
  title,
  description,
};

const DashboardPage = async () => {
  const { orgId } = await auth();

  if (!orgId) {
    notFound();
  }

  const pages = await database.page.findMany({
    take: 5,
    orderBy: [{ id: 'desc' }],
  });

  // Mock data for demonstration purposes
  const revenueData = [
    { name: 'Jan', total: 1000 },
    { name: 'Feb', total: 1200 },
    { name: 'Mar', total: 900 },
    { name: 'Apr', total: 1500 },
    { name: 'May', total: 1800 },
    { name: 'Jun', total: 2000 },
  ];

  const topProducts = [
    { name: 'Product A', sales: 120 },
    { name: 'Product B', sales: 80 },
    { name: 'Product C', sales: 70 },
    { name: 'Product D', sales: 50 },
  ];

  return (
    <>
      <header className="flex h-16 shrink-0 items-center justify-between gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator className="mr-2 h-4" orientation="vertical" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {env.LIVEBLOCKS_SECRET && (
          <CollaborationProvider orgId={orgId}>
            <AvatarStack />
            <Cursors />
          </CollaborationProvider>
        )}
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">+201 since last hour</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2%</div>
              <p className="text-xs text-muted-foreground">+0.1% from last week</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <LineChart
                data={revenueData}
                index="name"
                categories={['total']}
                colors={['blue']}
                valueFormatter={(value) => `$${value}`}
                className="h-[200px]"
              />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={topProducts}
                index="name"
                categories={['sales']}
                colors={['teal']}
                valueFormatter={(value) => `${value} sales`}
                className="h-[200px]"
              />
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.id} className="flex items-center justify-between">
                  <span>{page.name}</span>
                  <span>{page.id}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DashboardPage;

