import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const pkg = await prisma.package.findFirst({
      where: { id: (await params).id },
      include: {
        inclusions: true,
        exclusions: true,
        itineraries: { include: { features: true } },
      },
    });
    if (!pkg) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(pkg);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const data = await req.json();
    const updated = await prisma.package.update({
      where: { id: (await params).id },
      data: {
        name: data.name,
        days: data.days,
        nights: data.nights,
        price: data.price,
        type: data.type,
        location: data.location,
        inclusions: { deleteMany: {}, create: data.inclusions ?? [] },
        exclusions: { deleteMany: {}, create: data.exclusions ?? [] },
        itineraries: {
          deleteMany: {},
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
    return NextResponse.json(updated);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await prisma.featuredItems.deleteMany({
      where: { dayItinerary: { packageId: (await params).id } },
    });
    await prisma.dayItinerary.deleteMany({ where: { packageId: (await params).id } });
    await prisma.includedItems.deleteMany({ where: { packageId: (await params).id } });
    await prisma.excludedItems.deleteMany({ where: { packageId: (await params).id } });
    await prisma.package.delete({ where: { id: (await params).id } });
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
