import FeaturedArticles from "@/app/components/Sections/FeaturedArticles";
import FeaturedProjects from "@/app/components/Sections/FeaturedProjects";
import TopLinkedInPosts from "@/app/components/Sections/TopLinkedInPosts";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen w-full">
      <FeaturedProjects />
      <TopLinkedInPosts />
      <FeaturedArticles />
    </div>
  );
}
