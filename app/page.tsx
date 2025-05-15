"use client";

import Link from "next/link";
import { DiGithubAlt } from "react-icons/di";
import { LiaLinkedin } from "react-icons/lia";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full font-workSans">
      <section className="w-full py-16 bg-secondary text-white flex items-center justify-center">
        <div className="w-full max-w-screen-xl flex px-6 md:px-20">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hey it's Antra
            </h1>
            <p className="text-gray-300 max-w-xl">
              I am a Software Developer based in Mohali, India, currently
              working with Authenticate® as a Full Stack Developer. With a
              robust network of over 7K connections on LinkedIn, I am passionate
              about problem-solving and simplifying complex challenges.
            </p>
            <p className="text-gray-300 max-w-xl">
              I value kindness, empathy, and the pursuit of making the world a
              better place. I love my family and strive to integrate these
              values into both my professional and personal life.
            </p>

            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <DiGithubAlt className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <LiaLinkedin className="h-5 w-5" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="text-white border-white hover:bg-white hover:text-[#07030e]">
                <Link href="/portfolio">View Portfolio</Link>
              </button>
              <button className="bg-[#7bb303] hover:bg-[#689702] text-white border-none">
                <Link href="/contact">Hire Me</Link>
              </button>
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute bottom-0 right-0 w-full h-full bg-[#7bb303] rounded-full transform translate-x-4 translate-y-4"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-full overflow-hidden border-4 border-[#07030e]">
              <img
                src="/placeholder.svg"
                alt="Antra profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
