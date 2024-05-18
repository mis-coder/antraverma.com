const Navbar = () => {
  return (
    <>
      <nav className="block">
        <ul className="flex items-center justify-evenly w-fit gap-10 font-normal">
          <li className="list-item--link">
            <a
              className="text-sm md:text-md lg:text-md"
              href="https://www.linkedin.com/in/antra-verma/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
