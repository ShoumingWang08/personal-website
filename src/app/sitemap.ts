import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const PER_PAGE = 6;

export default function sitemap(): MetadataRoute.Sitemap {
  const items: MetadataRoute.Sitemap = [];

  // Static pages
  items.push({ url: `${SITE_URL}/`, lastModified: new Date() });
  items.push({ url: `${SITE_URL}/blog`, lastModified: new Date() });

  // Posts
  const posts = getAllPosts({ includeDrafts: false });
  for (const p of posts) {
    items.push({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(p.frontmatter.date) });
  }

  // Pagination pages
  const totalPages = Math.max(1, Math.ceil(posts.length / PER_PAGE));
  for (let page = 2; page <= totalPages; page += 1) {
    items.push({ url: `${SITE_URL}/blog/page/${page}`, lastModified: new Date() });
  }

  return items;
}


