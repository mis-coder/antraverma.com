import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section className="mb-18">
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Hey it's Antra👋</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I help businesses streamline their operations and scale faster using AI Automation @   <a href="https://acceliyo.com/" target="_blank">
            Acceliyo
          </a>.
        </p>

        <p>I love creating an impact through my work and making a real difference in people&apos;s lives. </p> 
        <p>In my free time, I enjoy sketching, writing, and traveling. Human behavior fascinates me, and I&apos;m always up for a good conversation.</p>
      </div>
    </section>
  );
}
