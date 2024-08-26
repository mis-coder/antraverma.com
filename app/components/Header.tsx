import MobileNavbar from "./UI/MobileNavbar";
import Navbar from "./UI/Navbar";
import ToggleTheme from "./UI/ToggleTheme";

const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between">
      <a
        href="/"
        className="font-extrabold text-sm md:text-md lg:text-md tracking-wide"
      >
        Antra Verma
      </a>
      <Navbar />
      <MobileNavbar />
      <ToggleTheme turnDarkOn={true} />
    </header>
  );
};

export default Header;
