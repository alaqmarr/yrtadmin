import { prisma } from "@/lib/db";
import Link from "next/link";
import { Destinations, Package, Testimonials } from "./prisma/client";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [packages, destinations, testimonials] = await Promise.all([
    prisma.package.findMany({
      take: 6,
      orderBy: { createdAt: "desc" },
    }),
    prisma.destinations.findMany({
      take: 6,
      orderBy: { createdAt: "desc" },
    }),
    prisma.testimonials.findMany({
      take: 4,
      orderBy: { createdAt: "desc" },
    }),
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative px-6 md:px-12 py-24 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Explore the World with <span className="text-sky-600">Your Travel Partner</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover curated destinations, thoughtfully planned packages, and seamless experiences —
            all designed to make your journey effortless.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/packages"
              className="px-6 py-3 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-sky-700"
            >
              View Packages
            </Link>
            <Link
              href="/destinations"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Popular Packages</h2>
          <Link href="/packages" className="text-sm text-sky-600 hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.length > 0 ? (
            packages.map((pkg: Package) => (
              <div
                key={pkg.id}
                className="rounded-2xl overflow-hidden shadow-sm border bg-white hover:shadow-md transition-all"
              >
                <div className="w-full h-48 bg-gray-100 overflow-hidden">
                  {pkg.image ? (
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-sm text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">{pkg.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{pkg.location}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sky-700 font-semibold">₹{pkg.price.toFixed(2)}</div>
                    <div className="text-xs text-gray-500">
                      {pkg.days}D / {pkg.nights}N
                    </div>
                  </div>
                  <Link
                    href={`/packages/${pkg.id}`}
                    className="mt-4 block text-center text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-lg py-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          )

            :


            <p className="text-gray-500">No packages available at the moment.</p>}
        </div>
      </section>

      {/* Destinations */}
      <section className="px-6 md:px-12 py-16 max-w-6xl mx-auto bg-gradient-to-b from-white to-gray-50">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Featured Destinations</h2>
          <Link href="/destinations" className="text-sm text-sky-600 hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.length > 0 ? (
            destinations.map((d: Destinations) => (
              <div
                key={d.id}
                className="rounded-2xl overflow-hidden border bg-white hover:shadow-md transition-all"
              >
                <div className="w-full h-48 bg-gray-100 overflow-hidden">
                  {d.image ? (
                    <img src={d.image} alt={d.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-sm text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">{d.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{d.country}</p>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{d.description}</p>
                  <Link
                    href={`/destinations/${d.id}`}
                    className="mt-4 block text-center text-sm font-medium text-sky-600 border border-sky-600 hover:bg-sky-50 rounded-lg py-2"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            ))
          )
            :
            <p className="text-gray-500">No destinations available at the moment.</p>
          }
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">What Our Travellers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {testimonials.length > 0 ? (
            testimonials.map((t: Testimonials) => (
              <div
                key={t.id}
                className="bg-white border rounded-xl shadow-sm p-5 flex flex-col items-center hover:shadow-md transition-all"
              >
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.customerName}
                    className="w-20 h-20 rounded-full object-cover mb-3"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-200 mb-3" />
                )}
                <h4 className="text-sm font-medium text-gray-800">{t.customerName}</h4>
                <p className="text-xs text-gray-500 mt-1">Rating: {t.rating}/5</p>
                <p className="text-sm text-gray-600 mt-3 line-clamp-3">{t.feedback}</p>
              </div>
            ))
          )
            :
            <p className="text-gray-500 col-span-4">No testimonials available at the moment.</p>
          }
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 py-8 text-sm mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h4 className="text-white text-lg font-semibold">Your Travel Agency</h4>
            <p className="mt-2 text-gray-400 max-w-xs">
              Making every journey memorable with curated experiences, comfort, and trust.
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="text-white font-medium">Quick Links</h5>
            <ul className="space-y-1">
              <li>
                <Link href="/packages" className="hover:text-white">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-white">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium mb-2">Connect</h5>
            <p className="text-gray-400">info@travelagency.com</p>
            <p className="text-gray-400 mt-1">+91 98765 43210</p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Yellow Ribbon Travels. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
