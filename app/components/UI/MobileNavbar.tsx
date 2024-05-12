"use client";

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
      {isOpen ? (
        <FaXmark size="20px" onClick={onClose} />
      ) : (
        <FaBarsStaggered size="20px" onClick={onOpen} />
      )}
      {isOpen && (
        <nav className="absolute top-20 left-0 h-full w-full">
          <ul className="pl-8 h-1/2 flex flex-col gap-5 items-start text-sm">
            <li className="underline underline-offset-8">
              <a
                href="https://www.linkedin.com/in/antra-verma/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="underline underline-offset-8">
              <a href="/about" target="_blank">
                About Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileNavbar;
