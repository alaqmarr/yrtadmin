"use server";

import { prisma } from "@/lib/db";
import { Prisma } from "@/app/prisma/client";
import { revalidatePath } from "next/cache";
import { generateUniqueSlug } from "@/lib/slugUtils";

// Types
type DayItineraryInput = {
  dayNumber: number;
  title: string;
  description: string;
  features: { item: string }[];
};

type CreatePackageInput = {
  name: string;
  days: number;
  nights: number;
  price: number;
  type: string;
  location: string;
  destinationId?: string;
  about?: string;
  image: string;
  inclusions: { item: string }[];
  exclusions: { item: string }[];
  itineraries: DayItineraryInput[];
};

type UpdatePackageInput = CreatePackageInput & {
  id: string;
};

export async function createPackageAction(data: CreatePackageInput) {
  const id = await generateUniqueSlug("package", data.name);

  await prisma.package.create({
    data: {
      id,
      name: data.name,
      about: data.about,
      days: data.days,
      nights: data.nights,
      price: new Prisma.Decimal(data.price),
      type: data.type,
      location: data.location,
      destinationId: data.destinationId || null,
      image: data.image,
      inclusions: {
        create: data.inclusions.map((inc) => ({ item: inc.item })),
      },
      exclusions: {
        create: data.exclusions.map((exc) => ({ item: exc.item })),
      },
      itineraries: {
        create: data.itineraries.map((it) => ({
          dayNumber: it.dayNumber,
          title: it.title,
          description: it.description,
          features: {
            create: it.features.map((f) => ({ item: f.item })),
          },
        })),
      },
    },
  });

  revalidatePath("/packages");
  return { success: true, id };
}

export async function updatePackageAction(data: UpdatePackageInput) {
  // 1. Delete existing relations
  await prisma.includedItems.deleteMany({ where: { packageId: data.id } });
  await prisma.excludedItems.deleteMany({ where: { packageId: data.id } });
  await prisma.dayItinerary.deleteMany({ where: { packageId: data.id } });

  // 2. Update Package and recreate children
  await prisma.package.update({
    where: { id: data.id },
    data: {
      name: data.name,
      about: data.about,
      days: data.days,
      nights: data.nights,
      price: new Prisma.Decimal(data.price),
      type: data.type,
      location: data.location,
      destinationId: data.destinationId || null,
      image: data.image,
      inclusions: {
        create: data.inclusions.map((inc) => ({ item: inc.item })),
      },
      exclusions: {
        create: data.exclusions.map((exc) => ({ item: exc.item })),
      },
      itineraries: {
        create: data.itineraries.map((it) => ({
          dayNumber: it.dayNumber,
          title: it.title,
          description: it.description,
          features: {
            create: it.features.map((f) => ({ item: f.item })),
          },
        })),
      },
    },
  });

  revalidatePath("/packages");
  revalidatePath(`/packages/${data.id}`); // Using ID (slug)
  revalidatePath(`/packages/${data.id}/edit`);
  return { success: true };
}

export async function getPackageAction(id: string) {
  const pkg = await prisma.package.findUnique({
    where: { id },
    include: {
      inclusions: true,
      exclusions: true,
      itineraries: {
        orderBy: { dayNumber: "asc" },
        include: {
          features: true,
        },
      },
      destination: true,
    },
  });
  return pkg;
}

export async function deletePackageAction(id: string, force: boolean = false) {
  try {
    // 1. Check for Bookings if not forced
    if (!force) {
      const bookings = await prisma.bookings.findMany({
        where: { packageId: id },
        select: { customerName: true, id: true },
      });

      if (bookings.length > 0) {
        return {
          success: false,
          error: "DependencyError",
          dependencies: bookings.map(
            (b) => `Booking: ${b.customerName} (${b.id})`
          ),
        };
      }
    }

    // 2. Proceed with delete
    // Note: Schema has Cascade on Bookings, Inclusions, Itineraries
    // So simple delete is enough, but we can do transaction for safety if Schema changes
    // But explicit validation above handles the "safety check" requirement.

    // We can just call delete, Prisma Cascade handles children
    await prisma.package.delete({ where: { id } });

    revalidatePath("/packages");
    return { success: true };
  } catch (error) {
    console.error("Delete Package Error:", error);
    return { success: false, error: "Failed to delete package" };
  }
}
