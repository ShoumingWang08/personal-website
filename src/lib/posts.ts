import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostFrontmatter = {
  title: string;
  date: string; // ISO or yyyy-mm-dd
  description: string;
  draft?: boolean;
};

export type Post = {
  slug: string;
  content: string;
  frontmatter: PostFrontmatter;
  readingTimeMinutes: number;
};

const POSTS_DIR = path.join(process.cwd(), "posts");

export function listPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const file = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(file);
  const fm = data as PostFrontmatter;
  return {
    slug,
    content,
    frontmatter: fm,
    readingTimeMinutes: computeReadingTimeMinutes(content),
  };
}

export function getAllPosts({ includeDrafts = false }: { includeDrafts?: boolean } = {}): Post[] {
  const slugs = listPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => Boolean(p));
  const filtered = includeDrafts
    ? posts
    : posts.filter((p) => !p.frontmatter.draft);
  return filtered.sort((a, b) => {
    const ad = new Date(a.frontmatter.date).getTime();
    const bd = new Date(b.frontmatter.date).getTime();
    return bd - ad;
  });
}

export function getPaginatedPosts(page: number, perPage: number, opts?: { includeDrafts?: boolean }) {
  const posts = getAllPosts(opts);
  const total = posts.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * perPage;
  const end = start + perPage;
  return {
    posts: posts.slice(start, end),
    total,
    totalPages,
    current,
  };
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const processed = await remark().use(html).process(markdown);
  return processed.toString();
}

function computeReadingTimeMinutes(text: string): number {
  // Roughly 200 words per minute
  const words = (text.trim().match(/\S+/g) || []).length;
  const minutes = Math.ceil(words / 200);
  return Math.max(1, minutes);
}


