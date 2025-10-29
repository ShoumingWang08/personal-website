import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/posts";

export const dynamic = "error"; // fully static

export function generateStaticParams() {
  const posts = getAllPosts({ includeDrafts: process.env.NODE_ENV !== "production" });
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || (post.frontmatter.draft && process.env.NODE_ENV === "production")) {
    notFound();
  }

  const html = await markdownToHtml(post.content);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-white">{post.frontmatter.title}</h1>
        <p className="mt-2 text-sm text-slate-300">
          {new Date(post.frontmatter.date).toLocaleDateString()} • {post.readingTimeMinutes} min read
        </p>
      </header>

      <article className="markdown max-w-none rounded-xl bg-white p-6 text-black">
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}


