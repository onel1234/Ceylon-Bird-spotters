/* eslint-disable @typescript-eslint/no-unused-vars */
// Navbar.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

interface MenuItemProps {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  isMobile?: boolean;
  hasScrolled?: boolean;
  isLast?: boolean;
  isTransparentRoute?: boolean;
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  isMobile,
  hasScrolled,
  isLast,
  isTransparentRoute,
}: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex items-center">
      <div 
        onClick={() => setActive(active === item ? null : item)}
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="px-4 py-2 rounded-md relative"
          initial={false}
          animate={{
            color: isHovered 
              ? "#0f766e" // teal-700 text on hover
              : hasScrolled || !isTransparentRoute
                ? "black" 
                : isMobile 
                  ? "black" // Always black text for mobile items
                  : "white"
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.p className="font-bold font-poppins tracking-wide text-base">
            {item}
          </motion.p>
        </motion.div>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {active === item && (
              <div className={`${isMobile ? 'relative mt-4' : 'absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2'} pt-4`}>
                <motion.div
                  transition={transition}
                  layoutId="active"
                  className="bg-white backdrop-blur-sm overflow-hidden border border-gray-200 shadow-xl"
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
      {!isMobile && !isLast && (
        <div className={`h-6 w-px ${hasScrolled || !isTransparentRoute ? 'bg-gray-400' : 'bg-white bg-opacity-50'}`}></div>
      )}
    </div>
  );
};

interface MenuProps {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}

export const Menu = ({ setActive, children }: MenuProps) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  

  const isTransparentRoute = pathname === '/' || pathname === '/sri-lanka';

  useEffect(() => {
    
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
    document.head.appendChild(linkElement);
    
    return () => {
      document.head.removeChild(linkElement);
    };
  }, []);

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
      // Only check scroll on routes that should have transparent navbar
      if (isTransparentRoute) {
        // Check if page has scrolled more than 50px
        const scrolled = window.scrollY > 50;
        setHasScrolled(scrolled);
      } else {
        // For non-transparent routes, always set hasScrolled to true to keep solid background
        setHasScrolled(true);
      }
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparentRoute]);

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

  const handleLogoClick = () => {
    router.push('/');
  };

  // Add isLast prop to children
  const childrenWithProps = React.Children.toArray(children);
  const enhancedChildren = childrenWithProps.map((child, index) => {
    if (React.isValidElement<MenuItemProps>(child)) {
      return React.cloneElement(child, {
        ...child.props,
        hasScrolled,
        isLast: index === childrenWithProps.length - 1,
        isTransparentRoute
      });
    }
    return child;
  });

  return (
    <motion.nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-poppins ${
        hasScrolled || !isTransparentRoute
          ? "bg-white border border-gray-200 shadow-lg text-black" 
          : "bg-transparent text-white"
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="px-8 py-6 flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <Image src="/culture/navbar.png" alt="Logo" width={250} height={200} />
        </div>

        <div className="hidden md:flex items-center">
          {enhancedChildren}
        </div>

        <button
          className={`md:hidden hover:text-teal-700 ${hasScrolled || !isTransparentRoute ? 'text-black' : 'text-white'} font-bold`}
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
          className="md:hidden px-8 py-4 bg-white border-t border-gray-200"
        >
          <div className="flex flex-col space-y-4">
            {React.Children.map(children, (child, index) => {
              if (React.isValidElement<MenuItemProps>(child)) {
                return React.cloneElement(child, {
                  ...child.props,
                  isMobile: true,
                  hasScrolled: true, // Always pass hasScrolled as true for mobile menu items
                  isLast: index === childrenWithProps.length - 1,
                  isTransparentRoute
                });
              }
              return child;
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

interface ProductItemProps {
  title: string;
  description: string;
  href: string;
  src: string;
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: ProductItemProps) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={120}
        height={80}
        alt={title}
        className="flex-shrink-0 shadow-2xl"
      />
      <div className="font-poppins">
        <h4 className="text-xl font-bold mb-1 text-black">
          {title}
        </h4>
        <p className="text-gray-600 text-sm max-w-[10rem]">
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
  hasScrolled?: boolean;
  isTransparentRoute?: boolean;
  [key: string]: any;
}

export const HoveredLink = ({ children, hasScrolled, isTransparentRoute, ...rest }: HoveredLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link
      {...rest}
      className={`font-bold font-poppins ${hasScrolled || !isTransparentRoute ? "text-gray-600 hover:text-black" : "text-white hover:text-gray-200"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        animate={{
          color: isHovered ? (hasScrolled || !isTransparentRoute ? "black" : "white") : "inherit"
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    </Link>
  );
};