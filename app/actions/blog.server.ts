"use server";

import { prisma } from "@/lib/db";
import { parseText } from "@/lib/text-functions";

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

  const safeCategories = (payload.categories ?? [])
    .map((c) => c.trim())
    .filter(Boolean)
    .map((name) => ({
      where: { name },
      create: { name },
    }));

  return prisma.blogs.create({
    data: {
      id,
      title: payload.title,
      html: payload.html,
      author: payload.author,
      thumbnail: payload.thumbnail,
      images: safeImages.length ? { create: safeImages } : undefined,
      categories: safeCategories.length
        ? { connectOrCreate: safeCategories }
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
    // Remove existing images
    await tx.blogImages.deleteMany({ where: { blogId: id } });

    // Detach all existing categories (pivot table cleanup)
    await tx.blogs.update({
      where: { id },
      data: { categories: { set: [] } },
    });

    const safeImages = (payload.images ?? [])
      .filter(
        (url): url is string => typeof url === "string" && url.trim() !== ""
      )
      .map((url) => ({ url }));

    const safeCategories = (payload.categories ?? [])
      .map((c) => c.trim())
      .filter(Boolean)
      .map((name) => ({
        where: { name },
        create: { name },
      }));

    const updated = await tx.blogs.update({
      where: { id },
      data: {
        title: payload.title,
        html: payload.html,
        thumbnail: payload.thumbnail, // ✅ scalar update works fine now
        author: payload.author,
        images: safeImages.length ? { create: safeImages } : undefined,
        categories: safeCategories.length
          ? { connectOrCreate: safeCategories }
          : undefined,
      },
    });

    return updated;
  });
}

export async function deleteBlogAction(id: string) {
  return prisma.blogs.delete({ where: { id } });
}
