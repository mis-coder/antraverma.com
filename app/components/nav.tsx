import Link from "next/link";
import { metaData } from "../lib/config";
import { ThemeSwitch } from "./theme-switch";

const navItems = {};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-semibold">
            {metaData.title}
          </Link>
        </div>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
