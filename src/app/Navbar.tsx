/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  isMobile,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  isMobile?: boolean;
}) => {
  return (
    <div 
      onMouseEnter={() => !isMobile && setActive(item)} 
      onClick={() => isMobile && setActive(active === item ? null : item)}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:text-gray-300"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className={`${isMobile ? 'relative mt-4' : 'absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2'} pt-4`}>
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-gray-900 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

interface MenuChildProps {
  isMobile?: boolean;
  [key: string]: any;
}

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const [scrollingUp, setScrollingUp] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollingUp(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('main-nav');
      if (isMobileMenuOpen && nav && !nav.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      id="main-nav"
      onMouseLeave={() => !isMobile && setActive(null)}
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        scrollingUp ? "transform translate-y-0" : "transform -translate-y-full"
      } rounded-full border border-white/[0.2] bg-black shadow-lg`}
    >
      <div className="px-8 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/cb-logo.png" alt="Logo" width={100} height={80} />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {children}
        </div>

        <button
          className="md:hidden text-white hover:text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <MenuIcon size={24} />
        </button>
      </div>

      {isMobile && isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden px-8 py-4 bg-black border-t border-white/[0.2]"
        >
          <div className="flex flex-col space-y-4">
            {React.Children.map(children, child => {
              if (React.isValidElement<MenuChildProps>(child)) {
                return React.cloneElement(child, { isMobile: true });
              }
              return child;
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">
          {title}
        </h4>
        <p className="text-gray-300 text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

interface HoveredLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  [key: string]: any;
}

export const HoveredLink = ({ children, ...rest }: HoveredLinkProps) => {
  return (
    <Link
      {...rest}
      className="text-gray-300 hover:text-white"
    >
      {children}
    </Link>
  );
};