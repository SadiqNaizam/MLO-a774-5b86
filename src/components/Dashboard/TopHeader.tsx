import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  CalendarDays
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header className={cn('h-[70px] flex items-center justify-between px-6 bg-app-surface border-b border-border', className)}>
      <h1 className="text-2xl font-semibold text-primary-text">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm text-secondary-text">
          <CalendarDays className="h-4 w-4" />
          <span>last 6 months</span> 
          <ChevronDown className="h-4 w-4 cursor-pointer" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-accent-blue text-primary-foreground hover:bg-accent-blue/90">
              Create
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>New Lead</DropdownMenuItem>
            <DropdownMenuItem>New Contact</DropdownMenuItem>
            <DropdownMenuItem>New Task</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
