"use client";

import Image from "next/image";

import ProfileImg from "@/app/assets/images/website-about-pic-1.jpeg";
import { FaDownload } from "react-icons/fa6";

export default function HomePage() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "assets/Antra-Verma-Resume-2025.pdf";
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pt-5 pb-20 md:mt-20 2xl:mt-40 md:pb-0 w-full h-full">
      <div className="flex flex-col-reverse md:flex-row w-full h-full gap-10 md:gap-20 items-center justify-center">
        <div className="w-full">
          <h2 className="font-barlow text-4xl md:text-5xl">
            Hey it&apos;s Antra!
          </h2>
          <p className="mt-4 text-sm md:text-md">
            I am a Software Developer based in Mohali, India, currently working
            with Authenticate® as a Full Stack Developer. With a robust network
            of over 7K connections on LinkedIn, I am passionate about
            problem-solving and simplifying complex challenges.
            <br />
            <br /> I value kindness, empathy, and the pursuit of making the
            world a better place. I love my family and strive to integrate these
            values into both my professional and personal life.
            <br /> <br />I am open to work.
          </p>
          <button onClick={downloadResume} className="link-btn">
            <FaDownload size={20} /> Check My Resume Here
          </button>
        </div>
        <Image
          src={ProfileImg}
          quality={80}
          alt="my-picture"
          className="md:w-96 h-96 object-cover rounded-3xl"
          placeholder="blur"
        />
      </div>
    </section>
  );
}
