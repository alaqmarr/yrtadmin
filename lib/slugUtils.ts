import { prisma } from "@/lib/db";

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

export async function generateUniqueSlug(
  model: "package" | "destinations" | "testimonial",
  name: string
): Promise<string> {
  let slug = slugify(name);
  let uniqueSlug = slug;
  let count = 1;

  while (true) {
    // @ts-ignore - dynamic model access
    const existing = await prisma[model].findUnique({
      where: { id: uniqueSlug },
    });

    if (!existing) {
      return uniqueSlug;
    }

    uniqueSlug = `${slug}-${count}`;
    count++;
  }
}
