"use client";

import Image from "next/image";

import AboutImg from "@/app/assets/images/antra_about.jpeg";

const IntroSection = () => {
  return (
    <section className="w-full py-14 md:py-24 flex items-center justify-center">
      <div className="container-wrapper flex items-center justify-center md:justify-normal gap-8 md:gap-2 md:flex-row flex-col-reverse">
        <div className="flex-1 space-y-6">
          <p className=" w-full md:max-w-xl text-lg text-center italic md:text-left leading-8">
            “Hi, I’m Antra — a digital creator.{" "}
            <span className="text-tertiary">
              I think, code, and write to solve problems
            </span>{" "}
            for others.
            <br /> I’m a <span className="text-tertiary">
              curious learner
            </span>{" "}
            and love being{" "}
            <span className="text-tertiary">
              efficient in almost everything
            </span>{" "}
            I do.
            <br /> As a human,{" "}
            <span className="text-tertiary">
              I value kindness, empathy, and the pursuit of making the world a
              better place
            </span>
            . I love my family and always strive to integrate these values into
            both my personal and professional life.”
          </p>
        </div>

        <div className="relative w-80 h-80 md:w-96 md:h-96">
          <div className="absolute bottom-0 right-0 w-full h-full bg-tertiary rounded-lg transform translate-x-2 translate-y-2  md:translate-x-4 md:translate-y-4"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-lg overflow-hidden border-4 border-secondary bg-secondary">
            <Image
              src={AboutImg}
              alt="Antra profile"
              quality={80}
              className="w-full h-full object-cover object-center mix-blend-luminosity"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
