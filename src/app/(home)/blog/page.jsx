import { getAllBlogs, getFeaturedBlog } from "@/data/blogs";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Blog & Insights | FiPi Creatives",
  description:
    "Expert insights on digital marketing, branding, SEO, social media, and web design from the FiPi Creatives team.",
};

export default function BlogPage() {
  const blogs = getAllBlogs();
  const featured = getFeaturedBlog();

  return (
    <>
      <BlogHero featured={featured} />
      <BlogGrid blogs={blogs} />
    </>
  );
}
