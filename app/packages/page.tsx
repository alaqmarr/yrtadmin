import { prisma } from "@/lib/db";
import Link from "next/link";
import { PlusCircle, Search, MapPin, Calendar, CreditCard, ArrowRight, Package as PackageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
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
        <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 p-2 md:p-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Packages</h1>
                    <p className="text-muted-foreground">Manage your travel packages and itineraries.</p>
                </div>

                <Link href="/packages/new">
                    <Button className="rounded-full shadow-lg shadow-primary/20">
                        <PlusCircle className="w-4 h-4 mr-2" />
                        Create Package
                    </Button>
                </Link>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2 max-w-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search packages..."
                        className="pl-9 bg-white border-none shadow-sm"
                    // Start simple for now, can add client side search later or use form submission
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg, i) => (
                    <Card
                        key={pkg.id}
                        className="group relative overflow-hidden border-none shadow-none bg-transparent hover:bg-transparent"
                        style={{ animationDelay: `${i * 100}ms` }}
                    >
                        <div className="aspect-[4/3] rounded-2xl bg-muted relative overflow-hidden mb-4">
                            <Link href={`/packages/${pkg.id}`} className="absolute inset-0 z-10">
                                <span className="sr-only">View {pkg.name}</span>
                            </Link>
                            {pkg.image ? (
                                <img
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-muted/50">
                                    <PackageIcon className="w-10 h-10 opacity-20" />
                                </div>
                            )}
                            <div className="absolute top-4 right-4 z-20">
                                <Badge variant="secondary" className="backdrop-blur-md bg-white/80 text-foreground shadow-sm">
                                    {pkg.days}D / {pkg.nights}N
                                </Badge>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                                    {pkg.name}
                                </h3>
                                <p className="font-semibold text-primary shrink-0">
                                    ₹{Number(pkg.price).toLocaleString('en-IN')}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-3.5 h-3.5" />
                                <span className="truncate">{pkg.location || "Unknown Location"}</span>
                            </div>

                            <div className="pt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <Button variant="secondary" size="sm" className="w-full h-8 rounded-full" asChild>
                                    <Link href={`/packages/${pkg.id}/edit`}>Edit Package</Link>
                                </Button>
                                <DeleteButton id={pkg.id} onDelete={deletePackageAction} itemType="package" className="h-8 w-8 rounded-full bg-white/80 hover:bg-destructive hover:text-white" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {packages.length === 0 && (
                <div className="text-center py-20 border-2 border-dashed rounded-3xl bg-muted/30">
                    <PackageIcon className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
                    <h3 className="text-lg font-semibold">No packages found</h3>
                    <p className="text-muted-foreground mb-6">Create your first travel package to get started.</p>
                    <Link href="/packages/new">
                        <Button>
                            <PlusCircle className="w-4 h-4 mr-2" />
                            Create Package
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
}