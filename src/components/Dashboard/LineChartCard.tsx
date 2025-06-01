import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { CalendarDays, ChevronDown } from 'lucide-react';

interface LineChartDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const lineChartData: LineChartDataPoint[] = [
  { month: 'March', closedWon: 65, closedLost: 50 },
  { month: 'April', closedWon: 50, closedLost: 38 },
  { month: 'May', closedWon: 82, closedLost: 22 },
  { month: 'June', closedWon: 60, closedLost: 8 },
  { month: 'July', closedWon: 75, closedLost: 45 },
  { month: 'August', closedWon: 95, closedLost: 32 },
];

const totalClosed = 680;
const totalLost = 70;

interface LineChartCardProps {
  className?: string;
}

const LineChartCard: React.FC<LineChartCardProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="text-lg font-semibold text-primary-text">Leads tracking</CardTitle>
                <CardDescription className="mt-1">
                    <span className="text-3xl font-bold text-primary-text">{totalClosed}</span>
                    <span className="text-sm text-secondary-text ml-1 mr-4">total closed</span>
                    <span className="text-3xl font-bold text-primary-text">{totalLost}</span>
                    <span className="text-sm text-secondary-text ml-1">total lost</span>
                </CardDescription>
            </div>
            <div className="flex items-center space-x-1 text-sm text-secondary-text cursor-pointer">
                <CalendarDays className="h-4 w-4" />
                <span>last 6 months</span>
                <ChevronDown className="h-4 w-4" />
            </div>
        </div>
      </CardHeader>
      <CardContent className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={lineChartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0AB39C" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0AB39C" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F06548" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#F06548" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
                dataKey="month" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                domain={[0, 'dataMax + 10']}
            />
            <RechartsTooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: 'var(--radius)', border: '1px solid hsl(var(--border))'}}
                itemStyle={{ color: 'hsl(var(--card-foreground))'}}
                labelStyle={{ fontWeight: 'bold', color: 'hsl(var(--foreground))' }}
            />
            <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="square"
                iconSize={10}
                formatter={(value, entry) => <span className="text-sm text-secondary-text ml-1">{value}</span>}
            />
            <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="#0AB39C" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#0AB39C' }} activeDot={{ r: 6, fill: '#0AB39C', stroke: 'hsl(var(--card))', strokeWidth: 2 }} />
            <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="#F06548" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#F06548' }} activeDot={{ r: 6, fill: '#F06548', stroke: 'hsl(var(--card))', strokeWidth: 2 }} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartCard;
