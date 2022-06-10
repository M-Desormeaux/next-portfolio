import fs from "fs";
import { join } from "path";

const blogDirectory = join(process.cwd(), "blog-posts");
export function getAllPostSlugs() {
  return fs.readdirSync(blogDirectory).map((s) => s.replace(".md", ""));
}

const thoughtDirectory = join(process.cwd(), "blog-posts");
export function getAllThoughtSlugs() {
  return fs.readdirSync(blogDirectory).map((s) => s.replace(".md", ""));
}
