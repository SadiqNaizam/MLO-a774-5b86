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
  Briefcase // Placeholder for BO icon, or use an actual logo component if available
} from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  isSectionTitle?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive, isSectionTitle }) => {
  if (isSectionTitle) {
    return (
      <li className="px-3 py-2 text-xs font-semibold text-secondary-text uppercase tracking-wider">
        {label}
      </li>
    );
  }

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

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const navItems: NavItemProps[] = [
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

  const helpNavItems: NavItemProps[] = [
    { href: '#', icon: HelpCircle, label: 'Help' },
    { href: '#', icon: Settings, label: 'Settings' },
    // The image shows two 'Help' items, the second one is identical to the first one in icon and label
    // { href: '#', icon: HelpCircle, label: 'Help' }, 
  ];

  return (
    <div className={cn('h-screen w-64 bg-sidebar fixed top-0 left-0 flex flex-col', className)}>
      <div className="flex items-center justify-center h-[70px] border-b border-border">
        {/* Logo - Placeholder with an icon. Replace with actual <Logo /> component if it exists */}
        <Briefcase className="h-8 w-8 text-primary" /> 
        <span className="ml-2 text-xl font-bold text-primary-text">BO</span>
      </div>
      <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
        <div className="pt-4 mt-4 border-t border-border">
            <ul className="space-y-1">
                {helpNavItems.map((item) => (
                    <NavItem key={item.label} {...item} />
                ))}
            </ul>
        </div>
      </nav>
    </div>
  );
};

export default SidebarNav;
