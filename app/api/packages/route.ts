import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const packages = await prisma.package.findMany({
      include: {
        inclusions: true,
        exclusions: true,
        itineraries: { include: { features: true } },
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(packages);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const created = await prisma.package.create({
      data: {
        name: data.name,
        days: data.days,
        nights: data.nights,
        price: data.price,
        image: data.image,
        type: data.type,
        location: data.location,
        inclusions: { create: data.inclusions ?? [] },
        exclusions: { create: data.exclusions ?? [] },
        itineraries: {
          create: data.itineraries?.map((day: any) => ({
            dayNumber: day.dayNumber,
            description: day.description,
            features: { create: day.features ?? [] },
          })),
        },
      },
      include: {
        inclusions: true,
        exclusions: true,
        itineraries: { include: { features: true } },
      },
    });
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}
