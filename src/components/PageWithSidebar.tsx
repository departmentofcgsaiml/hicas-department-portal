import React, { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

// Define the types for the props this component accepts
type SidebarLink = {
  name: string;
  component: React.ReactNode;
};

type PageWithSidebarProps = {
  pageTitle: string;
  sidebarLinks: SidebarLink[];
};

// This is the reusable layout component for pages with a sidebar
export default function PageWithSidebar({ pageTitle, sidebarLinks }: PageWithSidebarProps) {
  // The first item in the sidebar is active by default
  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(sidebarLinks[0]?.component);
  const [activeLinkName, setActiveLinkName] = useState<string>(sidebarLinks[0]?.name);

  const handleLinkClick = (link: SidebarLink) => {
    setActiveComponent(link.component);
    setActiveLinkName(link.name);
  };

  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            {/* CORRECTED: Added a stronger shadow and a darker, thicker border for better visibility */}
            <div className="bg-slate-100 dark:bg-slate-400 p-4 rounded-lg shadow-xl border-2 border-slate-400 dark:border-slate-200">
              <h2 className="text-xl font-bold font-lora text-brand-red-900 dark:text-white mb-4 border-b pb-2 dark:border-slate-100">
                {pageTitle}
              </h2>
              <nav className="space-y-1">
                {sidebarLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link)}
                    className={`w-full text-left px-4 py-2.5 rounded-md font-semibold text-sm transition-colors flex justify-between items-center ${
                      activeLinkName === link.name
                        ? 'bg-amber-400 text-slate-900'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {link.name}
                    {activeLinkName === link.name && <ChevronRightIcon className="h-5 w-5" />}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-3">
            {activeComponent}
          </main>
        </div>
      </div>
    </div>
  );
}
