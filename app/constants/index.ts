import { SocialLink } from "../lib/types";

import { DiGithubAlt } from "react-icons/di";
import { LiaLinkedin } from "react-icons/lia";

import Article from "../assets/icons/article.svg";
import Bot from "../assets/icons/bot.svg";
import HandShake from "../assets/icons/hand-shake.svg";
import Website from "../assets/icons/website.svg";

export const navItems = [
  {
    target: "",
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    target: "",
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

export const services = [
  {
    title: "AI-Powered Web Apps",
    description:
      "I integrate powerful AI capabilities—like OpenAI, Hugging Face, and Pinecone—into your app so it actually delivers results. From custom workflows to real-world deployment, I’ve got it covered.",
    icon: Bot,
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "I build end-to-end web applications that are not only beautiful and fast, but production-ready from day one. You get UI/UX design, scalable backend, secure APIs, and cloud deployment—all tailored to your needs.",
    icon: Website,
  },

  {
    title: "Technical Writing",
    description:
      "From developer docs to SEO-optimized blogs—I write content that connects with your audience and builds authority. Clear, useful writing that earns attention and trust.",
    icon: Article,
  },
  {
    title: "1:1 Consultation",
    description:
      "Need clarity, code review, or architecture help? Book a session. I help you unblock faster, avoid beginner traps, and make confident decisions.",
    icon: HandShake,
  },
];
