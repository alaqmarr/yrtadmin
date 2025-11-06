// app/destinations/page.tsx
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function DestinationsList() {
    const destinations = await prisma.destinations.findMany({ orderBy: { createdAt: "desc" } });

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold mb-6">Destinations</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {destinations.map((d) => (
                    <div key={d.id} className="border rounded-lg overflow-hidden shadow-sm">
                        <img src={d.image} alt={d.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-semibold">{d.title || d.name}</h3>
                            <p className="text-sm text-slate-600">{d.country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
