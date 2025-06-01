import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
  pageTitle?: string; // To be passed to the Header component
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className, pageTitle }) => {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {/* Sidebar is fixed positioned and will occupy its space independently */}
      <Sidebar />
      
      {/* This div wraps the Header and main content, offset by the Sidebar's width */}
      {/* Layout Requirements: overall.sizing.sidebar "w-64" */}
      <div className="ml-64">
        {/* Header is fixed positioned, offset by Sidebar's width */}
        <Header title={pageTitle} />
        
        {/* Main content area, with top padding to account for the fixed Header's height */}
        {/* Layout Requirements: overall.sizing.header "h-[70px]" */}
        {/* Layout Requirements: mainContent.layout "p-6 mt-[70px]" (mt-[70px] applied here as pt-[70px]) */}
        {/* Layout Requirements: overall.sizing.mainContent "min-w-0 overflow-y-auto" (overflow handled by browser for main, min-w-0 is good for flex/grid children) */}
        <main className="pt-[70px]">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
