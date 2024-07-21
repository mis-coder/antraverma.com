"use client";

import { navItems } from "@/app/constants/static-data";
import { nanoid } from "nanoid";
import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="block md:hidden lg:hidden">
      <FaBarsStaggered
        size="20px"
        className="animate-grow cursor-pointer"
        onClick={onOpen}
      />

      {isOpen && (
        <div className="fixed z-2 top-0 left-0 bg-primary-black h-full w-full flex items-center justify-center">
          <FaXmark
            size="30px"
            className="animate-wiggle cursor-pointer absolute top-10 right-10"
            onClick={onClose}
          />
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li
                  className={`animate-underline-${index} text-primary-white py-5`}
                  key={nanoid()}
                >
                  <a className="text-lg" href={item.url} target={item.target}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
