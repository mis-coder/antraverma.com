import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <>
      <nav className="hidden md:block lg:block">
        <ul className="flex items-center justify-evenly w-fit gap-10 font-normal text-lg">
          <li className="list-item--link">
            <a href="https://www.linkedin.com/in/antra-verma/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li className="list-item--link">
            <a href="/about" target="_blank">
              About Me
            </a>
          </li>
        </ul>
      </nav>
      <MobileNavbar />
    </>
  );
};

export default Navbar;
