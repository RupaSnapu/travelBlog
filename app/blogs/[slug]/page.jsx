import { notFound } from "next/navigation";
import { blogs } from "../../../lib/blogData";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 text-lg">{blog.content}</p>
    </article>
  );
}
