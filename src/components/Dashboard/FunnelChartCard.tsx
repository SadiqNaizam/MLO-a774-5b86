import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: string;
  duration: string;
  color: string; 
  showTooltip?: boolean;
  tooltipText?: string;
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: '$ 200', duration: '2 days', color: 'bg-accent-red' },
  { id: 'qualified', name: 'Qualified', count: 100, value: '$ 100', duration: '2 days', color: 'bg-accent-yellow' }, 
  { id: 'inConversation', name: 'In conversation', count: 50, value: '$ 100', duration: 'average time on this stage', color: 'bg-slate-700' },
  { id: 'negotiations', name: 'Negotiations', count: 20, value: '$ 50', duration: '8 days', color: 'bg-accent-green' },
  { id: 'closedWon', name: 'Closed won', count: 20, value: '$ 50', duration: '10 days', color: 'bg-purple-500' },
];

const totalActiveLeads = 600;

interface FunnelChartCardProps {
  className?: string;
}

const FunnelChartCard: React.FC<FunnelChartCardProps> = ({ className }) => {
  const totalBarValue = funnelData.reduce((sum, item) => sum + item.count, 0);

  return (
    <TooltipProvider>
      <Card className={cn('w-full', className)}>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-text">Funnel count</CardTitle>
          <CardDescription className="text-3xl font-bold text-primary-text">
            {totalActiveLeads} <span className="text-sm font-normal text-secondary-text">active leads</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex h-3 rounded-full overflow-hidden">
              {funnelData.map(stage => (
                <div
                  key={stage.id}
                  className={cn('h-full', stage.color)}
                  style={{ width: `${(stage.count / totalBarValue) * 100}%` }}
                />
              ))}
            </div>
          </div>
          <ul className="space-y-3">
            {funnelData.map((stage) => (
              <li key={stage.id} className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-x-3 text-sm">
                <span className={cn('h-3 w-3 rounded-sm', stage.color)} />
                <span className="text-primary-text font-medium">{stage.name}</span>
                <span className="text-secondary-text justify-self-end">{stage.count}</span>
                <span className="text-secondary-text justify-self-end font-medium">{stage.value}</span>
                {
                  stage.id === 'qualified' && stage.duration === '2 days' ? (
                     <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="text-secondary-text justify-self-end cursor-default">{stage.duration}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Average time for qualified leads</p>
                        </TooltipContent>
                    </Tooltip>
                  ) : stage.id === 'inConversation' ? (
                    <span className="text-secondary-text justify-self-end text-xs italic">{stage.duration}</span>
                  ) : (
                    <span className="text-secondary-text justify-self-end">{stage.duration}</span>
                  )
                }
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default FunnelChartCard;
