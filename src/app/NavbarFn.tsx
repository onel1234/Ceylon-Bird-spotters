"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./Navbar";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();
 
  const handleMenuClick = (path: string) => {
    
    setActiveItem(prevActive => prevActive === path ? null : path);
    router.push(path);
  };

  return (
    <Menu setActive={setActiveItem}>
      <MenuItem
        item="TOUR PACKAGES"
        active={activeItem}
        setActive={() => handleMenuClick("/tour-packages")}
        isMobile={false}
      />            
      <MenuItem
        item="CONTACT US"
        active={activeItem}
        setActive={() => handleMenuClick("/contact")}
        isMobile={false}
      />
      <MenuItem
        item="TEAM"
        active={activeItem}
        setActive={() => handleMenuClick("/team")}
        isMobile={false}
      />
      <MenuItem
        item="SRI LANKA"
        active={activeItem}
        setActive={() => handleMenuClick("/sri-lanka")}
        isMobile={false}
      />
      <MenuItem
        item="ABOUT US"
        active={activeItem}
        setActive={() => handleMenuClick("/about")}
        isMobile={false}
      />
      <MenuItem
        item="GALLERY"
        active={activeItem}
        setActive={() => handleMenuClick("/gallery")}
        isMobile={false}
      />
    </Menu>
  );
};

export default Navbar;