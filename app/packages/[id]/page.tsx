// app/packages/[id]/page.tsx
import { prisma } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ViewPackagePage({ params }: { params: Promise<{ id: string }> }) {
  const pkg = await prisma.package.findFirst({
    where: { id: (await params).id },
    include: {
      inclusions: true,
      exclusions: true,
      itineraries: { include: { features: true } },
    },
  });

  if (!pkg)
    return (
      <div className="p-8 text-center text-gray-500">
        Package not found.
        <Link href="/packages" className="text-sky-600 underline ml-1">
          Go back
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Header */}
        {pkg.image && (
          <div className="w-full h-64 md:h-80 overflow-hidden">
            <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="p-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-semibold">{pkg.name}</h1>
              <p className="text-gray-600 mt-1">
                {pkg.type} · {pkg.location}
              </p>
            </div>
            <Link
              href={`/packages/${pkg.id}/edit`}
              className="px-4 py-2 bg-sky-600 text-white text-sm rounded-lg hover:bg-sky-700"
            >
              Edit
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-gray-700">
            <div>
              <span className="text-sm text-gray-500 block">Duration</span>
              {pkg.days} Days / {pkg.nights} Nights
            </div>
            <div>
              <span className="text-sm text-gray-500 block">Price</span>
              ₹{pkg.price.toLocaleString()}
            </div>
          </div>

          {/* Inclusions */}
          <section className="mt-8">
            <h2 className="text-lg font-medium text-gray-900">Inclusions</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              {pkg.inclusions.length ? (
                pkg.inclusions.map((i) => <li key={i.id}>{i.item}</li>)
              ) : (
                <li className="text-gray-500">No inclusions listed</li>
              )}
            </ul>
          </section>

          {/* Exclusions */}
          <section className="mt-8">
            <h2 className="text-lg font-medium text-gray-900">Exclusions</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              {pkg.exclusions.length ? (
                pkg.exclusions.map((e) => <li key={e.id}>{e.item}</li>)
              ) : (
                <li className="text-gray-500">No exclusions listed</li>
              )}
            </ul>
          </section>

          {/* Itineraries */}
          <section className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Daily Itinerary</h2>
            {pkg.itineraries.length ? (
              <div className="space-y-5">
                {pkg.itineraries.map((it) => (
                  <div key={it.id} className="border rounded-lg p-4 bg-gray-50">
                    <h3 className="font-medium text-sky-700">Day {it.dayNumber}</h3>
                    <p className="text-gray-700 mt-2">{it.description}</p>
                    {it.features.length ? (
                      <ul className="list-disc pl-5 mt-2 text-gray-600 text-sm">
                        {it.features.map((f) => (
                          <li key={f.id}>{f.item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No itinerary provided.</p>
            )}
          </section>

          <div className="mt-10">
            <Link
              href="/packages"
              className="text-sm text-sky-600 hover:underline font-medium"
            >
              ← Back to all packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
