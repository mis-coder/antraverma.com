import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
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
          I am a Software Engineer with a strong passion for solving problems
          and building things.
        </p>

        <p>
          I work as a Full Stack Developer at Particle Ex and run{" "}
          <a href="https://acceliyo.com/" target="_blank">
            Acceliyo
          </a>
          .&nbsp;An agency that helps businesses automate their workflows and
          improve their efficiency.
        </p>
        <p>Core skills: Web Development, AI, Automation, Writing.</p>
        <p>
          Tools: TypeScript, Next.js, Node.js, ChatGPT, n8n, Make.com, Notion,
          Google Sheets.
        </p>
        <p>Always open to interesting conversations—connect with me anytime.</p>
      </div>
    </section>
  );
}
