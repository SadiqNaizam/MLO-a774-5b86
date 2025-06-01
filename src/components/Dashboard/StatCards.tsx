import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface ReasonStat {
  id: string;
  percentage: number;
  description: string;
}

const reasonsOfLeadsLost: ReasonStat[] = [
  { id: 'unclearProposal1', percentage: 40, description: 'The proposal is unclear' as const },
  { id: 'venturePursuit', percentage: 20, description: 'However venture pursuit' as const },
  { id: 'other', percentage: 10, description: 'Other' as const },
  { id: 'unclearProposal2', percentage: 30, description: 'The proposal is unclear' as const }, // Replicated as per image
];

interface OtherDataStat {
  id: string;
  value: string | number;
  label: string;
  hasInfoIcon?: boolean;
  infoText?: string;
}

const otherDataStats: OtherDataStat[] = [
  { id: 'totalLeads', value: 900, label: 'total leads count' as const },
  { id: 'avgConversionTime', value: 12, label: 'days in average to convert lead' as const },
  { id: 'inactiveLeads', value: 30, label: 'inactive leads' as const, hasInfoIcon: true, infoText: 'Leads that have not shown activity recently.' },
];

interface StatCardsProps {
  className?: string;
}

const StatCards: React.FC<StatCardsProps> = ({ className }) => {
  return (
    <TooltipProvider>
      <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-primary-text">Reasons of leads lost</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-x-6 gap-y-8">
            {reasonsOfLeadsLost.map((reason) => (
              <div key={reason.id}>
                <p className="text-3xl font-bold text-primary-text">{reason.percentage}%</p>
                <p className="text-sm text-secondary-text mt-1">{reason.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-primary-text">Other data</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherDataStats.map((stat) => (
              <div key={stat.id}>
                <div className="flex items-baseline">
                    <p className="text-3xl font-bold text-primary-text">{stat.value}</p>
                    {stat.hasInfoIcon && (
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-secondary-text ml-1.5 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{stat.infoText || 'More information'}</p>
                        </TooltipContent>
                        </Tooltip>
                    )}
                </div>
                <p className="text-sm text-secondary-text mt-1">{stat.label}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default StatCards;
