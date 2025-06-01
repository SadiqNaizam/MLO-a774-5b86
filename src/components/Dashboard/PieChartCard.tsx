import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface PieChartSourceData {
  name: string;
  value: number; // for chart proportions
  displayValue: string; // e.g. $3,000
  percentage: number;
  color: string;
}

const leadsConvertedData: PieChartSourceData[] = [
  { name: 'Clutch', value: 50, displayValue: '$ 3,000', percentage: 50, color: '#F06548' }, // accent-red
  { name: 'Behance', value: 40, displayValue: '$ 1,000', percentage: 40, color: '#FFC107' }, // accent-yellow
  { name: 'Instagram', value: 10, displayValue: '$ 1,000', percentage: 10, color: '#0AB39C' }, // accent-green
  { name: 'Dribbble', value: 10, displayValue: '$ 1,000', percentage: 10, color: '#34D399' }, // lighter green
];
// Note: Percentages add up to 110% as per image, chart will normalize this based on 'value'.
// For accurate pie chart, 'value' should represent the true proportion. Let's adjust 'value' to sum to 100 for true percentages.
const chartDisplayData = leadsConvertedData.map(item => ({...item, chartValue: item.value})); 
// if percentages were 50,25,15,10 then value: 50,25,15,10 is correct
// Since image says 50,40,10,10, we use these for the text and for the chart values.

interface PieChartCardProps {
  className?: string;
}

const PieChartCard: React.FC<PieChartCardProps> = ({ className }) => {
  return (
    <TooltipProvider>
      <Card className={cn('w-full', className)}>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-text">Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="leadsConverted" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="leadsCame">Leads came</TabsTrigger>
              <TabsTrigger value="leadsConverted">Leads Converted</TabsTrigger>
              <TabsTrigger value="totalDeals">Total deals size</TabsTrigger>
            </TabsList>
            <TabsContent value="leadsCame">
              <p className="text-center text-secondary-text">Data for 'Leads came' not available.</p>
            </TabsContent>
            <TabsContent value="leadsConverted">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartDisplayData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        innerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        stroke="hsl(var(--card))"
                        strokeWidth={2}
                      >
                        {chartDisplayData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip 
                        contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: 'var(--radius)', border: '1px solid hsl(var(--border))'}}
                        itemStyle={{ color: 'hsl(var(--card-foreground))'}}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <ul className="space-y-3">
                  {leadsConvertedData.map((source) => (
                    <li key={source.name} className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <span className="h-3 w-3 rounded-sm mr-2" style={{ backgroundColor: source.color }} />
                        <span className="text-primary-text font-medium">{source.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-secondary-text font-semibold">{source.displayValue}</span>
                        <span className="text-secondary-text w-10 text-right">{source.percentage}%</span>
                        {source.name === 'Dribbble' && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-secondary-text cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>from leads total</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="totalDeals">
              <p className="text-center text-secondary-text">Data for 'Total deals size' not available.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default PieChartCard;
