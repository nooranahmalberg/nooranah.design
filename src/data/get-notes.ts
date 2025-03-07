import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { execSync } from "child_process";
import { slugifyNote } from "./slugify-note";

export type Note = {
  title: string;
  slug: string;
  content: string;
  category?: string;
};

export function getAllNotes(): Note[] {
  const repoRoot = execSync("git rev-parse --show-toplevel").toString().trim();
  const notesDir = path.join(repoRoot, "_notes");
  const allFiles = fs.readdirSync(notesDir);
  const markdownFiles = allFiles.filter((file) => path.extname(file) === ".md");

  const notes = markdownFiles.map((fileName) => {
    const filePath = path.join(notesDir, fileName);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const title = data.title as string;
    return {
      title,
      slug: slugifyNote(fileName),
      content,
      category: data.category || "Uncategorized",
    };
  });

  return notes;
}
