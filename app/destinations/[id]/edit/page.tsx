import React from "react";
import { prisma } from "@/lib/db";
import DestinationForm from "@/components/DestinationForm";

interface Props { params: Promise<{ id: string }> }

export default async function EditPage({ params }: Props) {
  const id = (await params).id;
  const dest = await prisma.destinations.findUnique({
    where: { id },
    include: { faqs: true, places: true }
  });

  if (!dest) return <div className="p-8">Not found</div>;

  return <DestinationForm id={id} initialData={dest} />;
}
