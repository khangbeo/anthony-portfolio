import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export function getPostSlugs() {
    return fs
        .readdirSync(blogsDirectory)
        .filter((name) => name.endsWith(".md"))
        .map((name) => name.replace(/\.md$/, ""));
}

export function getPostBySlug(slug) {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
        slug: data.slug || slug,
        title: data.title || slug,
        date: data.date ? String(data.date) : "",
        contentHtml: marked.parse(content),
    };
}

export function getAllPosts() {
    return getPostSlugs()
        .map((slug) => getPostBySlug(slug))
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}
