import { prisma } from "@/lib/db";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Globe2,
  Package,
  Quote,
  PlusCircle,
  Menu,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [blogs, packages, destinations, testimonials] = await Promise.all([
    prisma.blogs.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: { categories: true },
    }),
    prisma.package.findMany({ take: 4, orderBy: { createdAt: "desc" } }),
    prisma.destinations.findMany({ take: 4, orderBy: { createdAt: "desc" } }),
    prisma.testimonials.findMany({ take: 4, orderBy: { createdAt: "desc" } }),
  ]);

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Topbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-gray-500 text-sm">
              Manage all content, packages, and destinations in one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link href="/blogs/new">
              <Button className="flex items-center gap-2">
                <PlusCircle className="w-4 h-4" />
                Blog
              </Button>
            </Link>
            <Link href="/packages/new">
              <Button variant="secondary" className="flex items-center gap-2">
                <PlusCircle className="w-4 h-4" />
                Package
              </Button>
            </Link>
            <Link href="/destinations/new">
              <Button variant="outline" className="flex items-center gap-2">
                <PlusCircle className="w-4 h-4" />
                Destination
              </Button>
            </Link>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Blogs"
            icon={<FileText className="w-5 h-5 text-sky-600" />}
            count={blogs.length}
            href="/blogs"
          />
          <StatCard
            title="Packages"
            icon={<Package className="w-5 h-5 text-emerald-600" />}
            count={packages.length}
            href="/packages"
          />
          <StatCard
            title="Destinations"
            icon={<Globe2 className="w-5 h-5 text-indigo-600" />}
            count={destinations.length}
            href="/destinations"
          />
          <StatCard
            title="Testimonials"
            icon={<Quote className="w-5 h-5 text-amber-600" />}
            count={testimonials.length}
            href="/testimonials"
          />
        </div>

        {/* Quick Panels */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <QuickPanel
            title="Recent Blogs"
            href="/blogs"
            data={blogs.map((b) => ({
              id: b.id,
              name: b.title,
              sub: b.author,
              right: new Date(b.createdAt).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
              }),
            }))}
          />

          <QuickPanel
            title="Recent Packages"
            href="/packages"
            data={packages.map((p) => ({
              id: p.id,
              name: p.name,
              sub: p.location ?? undefined,
              right: `₹${p.price.toFixed(2)}`,
            }))}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <QuickPanel
            title="Featured Destinations"
            href="/destinations"
            data={destinations.map((d) => ({
              id: d.id,
              name: d.name,
              sub: d.country,
              right: <ArrowRight className="w-4 h-4 text-sky-600" />,
            }))}
          />

          <TestimonialsGrid testimonials={testimonials} />
        </div>
      </div>
    </main>
  );
}

/* --- Subcomponents --- */

function StatCard({
  title,
  icon,
  count,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  count: number;
  href: string;
}) {
  return (
    <Link href={href}>
      <Card className="bg-white border hover:shadow-md transition cursor-pointer">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-gray-500">
            {title}
          </CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-semibold text-gray-800">{count}</div>
          <p className="text-xs text-gray-500 mt-1">View details</p>
        </CardContent>
      </Card>
    </Link>
  );
}

function QuickPanel({
  title,
  href,
  data,
}: {
  title: string;
  href: string;
  data: { id: string; name: string; sub?: string; right?: React.ReactNode | string }[];
}) {
  return (
    <Card className="bg-white border">
      <CardHeader className="flex items-center justify-between pb-3">
        <CardTitle className="text-lg font-semibold text-gray-900">
          {title}
        </CardTitle>
        <Link
          href={href}
          className="text-sm text-sky-600 hover:underline flex items-center gap-1"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </CardHeader>
      <CardContent className="divide-y">
        {data.length ? (
          data.map((item) => (
            <Link
              key={item.id}
              href={`${href}/${item.id}`}
              className="flex justify-between items-center py-3 px-2 hover:bg-gray-50 rounded transition"
            >
              <div>
                <p className="font-medium text-gray-800">{item.name}</p>
                {item.sub && <p className="text-sm text-gray-500">{item.sub}</p>}
              </div>
              <div className="text-sm font-medium text-gray-700">
                {item.right}
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-sm p-3">No records found.</p>
        )}
      </CardContent>
    </Card>
  );
}

function TestimonialsGrid({
  testimonials,
}: {
  testimonials: {
    id: string;
    customerName: string;
    feedback: string;
    image?: string | null;
    rating: number;
  }[];
}) {
  return (
    <Card className="bg-white border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">
          Recent Testimonials
        </CardTitle>
      </CardHeader>
      <CardContent>
        {testimonials.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-4 border rounded-lg hover:shadow-sm transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  {t.image ? (
                    <img
                      src={t.image}
                      className="w-10 h-10 rounded-full object-cover"
                      alt={t.customerName}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                  )}
                  <div>
                    <p className="font-medium text-gray-800">{t.customerName}</p>
                    <p className="text-xs text-gray-500">
                      Rating: {t.rating}/5
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {t.feedback}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No testimonials yet.</p>
        )}
      </CardContent>
    </Card>
  );
}
