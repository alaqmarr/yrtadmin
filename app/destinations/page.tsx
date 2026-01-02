import { prisma } from "@/lib/db";
import Link from "next/link";
import { Plus, MapPin, Globe, ArrowRight, Mountain, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DeleteButton } from "@/components/DeleteButton";
import { deleteDestinationAction } from "@/app/actions/destination.server";

export const dynamic = "force-dynamic";

export default async function DestinationsPage() {
    const destinations = await prisma.destinations.findMany({
        orderBy: { createdAt: "desc" },
        include: { _count: { select: { places: true } } }
    });

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border/40 pb-6">
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Destinations
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                        The world is yours to explore. Manage locations and their hidden gems.
                    </p>
                </div>

                <Link href="/destinations/new">
                    <Button size="lg" className="rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all h-11 px-6">
                        <Plus className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Add Destination</span>
                    </Button>
                </Link>
            </div>

            {/* Poster Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {destinations.map((dest, i) => (
                    <div
                        key={dest.id}
                        className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-muted shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        style={{ animationDelay: `${i * 100}ms` }}
                    >
                        {/* Background Image */}
                        {dest.image ? (
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-muted">
                                <Globe className="w-20 h-20 text-muted-foreground/20" />
                            </div>
                        )}

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500" />

                        {/* Content Content - Bottom Aligned */}
                        <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end h-full">

                            {/* Top Actions (Absolute relative to card) */}
                            <div className="absolute top-4 right-4 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:-translate-y-2 md:group-hover:translate-y-0">
                                <Button
                                    variant="secondary"
                                    size="icon"
                                    className="h-9 w-9 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-black border border-white/20"
                                    asChild
                                >
                                    <Link href={`/destinations/${dest.id}/edit`}>
                                        <Pencil className="w-4 h-4" />
                                    </Link>
                                </Button>
                                <DeleteButton
                                    id={dest.id}
                                    onDelete={deleteDestinationAction}
                                    itemType="destination"
                                    className="h-9 w-9 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-red-500 hover:text-white border border-white/20"
                                />
                            </div>

                            <div className="space-y-4 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                                <div>
                                    <Badge variant="outline" className="text-white/90 border-white/30 backdrop-blur-sm bg-white/5 uppercase tracking-[0.2em] text-[10px] w-fit mb-2">
                                        {dest.country}
                                    </Badge>
                                    <Link href={`/destinations/${dest.id}`} className="block group-hover:text-white/90 transition-colors">
                                        <h3 className="text-3xl font-bold text-white leading-none tracking-tight">
                                            {dest.name}
                                        </h3>
                                    </Link>
                                </div>

                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                                    <div className="flex items-center gap-4 pt-4 border-t border-white/20 text-white/80 font-medium text-sm">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4 text-white" />
                                            <span>{dest._count.places} Places</span>
                                        </div>
                                        <div className="flex-1" />
                                        <div className="flex items-center gap-1 text-xs uppercase tracking-widest text-white/60">
                                            Explore <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {destinations.length === 0 && (
                <div className="flex flex-col items-center justify-center py-32 text-center space-y-4 border-2 border-dashed border-border/50 rounded-3xl bg-muted/5">
                    <div className="p-4 bg-muted/20 rounded-full">
                        <Mountain className="w-10 h-10 text-muted-foreground/50" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold">No destinations yet</h3>
                        <p className="text-muted-foreground max-w-sm mx-auto">
                            Start building your portfolio of locations.
                        </p>
                    </div>
                    <Link href="/destinations/new">
                        <Button>
                            Add First Destination
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
