import { SocialLinks } from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full h-fit text-primary bg-secondary">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center py-10 px-6 md:px-20 gap-4">
        <SocialLinks />
        <p className="text-sm"> All rights reserved © Antra Verma 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
