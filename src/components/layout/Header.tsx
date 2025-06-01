import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, CalendarDays } from 'lucide-react';

interface HeaderProps {
  className?: string;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ className, title = "Dashboard" }) => {
  const createDropdownItems = [
    { label: "New Lead" as const },
    { label: "New Contact" as const },
    { label: "New Task" as const },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-64 right-0 z-20 flex h-[70px] items-center justify-between border-b border-border bg-app-surface px-6',
        // As per Layout Requirements: header.layout, header.height, header.position
        // `h-[70px]` for height, `bg-app-surface` (maps to PRD surface) for background.
        // `flex items-center justify-between px-6` for internal layout.
        // `fixed top-0 left-64 right-0` for positioning relative to sidebar.
        // `border-b border-border` for the bottom border.
        className
      )}
    >
      <h1 className="text-2xl font-semibold text-primary-text">{title}</h1>
      <div className="flex items-center space-x-4">
        <div className="flex cursor-pointer items-center space-x-2 text-sm text-secondary-text">
          <CalendarDays className="h-4 w-4" />
          <span>last 6 months</span>
          <ChevronDown className="h-4 w-4" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-accent-blue text-primary-foreground hover:bg-accent-blue/90">
              Create
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {createDropdownItems.map((item) => (
              <DropdownMenuItem key={item.label} className="cursor-pointer">
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
