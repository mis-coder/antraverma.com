import Navbar from "./UI/Navbar";

const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between px-8 md:px-16 lg:px-16">
      <a
        href="/"
        className="font-extrabold text-sm md:text-md lg:text-md tracking-wide"
      >
        Antra Verma
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
