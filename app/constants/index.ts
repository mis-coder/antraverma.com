import {
  Article as IArticle,
  LinkedInPost,
  Project,
  SocialLink,
} from "../lib/types";

import { DiGithubAlt } from "react-icons/di";
import { LiaLinkedin } from "react-icons/lia";

import Article from "../assets/icons/article.svg";
import Bot from "../assets/icons/bot.svg";
import HandShake from "../assets/icons/hand-shake.svg";
import Website from "../assets/icons/website.svg";

import AIUtilsPreview from "../assets/images/project_ai_utils.png";
import PassGeneratorPreview from "../assets/images/project_pass_generator.png";

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
    title: "Consultation",
    description:
      "Need clarity, code review, or architecture help? Book a session. I help you unblock faster, avoid beginner traps, and make confident decisions.",
    icon: HandShake,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Password Generator Extension",
    description:
      "A Chrome extension that generates secure, random passwords with a single click, enhancing online security for users.",
    image: PassGeneratorPreview,
    codeUrl: "https://github.com/mis-coder/your-password-generator",
    liveUrl:
      "https://chromewebstore.google.com/detail/your-password-generator/doopdpchdifggpnaghkckgogbolkaamj?utm_source=ext_app_menu",
  },
  {
    id: 2,
    title: "Ai Utils",
    description:
      "A collection of different AI Apps. Each app is a unique use case of Gen AI.",
    image: AIUtilsPreview,
    codeUrl: "https://github.com/mis-coder/ai-utils",
    liveUrl: "https://ai-utils-eight.vercel.app/",
  },
];

export const articles: IArticle[] = [
  {
    id: 1,
    title: "Must-have Chrome extensions for WCAG Testing",
    excerpt:
      "This guide explains how developers and testers can use WCAG Chrome extensions to identify accessibility issues. It highlights key tools, outlines installation steps, and discusses how these extensions help in aligning web content with WCAG standards for an inclusive user experience.",
    url: "https://www.browserstack.com/guide/wcag-chrome-extension",
  },
  {
    id: 2,
    title: "Browser Compatibility of Cursor Grab & Grabbing in CSS",
    excerpt:
      "This article covers the browser support and quirks of using cursor: grab and grabbing in CSS. It explains how different browsers interpret these values and how developers can test cross-browser compatibility to ensure a consistent drag-and-drop experience.",
    url: "https://www.browserstack.com/guide/browser-compatibility-of-cursor-grab-grabbing-in-css",
  },
  {
    id: 3,
    title: "Cookie Testing in Software Testing",
    excerpt:
      "The article explores the role of cookies in web testing, including session handling, user tracking, and personalization. It outlines how testers can inspect, manipulate, and validate cookie behavior to ensure secure and reliable web applications.",
    url: "https://www.browserstack.com/guide/cookies-in-software-testing",
  },
  {
    id: 4,
    title: "Unit Testing of React Apps using JEST : Tutorial",
    excerpt:
      "This guide provides a hands-on overview of writing unit tests for React applications using Jest. It introduces core Jest features, explains how to mock functions, and emphasizes test-driven development for robust and maintainable React components.",
    url: "https://www.browserstack.com/guide/unit-testing-of-react-apps-using-jest",
  },
  {
    id: 5,
    title: "Coding Standards and Best Practices to Follow",
    excerpt:
      "Learn the importance of consistent coding standards and how they enhance code readability, maintainability, and collaboration. This article outlines common best practices across languages and tools to help teams build clean, scalable codebases.",
    url: "https://www.browserstack.com/guide/coding-standards-best-practices",
  },
];

export const posts: LinkedInPost[] = [
  {
    id: 1,
    content: '"Debugging is an art. Lets talk about how to do it well..."',
    url: "https://www.linkedin.com/posts/antra-verma_debugging-is-an-art-lets-talk-about-how-activity-7190758738318798848-jSpg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2DK_4BrB0YljomvOdM0fGVUat2ryc5YoY",
  },
  {
    id: 2,
    content:
      '"#1 Tip for front-end developers! If you are using React JS, and adding animations..."',
    url: "https://www.linkedin.com/posts/antra-verma_webdevelopment-frontend-activity-7186747820991823872-na-r?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2DK_4BrB0YljomvOdM0fGVUat2ryc5YoY",
  },

  {
    id: 3,
    content:
      '"Each second counts when the user visits your web app. Imagine a physical store where..."',
    url: "https://www.linkedin.com/posts/antra-verma_each-second-counts-when-the-user-visits-your-activity-7181705967481360385-E07Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2DK_4BrB0YljomvOdM0fGVUat2ryc5YoY",
  },
];
