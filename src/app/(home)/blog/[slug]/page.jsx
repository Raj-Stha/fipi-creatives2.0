import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogs, getRelatedBlogs } from "@/data/blogs";
import BlogDetailPage from "@/components/blog/BlogDetailPage";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return { title: "Article Not Found" };
  return {
    title: `${blog.title} | FiPi Creatives Blog`,
    description: blog.excerpt,
  };
}

export default async function SingleBlogPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const related = getRelatedBlogs(blog.slug, blog.category, 3);

  return <BlogDetailPage blog={blog} related={related} />;
}
