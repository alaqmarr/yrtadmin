"use server";

import { prisma } from "@/lib/db";
import { Prisma } from "@/app/prisma/client";

type Inclusion = { item: string };
type Exclusion = { item: string };
type Feature = { item: string };
type Itinerary = {
  dayNumber: number;
  title: string;
  description: string;
  features: Feature[];
};

export async function createPackageAction(payload: {
  name: string;
  days: number;
  nights: number;
  price: number;
  type?: string;
  location?: string;
  image?: string;
  inclusions?: Inclusion[];
  exclusions?: Exclusion[];
  itineraries?: Itinerary[];
}) {
  return await prisma.$transaction(
    async (tx) => {
      const pkg = await tx.package.create({
        data: {
          name: payload.name,
          days: payload.days,
          nights: payload.nights,
          image: payload.image,
          price: new Prisma.Decimal(payload.price ?? 0),
          type: payload.type,
          location: payload.location,
          inclusions: {
            create: payload.inclusions?.map((i) => ({ item: i.item })) ?? [],
          },
          exclusions: {
            create: payload.exclusions?.map((e) => ({ item: e.item })) ?? [],
          },
          itineraries: {
            create:
              payload.itineraries?.map((day) => ({
                dayNumber: day.dayNumber,
                description: day.description,
                title: day.title,
                features: {
                  create: day.features.map((f) => ({ item: f.item })),
                },
              })) ?? [],
          },
        },
        include: {
          inclusions: true,
          exclusions: true,
          itineraries: { include: { features: true } },
        },
      });

      return pkg;
    },
    {
      maxWait: 10000, // default is 2000ms
      timeout: 30000, // default is 5000ms
    }
  );
}

export async function updatePackageAction(
  id: string,
  payload: Partial<{
    name: string;
    days: number;
    nights: number;
    price: number;
    type: string;
    location: string;
    image: string;
    inclusions: Inclusion[];
    exclusions: Exclusion[];
    itineraries: Itinerary[];
  }>
) {
  return await prisma.$transaction(
    async (tx) => {
      // 1️⃣ Remove all dependent child records in proper order
      await tx.featuredItems.deleteMany({
        where: { dayItinerary: { packageId: id } },
      });
      await tx.dayItinerary.deleteMany({
        where: { packageId: id },
      });
      await tx.includedItems.deleteMany({
        where: { packageId: id },
      });
      await tx.excludedItems.deleteMany({
        where: { packageId: id },
      });

      // 2️⃣ Recreate the package children cleanly
      const updated = await tx.package.update({
        where: { id },
        data: {
          name: payload.name,
          days: payload.days,
          nights: payload.nights,
          image: payload.image,
          price:
            payload.price !== undefined
              ? new Prisma.Decimal(payload.price)
              : undefined,
          type: payload.type,
          location: payload.location,
          inclusions: {
            create: payload.inclusions?.map((i) => ({ item: i.item })) ?? [],
          },
          exclusions: {
            create: payload.exclusions?.map((e) => ({ item: e.item })) ?? [],
          },
          itineraries: {
            create:
              payload.itineraries?.map((day) => ({
                dayNumber: day.dayNumber,
                description: day.description,
                title: day.title,
                features: {
                  create: day.features.map((f) => ({ item: f.item })),
                },
              })) ?? [],
          },
        },
        include: {
          inclusions: true,
          exclusions: true,
          itineraries: { include: { features: true } },
        },
      });

      return updated;
    },
    {
      maxWait: 10000, // default is 2000ms
      timeout: 30000, // default is 5000ms
    }
  );
}
