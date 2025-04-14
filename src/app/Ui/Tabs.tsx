"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
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
}) => {
  const searchParams = useSearchParams();
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Get the tab from the URL query parameter
  useEffect(() => {
    if (!isInitialized && searchParams) {
      const tabParam = searchParams.get('tab');
      if (tabParam) {
        const selectedTab = propTabs.find(t => t.value === tabParam);
        if (selectedTab) {
          setActive(selectedTab);
        }
      }
      setIsInitialized(true);
    }
  }, [searchParams, propTabs, isInitialized]);

  const moveSelectedTabToTop = (idx: number) => {
    const selectedTab = propTabs[idx];
    setActive(selectedTab);
    
    // We don't update the URL here since we're using Next.js Link component in the HeroSection
  };

  return (
    <div className="relative">
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => {
              setIsHovering(true);
              setHoveredTab(tab.value);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setHoveredTab(null);
            }}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="selected-tab-indicator"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-teal-700 dark:bg-teal-700 rounded-full",
                  activeTabClassName
                )}
              />
            )}
            {hoveredTab === tab.value && active.value !== tab.value && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-teal-700/10 dark:bg-teal-700/20 rounded-full"
                transition={{ duration: 0.3 }}
              />
            )}
            <span 
              className={cn(
                "relative block",
                active.value === tab.value 
                  ? "text-white dark:text-white" 
                  : "text-black dark:text-white"
              )}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <div className={cn("mt-32 relative", contentClassName)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.value}
            initial={{ opacity: 0, y: 20, scale: isHovering ? 1.02 : 1 }}
            animate={{ opacity: 1, y: 0, scale: isHovering ? 1.02 : 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {active.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};