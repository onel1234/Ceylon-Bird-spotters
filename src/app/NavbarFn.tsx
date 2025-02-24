"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./Navbar";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();
 
  const handleMenuClick = (path: string) => {
    // Toggle the active state - if the same item is clicked, close it
    setActiveItem(prevActive => prevActive === path ? null : path);
    router.push(path);
  };

  return (
    <Menu setActive={setActiveItem}>
      <MenuItem
        item="Tour Packages"
        active={activeItem}
        setActive={() => handleMenuClick("/tour-packages")}
        isMobile={false}
      />            
      <MenuItem
        item="Contact Us"
        active={activeItem}
        setActive={() => handleMenuClick("/contact")}
        isMobile={false}
      />
      <MenuItem
        item="Team"
        active={activeItem}
        setActive={() => handleMenuClick("/team")}
        isMobile={false}
      />
      <MenuItem
        item="Sri Lanka"
        active={activeItem}
        setActive={() => handleMenuClick("/sri-lanka")}
        isMobile={false}
      />
      <MenuItem
        item="About Us"
        active={activeItem}
        setActive={() => handleMenuClick("/about")}
        isMobile={false}
      />
      <MenuItem
        item="Gallery"
        active={activeItem}
        setActive={() => handleMenuClick("/gallery")}
        isMobile={false}
      />
    </Menu>
  );
};

export default Navbar;