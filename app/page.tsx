import { prisma } from "@/lib/db";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Globe,
  Package,
  Plus,
  TrendingUp,
  Users,
  MapPin,
  Calendar,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [blogs, packages, destinations, testimonials, appConfig] =
    await Promise.all([
      prisma.blogs.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { categories: true },
      }),
      prisma.package.findMany({ take: 6, orderBy: { createdAt: "desc" } }),
      prisma.destinations.findMany({ take: 5, orderBy: { createdAt: "desc" } }),
      prisma.testimonials.findMany({ take: 4, orderBy: { createdAt: "desc" } }),
      prisma.appConfig.findFirst(),
    ]);

  const siteName = appConfig?.siteName || "YRT Admin";

  return (
    <main className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-border/40">
        <div className="space-y-1">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="text-muted-foreground font-medium text-lg">
            Overview of <span className="text-foreground">{siteName}</span>.
          </p>
        </div>

        <div className="flex gap-3">
          <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-6 shadow-xl shadow-black/5 hover:shadow-black/10 transition-all">
            <Link href="/blogs/new">
              <Plus className="w-4 h-4 mr-2" />
              Compose
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-6 border-border/60 hover:bg-muted/50 transition-all">
            <Link href="/packages/new">
              <Plus className="w-4 h-4 mr-2" />
              Package
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid - Industrial Premium Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Blogs"
          value={blogs.length}
          icon={FileText}
          trend="+12%"
          trendUp={true}
          description="Content pieces"
          color="bg-blue-500/10 text-blue-600"
        />
        <StatCard
          title="Active Packages"
          value={packages.length}
          icon={Package}
          trend="+5%"
          trendUp={true}
          description="Travel offerings"
          color="bg-orange-500/10 text-orange-600"
        />
        <StatCard
          title="Destinations"
          value={destinations.length}
          icon={Globe}
          trend="+2 New"
          trendUp={true}
          description="Global locations"
          color="bg-purple-500/10 text-purple-600"
        />
        <StatCard
          title="Testimonials"
          value={testimonials.length}
          icon={Users}
          trend="4.9 Avg"
          trendUp={true}
          description="Happy clients"
          color="bg-green-500/10 text-green-600"
        />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column (2/3) */}
        <div className="xl:col-span-2 space-y-10">

          {/* Recent Packages (The User Liked This Style) */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">New Packages</h2>
                <p className="text-muted-foreground text-sm">Recently added travel experiences</p>
              </div>
              <Link href="/packages" className="group flex items-center text-sm font-medium hover:text-primary transition-colors">
                View All <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <Link key={pkg.id} href={`/packages/${pkg.id}/edit`} className="group block relative">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-sm group-hover:shadow-xl transition-all duration-500">
                    {pkg.image ? (
                      <img src={pkg.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                        <Package className="w-10 h-10 opacity-20" />
                      </div>
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="flex justify-between items-end gap-2">
                        <div className="space-y-1.5 flex-1">
                          <p className="text-xs text-white/70 font-medium uppercase tracking-wider flex items-center gap-1.5">
                            <MapPin className="w-3 h-3" /> {pkg.location || "Unknown"}
                          </p>
                          <h3 className="text-xl font-bold text-white leading-tight line-clamp-2 group-hover:text-white/90 transition-colors">
                            {pkg.name}
                          </h3>
                        </div>
                        <Badge variant="secondary" className="shrink-0 bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/20">
                          ₹{Number(pkg.price).toLocaleString('en-IN')}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              {packages.length === 0 && <EmptyState label="No packages yet" />}
            </div>
          </section>

          {/* Recent Blogs (Revamped to match Packages) */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Latest Publications</h2>
                <p className="text-muted-foreground text-sm">Insights and travel stories</p>
              </div>
              <Link href="/blogs" className="group flex items-center text-sm font-medium hover:text-primary transition-colors">
                View All <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {blogs.map((blog) => (
                <Link key={blog.id} href={`/blogs/${blog.id}/edit`} className="group">
                  <div className="flex gap-4 p-4 rounded-2xl bg-card border border-border/40 hover:border-border/80 hover:bg-muted/30 transition-all duration-300">
                    <div className="h-24 w-32 sm:h-28 sm:w-40 rounded-xl bg-muted overflow-hidden shrink-0 relative shadow-inner">
                      {blog.thumbnail ? (
                        <img src={blog.thumbnail} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      ) : (
                        <FileText className="h-8 w-8 m-auto absolute inset-0 text-muted-foreground/30" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {blog.categories.slice(0, 2).map(cat => (
                          <Badge key={cat.id} variant="outline" className="text-[10px] px-2 py-0 h-5 border-border/60 text-muted-foreground">
                            {cat.name}
                          </Badge>
                        ))}
                      </div>
                      <h4 className="font-bold text-lg text-foreground leading-snug truncate group-hover:text-primary transition-colors">
                        {blog.title}
                      </h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {blog.author}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {new Date(blog.createdAt).toLocaleDateString()}</span>
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center px-4 text-muted-foreground/30 group-hover:text-primary transition-colors">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </Link>
              ))}
              {blogs.length === 0 && <EmptyState label="No blogs yet" />}
            </div>
          </section>
        </div>

        {/* Right Column (1/3) */}
        <div className="space-y-8">
          {/* Pro Tip Card */}
          <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles className="w-24 h-24 text-primary" />
            </div>
            <div className="relative z-10">
              <div className="bg-background w-10 h-10 rounded-full flex items-center justify-center shadow-sm mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Pro Tip</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Speed up your workflow! Use <kbd className="bg-background border border-border px-1.5 py-0.5 rounded text-xs font-mono text-foreground font-semibold">Shift + Enter</kbd> in lists (like itineraries or FAQS) to instantly add new items without leaving the keyboard.
              </p>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-lg font-bold">Recent Feedback</h3>
            </div>

            <div className="space-y-3">
              {testimonials.map((t) => (
                <div key={t.id} className="p-5 rounded-2xl bg-card border border-border/40 hover:border-border/80 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                        {t.customerName.charAt(0)}
                      </div>
                      <span className="font-semibold text-sm">{t.customerName}</span>
                    </div>
                    <div className="flex text-amber-500 text-[10px] gap-0.5">
                      {"★".repeat(Math.round(Number(t.rating)))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed pl-10">"{t.feedback}"</p>
                </div>
              ))}
              {testimonials.length === 0 && (
                <div className="text-center p-8 border-2 border-dashed border-muted rounded-2xl text-muted-foreground text-sm">
                  No reviews yet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function StatCard({ title, value, icon: Icon, trend, trendUp, description, color }: any) {
  return (
    <div className="p-6 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${color} bg-opacity-10 transition-colors`}>
          <Icon className="w-5 h-5" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${trendUp ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}`}>
            {trendUp ? <TrendingUp className="w-3 h-3" /> : <TrendingUp className="w-3 h-3 rotate-180" />}
            {trend}
          </div>
        )}
      </div>
      <div>
        <h3 className="text-3xl font-extrabold tracking-tight text-foreground mb-1 group-hover:scale-105 transition-transform origin-left">{value}</h3>
        <p className="font-medium text-foreground/80">{title}</p>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  )
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="p-12 text-center border-2 border-dashed border-border/60 rounded-2xl text-muted-foreground text-sm bg-muted/5 flex flex-col items-center justify-center gap-2 col-span-full">
      <Package className="w-8 h-8 opacity-20" />
      {label}
    </div>
  )
}
