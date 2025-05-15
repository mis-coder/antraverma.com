import { navItems } from "@/app/constants";
import { nanoid } from "nanoid";

const Navbar = () => {
  return (
    <nav className="hidden md:flex gap-6 font-normal text-sm items-center">
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
      <button className="bg-tertiary text-primary py-2 px-6 rounded-md">
        Let's talk
      </button>
    </nav>
  );
};

export default Navbar;
