"use client";

import { navItems } from "@/app/constants";
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
    <div className="block md:hidden">
      <FaBarsStaggered size="20px" onClick={onOpen} />

      {isOpen && (
        <div className="fixed z-50 top-0 left-0 bg-secondary h-full w-full flex flex-col gap-10 items-center justify-center">
          <FaXmark
            size="30px"
            className="cursor-pointer absolute top-10 right-10"
            onClick={onClose}
          />
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li className={"text-primary-white py-5"} key={nanoid()}>
                  <a className="text-lg" href={item.url} target={item.target}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="bg-tertiary text-primary py-2 px-6 rounded-md w-1/2">
            Let's talk
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
