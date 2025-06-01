import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  FileText,
  Receipt,
  ShoppingBag,
  Mail as MailIcon,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  Briefcase // Used as a placeholder for BO logo icon
} from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive }) => {
  return (
    <li>
      <a
        href={href}
        className={cn(
          'flex items-center space-x-3 rounded-md p-2 text-sm font-medium text-primary-text hover:bg-muted',
          isActive && 'bg-primary text-primary-foreground hover:bg-primary/90'
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </a>
    </li>
  );
};

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const mainNavItems: NavItemProps[] = [
    { href: '#', icon: LayoutGrid, label: 'Dashboard', isActive: true },
    { href: '#', icon: Users, label: 'Leads' },
    { href: '#', icon: Users, label: 'Customers' },
    { href: '#', icon: FileText, label: 'Proposals' },
    { href: '#', icon: Receipt, label: 'Invoices' },
    { href: '#', icon: ShoppingBag, label: 'Items' },
    { href: '#', icon: MailIcon, label: 'Mail' },
    { href: '#', icon: Archive, label: 'Shoebox' },
    { href: '#', icon: CalendarDays, label: 'Calendar' },
  ];

  const secondaryNavItems: NavItemProps[] = [
    { href: '#', icon: HelpCircle, label: 'Help' },
    { href: '#', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-30 flex h-screen w-64 flex-col bg-sidebar',
        // As per Layout Requirements: sidebar.layout, sidebar.sizing
        // `w-64` is explicit, `h-screen` for full height, `bg-sidebar` for background.
        // `fixed top-0 left-0` for positioning.
        // `flex flex-col` for internal stacking.
        className
      )}
    >
      <div className="flex h-[70px] items-center justify-center border-b border-border">
        <Briefcase className="h-8 w-8 text-primary" />
        <span className="ml-2 text-xl font-bold text-primary-text">BO</span>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {mainNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
        <div className="mt-4 border-t border-border pt-4">
          <ul className="space-y-1">
            {secondaryNavItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
