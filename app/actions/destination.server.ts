// app/actions/destination.server.ts
"use server";
import { prisma } from "@/lib/db";

type FAQInput = { question: string; answer: string };

export async function createDestinationAction(payload: {
  name: string;
  tag?: string;
  title?: string;
  description?: string;
  image?: string; // cloudinary url from client upload
  country?: string;
  visa?: string;
  languagesSpoken?: string;
  currency?: string;
  faqs?: FAQInput[];
}) {
  try {
    const created = await prisma.destinations.create({
      data: {
        name: payload.name,
        tag: payload.tag ?? null,
        title: payload.title ?? "",
        description: payload.description ?? "",
        image: payload.image ?? "",
        country: payload.country ?? "",
        visa: payload.visa ?? null,
        languagesSpoken: payload.languagesSpoken ?? null,
        currency: payload.currency ?? null,
        faqs: {
          create: (payload.faqs || []).map((f) => ({
            question: f.question,
            answer: f.answer,
          })),
        },
      },
      include: { faqs: true },
    });
    return { status: "success", destination: created };
  } catch (error) {
    console.error("Failed to create destination:", error);
    return { status: "error", message: "Failed to create destination", error };
  }
}

export async function updateDestinationAction(
  id: string,
  payload: {
    name?: string;
    tag?: string;
    title?: string;
    description?: string;
    image?: string;
    country?: string;
    visa?: string;
    languagesSpoken?: string;
    currency?: string;
    faqs?: FAQInput[];
  }
) {
  try {
    const updated = await prisma.destinations.update({
      where: { id },
      data: {
        name: payload.name,
        tag: payload.tag,
        title: payload.title,
        description: payload.description,
        image: payload.image,
        country: payload.country,
        visa: payload.visa,
        languagesSpoken: payload.languagesSpoken,
        currency: payload.currency,
        faqs: {
          deleteMany: {},
          create: (payload.faqs || []).map((f) => ({
            question: f.question,
            answer: f.answer,
          })),
        },
      },
      include: { faqs: true },
    });

    return { status: "success", destination: updated };
  } catch (error) {
    console.error("Failed to update destination:", error);
    return { status: "error", message: "Failed to update destination", error };
  }
}
