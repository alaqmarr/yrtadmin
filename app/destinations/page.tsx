import { prisma } from "@/lib/db";
import Link from "next/link";
import { Plus, MapPin, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-end pb-6 border-b border-border/40 gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight">Destinations</h1>
                    <p className="text-muted-foreground mt-2 text-lg">Curated list of travel locations.</p>
                </div>

                <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="/destinations/new">
                        <Plus className="w-5 h-5 mr-2" />
                        Add Destination
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((dest, i) => (
                    <Link
                        key={dest.id}
                        href={`/destinations/${dest.id}/edit`}
                        className="group block"
                    >
                        <div
                            className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            {dest.image ? (
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-muted">
                                    <Globe className="w-16 h-16 text-muted-foreground/30" />
                                </div>
                            )}

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                                <div className="space-y-2 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                                    <Badge variant="outline" className="text-white border-white/30 backdrop-blur-md bg-white/10 uppercase tracking-widest text-[10px] w-fit">
                                        {dest.country}
                                    </Badge>
                                    <h3 className="text-2xl font-bold text-white leading-tight">
                                        {dest.name}
                                    </h3>
                                    <div className="absolute top-4 right-4 z-20">
                                        <DeleteButton id={dest.id} onDelete={deleteDestinationAction} itemType="destination" className="bg-black/20 hover:bg-red-500/80 text-white hover:text-white backdrop-blur-md rounded-full" />
                                    </div>
                                    <div className="flex items-center justify-between pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border-t border-white/20 mt-4">
                                        <span className="text-white/80 text-xs font-medium flex items-center gap-1.5">
                                            <MapPin className="w-3 h-3" /> {dest._count.places} Places
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {destinations.length === 0 && (
                <div className="text-center py-32 border-2 border-dashed border-border/50 rounded-3xl bg-muted/10">
                    <div className="bg-muted p-4 rounded-full w-fit mx-auto mb-4">
                        <Globe className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">No destinations yet</h3>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">Start building your portfolio of destinations to link with packages.</p>
                    <Link href="/destinations/new">
                        <Button size="lg">
                            <Plus className="w-4 h-4 mr-2" />
                            Add First Destination
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
