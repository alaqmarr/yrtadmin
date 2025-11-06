// app/packages/page.tsx
import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/db";
import DeleteButton from "./components/DeleteButton";

export const dynamic = "force-dynamic";

type PackageWithRelations = {
    id: string;
    name: string;
    days: number;
    nights: number;
    price: number;
    type: string | null;
    location: string | null;
    image?: string | null;
    inclusions: { id: string; item: string }[];
    exclusions: { id: string; item: string }[];
    itineraries: {
        id: string;
        dayNumber: number;
        description: string | null;
        features: { id: string; item: string }[];
    }[];
    createdAt: string;
    updatedAt: string;
};

export default async function PackagesPage() {
    const packages = await prisma.package.findMany({
        include: {
            inclusions: true,
            exclusions: true,
            itineraries: { include: { features: true } },
        },
        orderBy: { createdAt: "desc" },
    })

    if (packages.length === 0) {
        return (
            <div className="p-8 text-center text-gray-500">
                No packages found.
                <Link href="/packages/new" className="text-sky-600 underline ml-1">
                    Create the first package
                </Link>
            </div>
        );
    }
    return (
        <div className="p-8 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-semibold">Packages</h1>
                <Link href="/packages/new" className="px-4 py-2 rounded bg-sky-600 text-white text-sm">
                    + New Package
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                    <article key={pkg.id} className="border rounded-2xl overflow-hidden shadow-sm bg-white">
                        <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                            {pkg.image ? (
                                // simple img; replace with next/image if you want optimization
                                // keep plain <img> to avoid import complexity in this snippet
                                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="text-sm text-slate-500">No image</div>
                            )}
                        </div>

                        <div className="p-4">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className="text-lg font-medium">{pkg.name}</h2>
                                    <p className="text-sm text-slate-600 mt-1">
                                        {pkg.type ?? "General"} · {pkg.location ?? "Unknown"}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <div className="text-lg font-semibold">₹{pkg.price.toLocaleString()}</div>
                                    <div className="text-xs text-slate-500">
                                        {pkg.days}D · {pkg.nights}N
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-sm text-slate-700">
                                <strong className="text-sm">Inclusions:</strong>
                                <ul className="list-disc ml-5 mt-1">
                                    {pkg.inclusions.length ? (
                                        pkg.inclusions.slice(0, 3).map((i) => <li key={i.id}>{i.item}</li>)
                                    ) : (
                                        <li className="text-slate-500">None</li>
                                    )}
                                </ul>
                            </div>

                            <div className="mt-3 text-sm text-slate-700">
                                <strong className="text-sm">Exclusions:</strong>
                                <ul className="list-disc ml-5 mt-1">
                                    {pkg.exclusions.length ? (
                                        pkg.exclusions.slice(0, 3).map((e) => <li key={e.id}>{e.item}</li>)
                                    ) : (
                                        <li className="text-slate-500">None</li>
                                    )}
                                </ul>
                            </div>

                            <div className="mt-3 text-sm text-slate-700">
                                <strong className="text-sm">Itineraries:</strong>
                                <div className="mt-2 space-y-2 max-h-36 overflow-auto pr-2">
                                    {pkg.itineraries.length ? (
                                        pkg.itineraries.map((it) => (
                                            <div key={it.id} className="text-xs border rounded p-2 bg-gray-50">
                                                <div className="flex items-center justify-between">
                                                    <div className="font-medium">Day {it.dayNumber}</div>
                                                </div>
                                                <p className="text-xs mt-1 text-slate-600">
                                                    {it.description?.slice(0, 120) ?? "—"}
                                                </p>
                                                {it.features.length ? (
                                                    <div className="mt-2 text-xs text-slate-600">
                                                        <strong className="text-xs">Features:</strong>{" "}
                                                        {it.features.map((f) => f.item).slice(0, 5).join(", ")}
                                                    </div>
                                                ) : null}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-xs text-slate-500">No itinerary</div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-3">
                                <Link
                                    href={`/packages/${pkg.id}`}
                                    className="px-3 py-1 rounded bg-white border text-sm"
                                >
                                    View
                                </Link>

                                <Link
                                    href={`/packages/${pkg.id}/edit`}
                                    className="px-3 py-1 rounded bg-yellow-100 border text-sm"
                                >
                                    Edit
                                </Link>

                                <DeleteButton id={pkg.id} />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

/**
 * Client-side delete button component.
 * Calls DELETE /api/packages/[id] and reloads on success.
 *
 * Keeps this small & focused to avoid adding global client bundle size.
 */