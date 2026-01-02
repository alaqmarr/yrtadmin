import { prisma } from "@/lib/db";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  Pencil,
  ArrowLeft,
  Info,
  Share2,
  Printer,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DeleteButton } from "@/components/DeleteButton";
import { deletePackageAction } from "@/app/actions/package.server";

export const dynamic = "force-dynamic";

export default async function ViewPackagePage({ params }: { params: Promise<{ id: string }> }) {
  const pkg = await prisma.package.findFirst({
    where: { id: (await params).id },
    include: {
      inclusions: true,
      exclusions: true,
      itineraries: {
        include: { features: true },
        orderBy: { dayNumber: 'asc' }
      },
    },
  });

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Package not found</h2>
          <Button asChild variant="link">
            <Link href="/packages">← Return to Packages</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 animate-in fade-in duration-500">
      {/* Immersive Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        {pkg.image ? (
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover attachment-fixed"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <MapPin className="w-20 h-20 text-muted-foreground/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/10" />

        <div className="absolute top-6 left-6 z-20">
          <Button asChild variant="secondary" className="rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 border border-white/20">
            <Link href="/packages">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-md px-3 py-1 text-sm uppercase tracking-wider">
                  {pkg.type}
                </Badge>
                <Badge variant="outline" className="text-white border-white/40 backdrop-blur-md bg-white/10 px-3 py-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {pkg.days} Days / {pkg.nights} Nights
                </Badge>
                <Badge variant="outline" className="text-white border-white/40 backdrop-blur-md bg-white/10 px-3 py-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {pkg.location}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-sm leading-tight">
                {pkg.name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            {pkg.about && (
              <section className="bg-card rounded-3xl p-8 shadow-sm border border-border/50">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  Overview
                </h2>
                <div
                  className="prose prose-gray dark:prose-invert max-w-none text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: pkg.about }}
                />
              </section>
            )}

            {/* Itinerary Timeline */}
            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Itinerary
              </h2>
              <div className="space-y-0 relative border-l-2 border-primary/20 ml-3 md:ml-6 pl-8 md:pl-12 pb-4">
                {pkg.itineraries.map((day, idx) => (
                  <div key={day.id} className="relative mb-12 last:mb-0 group">
                    {/* Connector Dot */}
                    <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 rounded-full bg-background border-4 border-primary shadow-sm z-10 group-hover:scale-125 transition-transform duration-300" />

                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-bold text-foreground">
                        Day {day.dayNumber}: {day.title || `Day ${day.dayNumber} Highlights`}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {day.description}
                      </p>

                      {day.features.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {day.features.map(f => (
                            <Badge key={f.id} variant="secondary" className="bg-muted/50 text-muted-foreground">
                              {f.item}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions / Exclusions */}
            <div className="grid md:grid-cols-2 gap-6">
              <section className="bg-green-50/50 dark:bg-green-950/10 rounded-3xl p-8 border border-green-100 dark:border-green-900/20">
                <h3 className="text-xl font-bold mb-6 text-green-700 dark:text-green-400 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Inclusions
                </h3>
                <ul className="space-y-3">
                  {pkg.inclusions.map(inch => (
                    <li key={inch.id} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500 mt-1 shrink-0" />
                      <span className="text-muted-foreground text-sm">{inch.item}</span>
                    </li>
                  ))}
                  {!pkg.inclusions.length && <li className="text-muted-foreground/50 italic">No inclusions listed</li>}
                </ul>
              </section>

              <section className="bg-red-50/50 dark:bg-red-950/10 rounded-3xl p-8 border border-red-100 dark:border-red-900/20">
                <h3 className="text-xl font-bold mb-6 text-red-700 dark:text-red-400 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Exclusions
                </h3>
                <ul className="space-y-3">
                  {pkg.exclusions.map(ex => (
                    <li key={ex.id} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                      <span className="text-muted-foreground text-sm">{ex.item}</span>
                    </li>
                  ))}
                  {!pkg.exclusions.length && <li className="text-muted-foreground/50 italic">No exclusions listed</li>}
                </ul>
              </section>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50">
                <div className="text-center mb-6">
                  <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold mb-2">Total Price</p>
                  <div className="text-4xl font-black text-primary">
                    ₹{Number(pkg.price).toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">per person</p>
                </div>

                <div className="grid gap-3">
                  <Button className="w-full text-lg h-12 rounded-xl shadow-primary/25 shadow-lg" asChild>
                    <Link href={`/packages/${pkg.id}/edit`}>
                      <Pencil className="w-4 h-4 mr-2" />
                      Edit Package
                    </Link>
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full h-12 rounded-xl border-dashed">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" className="w-full h-12 rounded-xl border-dashed">
                      <Printer className="w-4 h-4 mr-2" />
                      Print
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <DeleteButton
                  id={pkg.id}
                  onDelete={deletePackageAction}
                  itemType="package"
                  className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                  iconOnly={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
