"use client";

import { navItems, onlineMeetUrl } from "@/app/constants";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Button } from "./Button";

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
      <FaBarsStaggered size="30px" onClick={onOpen} />

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
                <li
                  className={"text-primary-white text-lg py-5 text-center"}
                  key={nanoid()}
                >
                  <a className="text-lg" href={item.url} target={item.target}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button variant="primary">
            <Link href={onlineMeetUrl} target="_blank">
              Let&apos;s Talk
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
