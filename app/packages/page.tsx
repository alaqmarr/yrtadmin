import { prisma } from "@/lib/db";
import Link from "next/link";
import { PlusCircle, Search, MapPin, Calendar, CreditCard, ArrowRight, Package as PackageIcon, Clock, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DeleteButton } from "@/components/DeleteButton";
import { deletePackageAction } from "@/app/actions/package.server";

export const dynamic = "force-dynamic";

export default async function PackagesPage({
    searchParams,
}: {
    searchParams: { q?: string };
}) {
    const query = searchParams?.q || "";

    const packages = await prisma.package.findMany({
        where: {
            OR: [
                { name: { contains: query, mode: "insensitive" } },
                { location: { contains: query, mode: "insensitive" } },
            ],
        },
        include: {
            inclusions: true,
            itineraries: true,
        },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border/40 pb-6">
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Curated Packages
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                        Design unforgettable journeys. Manage itineraries, pricing, and details with elegance.
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64 group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder="Search destination..."
                            className="pl-9 h-11 bg-background/50 border-input/50 focus:bg-background transition-all rounded-full"
                        />
                    </div>
                    <Link href="/packages/new">
                        <Button size="lg" className="rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all h-11 px-6">
                            <PlusCircle className="w-5 h-5 mr-2" />
                            <span className="font-semibold">Create New</span>
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
                {packages.map((pkg, i) => (
                    <div
                        key={pkg.id}
                        className="group relative flex flex-col h-full bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                        style={{ animationDelay: `${i * 50}ms` }}
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Link href={`/packages/${pkg.id}`} className="absolute inset-0 z-10 block cursor-pointer">
                                <span className="sr-only">View {pkg.name}</span>
                            </Link>

                            {pkg.image ? (
                                <img
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-muted/30">
                                    <PackageIcon className="w-12 h-12 text-muted-foreground/30" />
                                </div>
                            )}

                            {/* Floating Badges */}
                            <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                                <Badge className="bg-black/60 backdrop-blur-md text-white border-none hover:bg-black/70 px-3 py-1 rounded-full font-medium">
                                    <Clock className="w-3 h-3 mr-1.5" />
                                    {pkg.days}D / {pkg.nights}N
                                </Badge>
                            </div>

                            {/* Actions Overlay (Always Visible on Mobile, Hover on Desktop) */}
                            <div className="absolute top-4 right-4 z-30 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-y-2 md:group-hover:translate-y-0">
                                <Button
                                    variant="secondary"
                                    size="icon"
                                    className="h-9 w-9 rounded-full bg-white/90 text-foreground hover:bg-white shadow-lg backdrop-blur-sm"
                                    asChild
                                >
                                    <Link href={`/packages/${pkg.id}/edit`}>
                                        <Pencil className="w-4 h-4" />
                                        <span className="sr-only">Edit</span>
                                    </Link>
                                </Button>
                                <DeleteButton
                                    id={pkg.id}
                                    onDelete={deletePackageAction}
                                    itemType="package"
                                    className="h-9 w-9 rounded-full bg-white/90 text-red-500 hover:bg-red-500 hover:text-white shadow-lg backdrop-blur-sm border-none"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                            {/* Price Tag (Bottom Overlay) */}
                            <div className="absolute bottom-4 right-4 z-20">
                                <div className="bg-white/95 backdrop-blur-md text-foreground px-4 py-1.5 rounded-full font-bold text-sm shadow-xl">
                                    ₹{Number(pkg.price).toLocaleString('en-IN')}
                                </div>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-5 flex flex-col flex-1 gap-3 relative bg-card/50 backdrop-blur-sm">
                            {/* Location */}
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
                                <MapPin className="w-3.5 h-3.5" />
                                <span className="truncate">{pkg.location || "Unknown Location"}</span>
                            </div>

                            <Link href={`/packages/${pkg.id}`} className="block group-hover:text-primary transition-colors">
                                <h3 className="text-xl font-bold leading-tight line-clamp-2" title={pkg.name}>
                                    {pkg.name}
                                </h3>
                            </Link>

                            {/* Footer Info */}
                            <div className="mt-auto pt-4 flex items-center justify-between text-muted-foreground text-sm border-t border-border/40">
                                <span className="flex items-center gap-1.5">
                                    <CreditCard className="w-3.5 h-3.5" />
                                    Starting price
                                </span>
                                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 group-hover:text-primary transition-transform duration-300" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {packages.length === 0 && (
                <div className="flex flex-col items-center justify-center py-32 text-center space-y-4 border-2 border-dashed border-border/50 rounded-3xl bg-muted/5 animated-dashed">
                    <div className="p-4 bg-muted/20 rounded-full">
                        <PackageIcon className="w-10 h-10 text-muted-foreground/50" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold">No packages found</h3>
                        <p className="text-muted-foreground max-w-sm mx-auto">
                            Your catalog is empty. Start adding travel experiences to showcase them here.
                        </p>
                    </div>
                    <Link href="/packages/new">
                        <Button>
                            Create First Package
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
}