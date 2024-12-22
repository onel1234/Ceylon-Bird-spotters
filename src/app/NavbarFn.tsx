"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./Navbar";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();
 
  const handleMenuClick = (path: string) => {
    setActiveItem(path);
    router.push(path);
  };

  return (
    <Menu setActive={setActiveItem}>
      <MenuItem
        item="Home"
        active={activeItem}
        setActive={() => handleMenuClick("/")}
      />
      <MenuItem
        item="Tour Packages"
        active={activeItem}
        setActive={() => handleMenuClick("/tour-packages")}
      />            
      <MenuItem
        item="Contact Us"
        active={activeItem}
        setActive={() => handleMenuClick("/contact")}
      />
      <MenuItem
        item="Team"
        active={activeItem}
        setActive={() => handleMenuClick("/team")}
      />
      <MenuItem
        item="About Us"
        active={activeItem}
        setActive={() => handleMenuClick("/about")}
      />
      <MenuItem
        item="Gallery"
        active={activeItem}
        setActive={() => handleMenuClick("/gallery")}
      />
    </Menu>
  );
};

export default Navbar;