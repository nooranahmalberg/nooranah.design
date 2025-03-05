import slugify from "slugify";

export function slugifyNote(fileName: string) {
  return slugify(fileName.replace(".md", ""), { lower: true });
}
