import MobileNavbar from "./UI/MobileNavbar";
import Navbar from "./UI/Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-secondary text-primary">
      <div className="max-w-screen-xl mx-auto px-6 md:px-20">
        <div className="flex items-center justify-between py-6">
          <a
            href="/"
            className="font-playfair font-normal text-md md:text-lg tracking-wider"
          >
            Antra Verma
          </a>
          <>
            <Navbar />
            <MobileNavbar />
          </>
        </div>
      </div>
    </header>
  );
};

export default Header;
