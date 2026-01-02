"use server";

import { prisma } from "@/lib/db";
import { parseText } from "@/lib/text-functions";
import { revalidatePath } from "next/cache";

export async function createBlogAction(payload: {
  title: string;
  html: string;
  author: string;
  thumbnail: string;
  categories?: string[];
  images?: string[];
}) {
  const id = parseText(payload.title);

  const safeImages = (payload.images ?? [])
    .filter(
      (url): url is string => typeof url === "string" && url.trim() !== ""
    )
    .map((url) => ({ url }));

  // Pre-fetch or create unique categories safely
  const categoryRecords = await Promise.all(
    (payload.categories ?? [])
      .map((c) => c.trim())
      .filter(Boolean)
      .map(async (name) => {
        const existing = await prisma.blogCategory.findUnique({
          where: { name },
        });
        return (
          existing ?? (await prisma.blogCategory.create({ data: { name } }))
        );
      })
  );

  return prisma.blogs.create({
    data: {
      id,
      title: payload.title,
      html: payload.html,
      author: payload.author,
      thumbnail: payload.thumbnail,
      images: safeImages.length ? { create: safeImages } : undefined,
      categories:
        categoryRecords.length > 0
          ? { connect: categoryRecords.map((c) => ({ id: c.id })) }
          : undefined,
    },
  });
}

export async function updateBlogAction(
  id: string,
  payload: {
    title?: string;
    html?: string;
    thumbnail?: string;
    author?: string;
    categories?: string[];
    images?: string[];
  }
) {
  return prisma.$transaction(async (tx) => {
    await tx.blogImages.deleteMany({ where: { blogId: id } });

    // Reset categories (disconnect all)
    await tx.blogs.update({
      where: { id },
      data: { categories: { set: [] } },
    });

    // Safe category linking
    const categoryRecords = await Promise.all(
      (payload.categories ?? [])
        .map((c) => c.trim())
        .filter(Boolean)
        .map(async (name) => {
          const existing = await tx.blogCategory.findUnique({
            where: { name },
          });
          return existing ?? (await tx.blogCategory.create({ data: { name } }));
        })
    );

    const safeImages = (payload.images ?? [])
      .filter(
        (url): url is string => typeof url === "string" && url.trim() !== ""
      )
      .map((url) => ({ url }));

    const updated = await tx.blogs.update({
      where: { id },
      data: {
        title: payload.title,
        html: payload.html,
        thumbnail: payload.thumbnail,
        author: payload.author,
        images: safeImages.length ? { create: safeImages } : undefined,
        categories:
          categoryRecords.length > 0
            ? { connect: categoryRecords.map((c) => ({ id: c.id })) }
            : undefined,
      },
    });

    return updated;
  });
}

export async function deleteBlogAction(id: string, force: boolean = false) {
  try {
    await prisma.blogs.delete({ where: { id } });
    revalidatePath("/blogs");
    return { success: true };
  } catch (error) {
    console.error("Delete Blog Error:", error);
    return { success: false, error: "Failed to delete blog" };
  }
}
