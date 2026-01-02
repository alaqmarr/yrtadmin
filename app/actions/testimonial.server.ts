"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { generateUniqueSlug } from "@/lib/slugUtils";

export type TestimonialInput = {
  image?: string;
  rating: number;
  description: string;
  author: string;
  role: string;
};

export async function getTestimonialsAction() {
  return await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getTestimonialAction(id: string) {
  return await prisma.testimonial.findUnique({
    where: { id },
  });
}

export async function createTestimonialAction(data: TestimonialInput) {
  const id = await generateUniqueSlug("testimonial", data.author);

  await prisma.testimonial.create({
    data: {
      id,
      image: data.image,
      rating: data.rating,
      description: data.description,
      author: data.author,
      role: data.role,
    },
  });

  revalidatePath("/testimonials");
  return { success: true, id };
}

export async function updateTestimonialAction(
  id: string,
  data: TestimonialInput
) {
  await prisma.testimonial.update({
    where: { id },
    data: {
      image: data.image,
      rating: data.rating,
      description: data.description,
      author: data.author,
      role: data.role,
    },
  });

  revalidatePath("/testimonials");
  revalidatePath(`/testimonials/${id}/edit`);
  return { success: true };
}

export async function deleteTestimonialAction(id: string) {
  await prisma.testimonial.delete({
    where: { id },
  });
  revalidatePath("/testimonials");
  return { success: true };
}
