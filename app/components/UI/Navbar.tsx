import { navItems, onlineMeetUrl } from "@/app/constants";
import { nanoid } from "nanoid";
import Link from "next/link";
import { Button } from "./Button";

const Navbar = () => {
  return (
    <nav className="hidden md:flex gap-6 font-normal text-md items-center">
      <ul className="flex items-center justify-evenly w-fit gap-8">
        {navItems.map((item) => (
          <li key={nanoid()}>
            <a
              className="md:text-md lg:text-md"
              href={item.url}
              target={item.target}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="h-6 w-[1px] bg-primary" />
      <Button variant="primary">
        <Link href={onlineMeetUrl} target="_blank">
          Let's Talk
        </Link>
      </Button>
    </nav>
  );
};

export default Navbar;
