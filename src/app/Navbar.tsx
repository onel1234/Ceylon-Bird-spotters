/* eslint-disable @typescript-eslint/no-unused-vars */
// Navbar.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";

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
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  isMobile,
}: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
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
          backgroundColor: isHovered ? "#0f766e" : "transparent", // teal-700
          color: isHovered ? "white" : "black"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.p>{item}</motion.p>
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
  );
};

interface MenuProps {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}

export const Menu = ({ setActive, children }: MenuProps) => {
  const [scrollingUp, setScrollingUp] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

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

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        scrollingUp ? "transform translate-y-0" : "transform -translate-y-full"
      } border border-gray-200 bg-white shadow-lg`}
    >
      <div className="px-8 py-6 flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <Image src="/images/nabar.png" alt="Logo" width={120} height={120} />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {children}
        </div>

        <button
          className="md:hidden text-black hover:text-teal-700"
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
            {React.Children.map(children, child => {
              if (React.isValidElement<MenuItemProps>(child)) {
                return React.cloneElement(child, {
                  ...child.props,
                  isMobile: true
                });
              }
              return child;
            })}
          </div>
        </motion.div>
      )}
    </nav>
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
      <div>
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
  [key: string]: any;
}

export const HoveredLink = ({ children, ...rest }: HoveredLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link
      {...rest}
      className="text-gray-600 hover:text-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        animate={{
          color: isHovered ? "white" : "inherit"
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    </Link>
  );
};