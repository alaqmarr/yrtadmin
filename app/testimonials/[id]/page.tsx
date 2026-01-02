import { prisma } from "@/lib/db";
import Link from "next/link";
import { ArrowLeft, User, Quote, Star, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "@/components/DeleteButton";
import { deleteTestimonialAction } from "@/app/actions/testimonial.server";

export const dynamic = "force-dynamic";

export default async function TestimonialViewPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const t = await prisma.testimonial.findUnique({
        where: { id },
    });

    if (!t) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Testimonial not found</h2>
                    <Button asChild variant="link">
                        <Link href="/testimonials">← Return to Testimonials</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6 animate-in fade-in duration-500">
            <div className="max-w-3xl w-full bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                {/* Giant Quote Watermark */}
                <Quote className="absolute top-6 right-6 w-32 h-32 text-primary/5 rotate-180" />

                {/* Navigation */}
                <div className="relative z-10 mb-10 flex justify-between items-center">
                    <Button asChild variant="ghost" className="-ml-3 text-muted-foreground hover:text-foreground">
                        <Link href="/testimonials">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                        </Link>
                    </Button>

                    <div className="flex gap-2">
                        <Button asChild variant="outline" size="icon" className="rounded-full">
                            <Link href={`/testimonials/${t.id}/edit`}>
                                <Pencil className="w-4 h-4" />
                            </Link>
                        </Button>
                        <DeleteButton
                            id={t.id}
                            onDelete={deleteTestimonialAction}
                            itemType="testimonial"
                            className="rounded-full"
                            iconOnly
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center space-y-8">
                    <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, idx) => (
                            <Star
                                key={idx}
                                className={`w-6 h-6 ${idx < t.rating ? "fill-orange-400 text-orange-400" : "fill-muted text-muted"}`}
                            />
                        ))}
                    </div>

                    <p className="text-2xl md:text-3xl font-medium leading-relaxed italic text-foreground/90 font-serif">
                        "{t.description}"
                    </p>

                    <div className="pt-8 flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-muted overflow-hidden ring-4 ring-background shadow-lg">
                            {t.image ? (
                                <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-bold text-2xl">
                                    {t.author[0]}
                                </div>
                            )}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">{t.author}</h3>
                            <p className="text-muted-foreground font-medium">{t.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
