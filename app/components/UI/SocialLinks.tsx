import { socialLinks } from "@/app/constants";
import React from "react";

interface SocialLinksProps {
  className?: string;
}
export const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  const baseStyles = "flex space-x-3 pt-2";
  const styles = `${baseStyles}${className ?? ""}`;

  return (
    <div className={styles}>
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.target}
          rel="noopener noreferrer"
          aria-label={link.label}
          className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
        >
          {<link.icon className="h-8 w-8" />}
        </a>
      ))}
    </div>
  );
};
