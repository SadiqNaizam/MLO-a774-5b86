import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import FunnelChartCard from '@/components/Dashboard/FunnelChartCard';
import PieChartCard from '@/components/Dashboard/PieChartCard';
import LineChartCard from '@/components/Dashboard/LineChartCard';
import StatCards from '@/components/Dashboard/StatCards';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LayoutGrid } from 'lucide-react';

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout pageTitle="Dashboard">
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="flex border-b border-border justify-start p-0 bg-transparent rounded-none">
          <TabsTrigger
            value="sales"
            className="whitespace-nowrap px-4 py-2.5 -mb-px data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground text-sm font-medium rounded-none data-[state=active]:shadow-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:bg-transparent"
          >
            Sales
          </TabsTrigger>
          <TabsTrigger
            value="leads"
            className="whitespace-nowrap px-4 py-2.5 -mb-px data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground text-sm font-medium rounded-none data-[state=active]:shadow-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:bg-transparent"
          >
            Leads
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="pt-6">
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-card p-12 min-h-[300px]">
            <LayoutGrid className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Sales Data Unavailable</h3>
            <p className="text-muted-foreground text-center">
              This section is a placeholder for Sales-related metrics and charts.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="leads" className="pt-6">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <FunnelChartCard className="lg:col-span-3" />
              <PieChartCard className="lg:col-span-2" />
            </div>
            <LineChartCard />
            <StatCards />
          </div>
        </TabsContent>
      </Tabs>
    </MainAppLayout>
  );
};

export default IndexPage;
