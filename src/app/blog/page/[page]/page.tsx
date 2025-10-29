import Link from "next/link";
import { getPaginatedPosts, getAllPosts } from "@/lib/posts";

const PER_PAGE = 6;

export const dynamic = "error"; // fully static

export function generateStaticParams() {
  const total = getAllPosts({ includeDrafts: process.env.NODE_ENV !== "production" }).length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export default function BlogPaged({ params }: { params: { page: string } }) {
  const pageNum = Number(params.page) || 1;
  const { posts, totalPages, current } = getPaginatedPosts(pageNum, PER_PAGE, {
    includeDrafts: process.env.NODE_ENV !== "production",
  });

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight">Blog</h1>
      <div className="grid gap-4">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${p.slug}`} className="text-white hover:underline">
                {p.frontmatter.title}
              </Link>
            </h2>
            <p className="mt-1 text-sm text-slate-300">
              {new Date(p.frontmatter.date).toLocaleDateString()} • {p.readingTimeMinutes} min read
            </p>
            <p className="mt-3 text-slate-200">{p.frontmatter.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        {current > 1 ? (
          <Link
            href={current === 2 ? "/blog" : `/blog/page/${current - 1}`}
            className="rounded-md bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
          >
            ← Prev
          </Link>
        ) : (
          <span />
        )}

        <span className="text-slate-300">
          Page {current} of {totalPages}
        </span>

        {current < totalPages ? (
          <Link
            href={`/blog/page/${current + 1}`}
            className="rounded-md bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
          >
            Next →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </main>
  );
}


