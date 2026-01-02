import { prisma } from "@/lib/db";
import Link from "next/link";
import {
    MapPin,
    Globe,
    ArrowLeft,
    Pencil,
    Mountain,
    Package as PackageIcon,
    Tent,
    ArrowRight,
    Edit
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DeleteButton } from "@/components/DeleteButton";
import { deleteDestinationAction } from "@/app/actions/destination.server";

export const dynamic = "force-dynamic";

export default async function ViewDestinationPage({ params }: { params: Promise<{ id: string }> }) {
    const dest = await prisma.destinations.findFirst({
        where: { id: (await params).id },
        include: {
            places: true,
            packages: true, // Assuming relation exists now
        },
    });

    if (!dest) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Destination not found</h2>
                    <Button asChild variant="link">
                        <Link href="/destinations">← Return to Destinations</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pb-20 animate-in fade-in duration-500">
            {/* Parallax Header */}
            <div className="relative h-[50vh] md:h-[60vh] overflow-hidden group">
                {dest.image ? (
                    <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover fixed-parallax"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    />
                ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                        <Globe className="w-20 h-20 text-muted-foreground/30" />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-black/30" />

                <div className="absolute top-6 left-6 z-20">
                    <Button asChild variant="secondary" className="rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 border border-white/20">
                        <Link href="/destinations">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                        </Link>
                    </Button>
                </div>

                <div className="absolute bottom-0 left-0 p-6 md:p-12 z-20 w-full">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
                        <div>
                            <Badge variant="outline" className="text-white border-white/40 backdrop-blur-md bg-white/10 px-3 py-1 mb-4 uppercase tracking-[0.2em]">
                                {dest.country}
                            </Badge>
                            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-lg leading-none">
                                {dest.name}
                            </h1>
                        </div>

                        <div className="flex gap-3">
                            <Button asChild size="lg" className="rounded-full h-12 px-6 shadow-xl shadow-primary/20">
                                <Link href={`/destinations/${dest.id}/edit`}>
                                    <Edit className="w-4 h-4 mr-2" />
                                    Edit Content
                                </Link>
                            </Button>
                            <DeleteButton
                                id={dest.id}
                                onDelete={deleteDestinationAction}
                                itemType="destination"
                                className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-destructive hover:text-white border border-white/20"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 space-y-20">
                {/* Stats / Places Grid */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-black tracking-tight flex items-center gap-3">
                            <Tent className="w-8 h-8 text-primary" />
                            Places to Visit
                        </h2>
                        <Badge variant="secondary" className="px-3 py-1 text-base">
                            {dest.places.length} Locations
                        </Badge>
                    </div>

                    {dest.places.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {dest.places.map((place) => (
                                <div key={place.id} className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <div className="aspect-video bg-muted relative overflow-hidden">
                                        {place.image ? (
                                            <img src={place.image} alt={place.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Mountain className="w-10 h-10 text-muted-foreground/30" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-lg font-bold text-white leading-tight">{place.name}</h3>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                                            {place.description || "No description available."}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-muted/10 border-2 border-dashed border-border/50 rounded-3xl p-12 text-center">
                            <div className="bg-muted/20 w-fit mx-auto p-4 rounded-full mb-4">
                                <Tent className="w-8 h-8 text-muted-foreground/50" />
                            </div>
                            <h3 className="text-lg font-bold">No places added yet</h3>
                            <p className="text-muted-foreground mb-6">Start adding attractions to this destination.</p>
                            <Button asChild variant="outline">
                                <Link href={`/destinations/${dest.id}/edit`}>Manager Places</Link>
                            </Button>
                        </div>
                    )}
                </section>

                {/* Linked Packages */}
                {dest.packages && dest.packages.length > 0 && (
                    <section>
                        <h2 className="text-3xl font-black tracking-tight flex items-center gap-3 mb-8">
                            <PackageIcon className="w-8 h-8 text-primary" />
                            Available Packages
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {dest.packages.map((pkg) => (
                                <Link key={pkg.id} href={`/packages/${pkg.id}`} className="group block">
                                    <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                                        <div className="aspect-[4/3] bg-muted relative">
                                            {pkg.image && <img src={pkg.image} className="w-full h-full object-cover" />}
                                            <div className="absolute top-2 right-2">
                                                <Badge className="backdrop-blur-md bg-black/50 text-white border-none">
                                                    {pkg.days}D/{pkg.nights}N
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold truncate group-hover:text-primary transition-colors">{pkg.name}</h3>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-sm text-muted-foreground">From</span>
                                                <span className="font-bold text-primary">₹{Number(pkg.price).toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
