// app/destinations/[id]/edit/page.tsx
import React from "react";
import DropzoneClient from "@/components/DropzoneClient";
import { prisma } from "@/lib/db";
import { updateDestinationAction } from "@/app/actions/destination.server";

interface Props { params: Promise<{ id: string }> }

export default async function EditPage({ params }: Props) {
  const id = (await params).id;
  const dest = await prisma.destinations.findUnique({ where: { id }, include: { faqs: true } });
  if (!dest) return <div className="p-8">Not found</div>;

  async function action(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const title = formData.get("title") as string | null;
    const description = formData.get("description") as string | null;
    const image = formData.get("image") as string | null;
    const country = formData.get("country") as string | null;
    const faqsJson = formData.get("faqs") as string | null;
    const faqs = faqsJson ? JSON.parse(faqsJson) : [];

    await updateDestinationAction(id, {
      name,
      title: title || undefined,
      description: description || undefined,
      image: image || undefined,
      country: country || undefined,
      faqs,
    });
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Edit Destination</h1>
      <form action={action} method="post" className="space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input name="name" defaultValue={dest.name} required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm">Title</label>
          <input name="title" defaultValue={dest.title ?? ''} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm">Country</label>
          <input name="country" defaultValue={dest.country ?? ''} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm">Description</label>
          <textarea name="description" defaultValue={dest.description ?? ""} className="w-full border p-2 rounded" rows={4} />
        </div>

        <div>
          <label className="block text-sm mb-2">Image</label>

          <DropzoneClient
            multiple={false}
            onUploadComplete={(urls) => {
              const input = document.querySelector<HTMLInputElement>('input[name="image"]');
              if (input) input.value = urls[0] ?? "";
            }}
          />

          <input type="hidden" name="image" defaultValue={dest.image ?? ""} />
          {dest.image && <img src={dest.image} className="w-48 h-28 object-cover mt-2 rounded" />}
        </div>

        <div>
          <label className="block text-sm">FAQs (JSON)</label>
          <textarea name="faqs" defaultValue={JSON.stringify(dest.faqs || [])} className="w-full border p-2 rounded" rows={4} />
        </div>

        <div>
          <button type="submit" className="px-4 py-2 rounded bg-slate-800 text-white">Save</button>
        </div>
      </form>
    </div>
  );
}
