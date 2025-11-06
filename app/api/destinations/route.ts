// app/api/destinations/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const destinations = await prisma.destinations.findMany({
      include: { faqs: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(destinations);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  // Accept JSON create payload (use server action preferred for admin UI).
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
    } = body;

    const created = await prisma.destinations.create({
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
          create: (faqs || []).map((f: any) => ({ question: f.question, answer: f.answer })),
        },
      },
      include: { faqs: true },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error("destinations POST", err);
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}
