import { posts, socialLinks } from "@/app/constants";
import Link from "next/link";
import { BiStar } from "react-icons/bi";
import { TbExternalLink } from "react-icons/tb";

const TopLinkedInPosts = () => {
  return (
    <section className="w-full px-4 py-16 bg-secondary">
      <div className="container-wrapper text-primary">
        <h2 className="section-title-sm">Top LinkedIn Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border border-gray-200 rounded-lg flex flex-col"
            >
              <div className="p-6">
                <div className="flex mb-4">
                  <div className="h-10 w-10 bg-tertiary text-white flex items-center justify-center rounded">
                    <BiStar className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-lg mb-6">{post.content}</p>
                </div>
                <div className="flex justify-between items-center ">
                  <Link
                    href={post.url}
                    className="custom-link group"
                    target="_blank"
                  >
                    Read on LinkedIn{" "}
                    <TbExternalLink className="h-4 w-4 group-hover:scale-150 transition-transform duration-500 ease-out" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4">
          <Link
            href={socialLinks[1].href}
            target="_blank"
            className="text-tertiary hover:underline font-semibold"
          >
            Explore More Posts &gt;&gt;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopLinkedInPosts;
