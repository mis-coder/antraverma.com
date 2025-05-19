import { articles } from "@/app/constants";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

const FeaturedArticles = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className="container-wrapper ">
        <h2 className="section-title-sm">Featured Articles</h2>
        <div className="space-y-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="border border-gray-200 rounded-lg p-6 shadow-sm bg-card"
            >
              <h3 className="text-md md:text-lg mb-2 font-semibold">
                {article.title}
              </h3>
              <p className="mb-4 text-sm md:text-md">{article.excerpt}</p>
              <Link
                href={article.url}
                target="_blank"
                className="flex items-center gap-2 hover:underline group text-tertiary font-semibold text-sm"
              >
                Read More{" "}
                <TbExternalLink className="h-4 w-4 group-hover:scale-150 transition-transform duration-500 ease-out" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
