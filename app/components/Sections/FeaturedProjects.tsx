import { projects } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

const FeaturedProjects = () => {
  return (
    <section className="w-full px-4 pt-16 pb-8">
      <div className="container-wrapper">
        <h2 className="section-title-sm">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="border border-gray-300 rounded-xl overflow-hidden flex flex-col h-full px-4 pt-4 pb-6"
            >
              <div className="h-40">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-md md:text-lg mt-2">
                  {project.title}
                </h3>
                <p className="my-2 text-sm md:text-md">{project.description}</p>
              </div>
              <div className="flex items-center justify-between font-semibold text-sm text-tertiary mt-2">
                <Link
                  href={project.codeUrl}
                  target="_blank"
                  className="flex items-center gap-2 hover:underline group"
                >
                  View Code{" "}
                  <TbExternalLink className="h-4 w-4 group-hover:scale-150 transition-transform duration-500 ease-out" />
                </Link>

                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center gap-2 hover:underline group"
                >
                  Try it{" "}
                  <TbExternalLink className="h-4 w-4 group-hover:scale-150 transition-transform duration-500 ease-out" />
                </Link>
              </div>
            </article>
          ))}
          <div className="min-h-[318px] border-2 border-dashed border-gray-300 text-gray-400 rounded-xl flex items-center justify-center font-semibold">
            More coming soon!
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
