import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full h-fit text-primary bg-secondary">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center py-10 px-6 md:px-20 gap-4">
        <div className="flex gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target={link.target}
              className="opacity-85 hover:opacity-55 transition-all duration-300"
            >
              <link.icon className="w-10 h-10" />
            </a>
          ))}
        </div>
        <p className="text-sm"> All rights reserved © Antra Verma 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
