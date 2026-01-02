"use server";

import { prisma } from "@/lib/db";
import { generateUniqueSlug } from "@/lib/slugUtils";
import { revalidatePath } from "next/cache";

type CreateDestinationInput = {
  name: string;
  tag?: string;
  title?: string;
  description?: string;
  image?: string;
  country?: string;
  visa?: string;
  languagesSpoken?: string;
  currency?: string;
  faqs?: { question: string; answer: string }[];
  places?: { name: string; description: string; image?: string }[];
};

export async function getDestinationsAction() {
  return await prisma.destinations.findMany({
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });
}

export async function createDestinationAction(data: CreateDestinationInput) {
  const id = await generateUniqueSlug("destinations", data.name);

  await prisma.destinations.create({
    data: {
      id,
      name: data.name,
      tag: data.tag,
      title: data.title,
      description: data.description || "No description available.",
      image: data.image,
      country: data.country || "Unknown",
      visa: data.visa,
      languagesSpoken: data.languagesSpoken,
      currency: data.currency,
      faqs: {
        create: data.faqs?.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        })),
      },
      places: {
        create: data.places?.map((place) => ({
          name: place.name,
          description: place.description,
          image: place.image,
        })),
      },
    },
  });

  revalidatePath("/destinations");
  return { success: true, id };
}

export async function updateDestinationAction(
  id: string,
  data: CreateDestinationInput
) {
  // Use transaction to update main record and replace relations
  await prisma.$transaction(async (tx) => {
    // 1. Update basic fields
    await tx.destinations.update({
      where: { id },
      data: {
        name: data.name,
        tag: data.tag,
        title: data.title,
        description: data.description,
        image: data.image,
        country: data.country,
        visa: data.visa,
        languagesSpoken: data.languagesSpoken,
        currency: data.currency,
      },
    });

    // 2. Refresh FAQs (Delete all, then create new)
    if (data.faqs) {
      await tx.destinationFAQ.deleteMany({ where: { destinationId: id } });
      if (data.faqs.length > 0) {
        await tx.destinationFAQ.createMany({
          data: data.faqs.map((f) => ({ ...f, destinationId: id })),
        });
      }
    }

    // 3. Refresh Places (Delete all, then create new)
    if (data.places) {
      await tx.places.deleteMany({ where: { destinationId: id } });
      if (data.places.length > 0) {
        await tx.places.createMany({
          data: data.places.map((p) => ({ ...p, destinationId: id })),
        });
      }
    }
  });

  revalidatePath("/destinations");
  revalidatePath(`/destinations/${id}/edit`);
  return { success: true };
}

export async function deleteDestinationAction(
  id: string,
  force: boolean = false
) {
  try {
    if (force) {
      // Force delete: Delete dependencies first, then the destination
      await prisma.$transaction(async (tx) => {
        // Delete related packages (which cascade to itineraries, etc.)
        await tx.package.deleteMany({ where: { destinationId: id } });
        // Delete related Places & FAQs (if not cascading in Schema, safe to do explicit)
        await tx.places.deleteMany({ where: { destinationId: id } });
        await tx.destinationFAQ.deleteMany({ where: { destinationId: id } });

        // Finally delete destination
        await tx.destinations.delete({ where: { id } });
      });

      revalidatePath("/destinations");
      return { success: true };
    }

    // Normal delete attempt
    await prisma.destinations.delete({ where: { id } });
    revalidatePath("/destinations");
    return { success: true };
  } catch (error: any) {
    // Check for Foreign Key Constraint Violation (Prisma P2003)
    if (error.code === "P2003") {
      // Find what is blocking deletion
      // We mainly care about Packages as they are the primary blocking entity
      const packages = await prisma.package.findMany({
        where: { destinationId: id },
        select: { name: true },
      });

      if (packages.length > 0) {
        return {
          success: false,
          error: "DependencyError",
          dependencies: packages.map((p) => `Package: ${p.name}`),
        };
      }
    }

    console.error("Delete Destination Error:", error);
    return { success: false, error: "Failed to delete destination" };
  }
}
