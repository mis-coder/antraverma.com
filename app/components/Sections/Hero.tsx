"use client";

import Image from "next/image";
import Link from "next/link";

import ProfileImg from "@/app/assets/images/antra_home.jpeg";
import { Button } from "../UI/Button";
import { SocialLinks } from "../UI/SocialLinks";

const HeroSection = () => {
  return (
    <section className="w-full py-14 md:py-24 bg-secondary text-white flex items-center justify-center">
      <div className="container-wrapper flex items-center justify-center md:justify-normal flex-wrap-reverse gap-8 md:gap-2 sm:flex-wrap ">
        <div className="flex-1 space-y-6">
          <h1 className="font-playfair text-4xl text-center md:text-left md:text-5xl lg:text-6xl font-bold">
            Hey it's <span className="text-tertiary">Antra</span>!
          </h1>

          <p className="text-gray-300 w-full md:max-w-xl text-center md:text-left text-pretty">
            I’m a{" "}
            <span className="underline underline-offset-4 decoration-tertiary">
              Software Engineer
            </span>{" "}
            based in Punjab, India, with a strong focus on building reliable and
            high-performing{" "}
            <span className="underline underline-offset-4 decoration-tertiary">
              Web Applications
            </span>
            . My work revolves around turning ideas into functional,
            user-friendly digital experiences.
            <br />
            With a passion for solving problems, I enjoy breaking down complex
            challenges into simple, efficient solutions.
          </p>

          <p className="text-gray-300 w-full md:max-w-xl text-center md:text-left text-pretty">
            Beyond development, I also offer{" "}
            <span className="underline underline-offset-4 decoration-tertiary">
              technical writing
            </span>
            —translating complex concepts into clear, practical content.
          </p>

          <SocialLinks className="w-full items-center justify-center md:justify-normal" />

          <div className="flex gap-2 items-center justify-center md:justify-normal">
            <Button variant="secondary" className="flex-1 md:flex-initial">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <Button variant="primary" className="flex-1 md:flex-initial">
              <Link href="/contact">Work With Me</Link>
            </Button>
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <div className="absolute bottom-0 right-0 w-full h-full bg-tertiary rounded-full transform translate-x-4 translate-y-4"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-full overflow-hidden border-4 border-secondary bg-secondary">
            <Image
              src={ProfileImg}
              alt="Antra profile"
              quality={80}
              className="w-full h-full object-cover object-right-top mix-blend-luminosity"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
