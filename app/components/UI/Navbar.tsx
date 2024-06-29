import { navItems } from "@/app/constants/static-data";
import { nanoid } from "nanoid";

const Navbar = () => {
  return (
    <>
      <nav className="block">
        <ul className="flex items-center justify-evenly w-fit gap-10 font-normal">
          {navItems.map((item) => (
            <li key={nanoid()} className="list-item--link">
              <a
                className="text-sm md:text-md lg:text-md"
                href={item.url}
                target={item.target}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
