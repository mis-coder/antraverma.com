import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <>
      <div className="hidden md:flex lg:flex">
        <ul>
          <li>
            <a>LinkedIn</a>
          </li>
          <li>
            <a>About Me</a>
          </li>
        </ul>
      </div>
      <MobileNavbar />
    </>
  );
};

export default Navbar;
