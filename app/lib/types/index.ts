import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface SocialLink {
  target: string;
  href: string;
  icon: IconType;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
  codeUrl: string;
  liveUrl: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  url: string;
}

export interface LinkedInPost {
  id: number;
  content: string;
  url: string;
}
