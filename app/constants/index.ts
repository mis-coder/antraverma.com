import { SocialLink } from "../lib/types";

import { DiGithubAlt } from "react-icons/di";
import { LiaLinkedin } from "react-icons/lia";

export const navItems = [
  {
    target: "_blank",
    title: "Projects",
    url: "/projects",
  },
  {
    target: "_blank",
    title: "About",
    url: "/about",
  },
];

export const socialLinks: SocialLink[] = [
  {
    target: "_blank",
    label: "Github",
    href: "https://github.com/mis-coder",
    icon: DiGithubAlt,
  },
  {
    target: "_blank",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/antra-verma/",
    icon: LiaLinkedin,
  },
];
