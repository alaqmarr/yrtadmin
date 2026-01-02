// app/api/destinations/[id]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const dest = await prisma.destinations.findUnique({
      where: { id: (await params).id },
      include: {
        faqs: true,
        places: true,
        packages: true,
      },
    });
    if (!dest)
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(dest);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await req.json();
    const {
      name,
      tag,
      title,
      description,
      image,
      country,
      visa,
      languagesSpoken,
      currency,
      faqs,
      places,
      packages,
    } = body;

    const updated = await prisma.destinations.update({
      where: { id: (await params).id },
      data: {
        name,
        tag,
        title,
        description,
        image,
        country,
        visa,
        languagesSpoken,
        currency,
        faqs: {
          deleteMany: {},
          create: (faqs || []).map((f: any) => ({
            question: f.question,
            answer: f.answer,
          })),
        },
      },
      include: { faqs: true },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await prisma.destinationFAQ.deleteMany({
      where: { destinationId: (await params).id },
    });
    await prisma.destinations.delete({ where: { id: (await params).id } });
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
