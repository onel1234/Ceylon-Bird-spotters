"use client";

import React, { Suspense } from "react";
import { Tabs as BaseTabs } from "./Tabs"; 

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

export function ClientTabs({
  tabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) {
  return (
    <Suspense fallback={<TabsFallback tabs={tabs} />}>
      <BaseTabs
        tabs={tabs}
        containerClassName={containerClassName}
        activeTabClassName={activeTabClassName}
        tabClassName={tabClassName}
        contentClassName={contentClassName}
      />
    </Suspense>
  );
}

function TabsFallback({ tabs }: { tabs: Tab[] }) {
  return (
    <div className="relative">
      <div className="flex flex-row items-center justify-start relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full">
        {tabs.map((tab) => (
          <div key={tab.title} className="relative px-4 py-2 rounded-full">
            <span className="relative block">{tab.title}</span>
          </div>
        ))}
      </div>
      <div className="mt-32 relative">
        <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
}