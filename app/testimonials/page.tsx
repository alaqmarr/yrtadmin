import { prisma } from "@/lib/db";
import Link from "next/link";
import { Plus, MessageSquare, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DeleteButton } from "@/components/DeleteButton"; // Reuse existing
import { deleteTestimonialAction } from "@/app/actions/testimonial.server";

export const dynamic = "force-dynamic";

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 p-2 md:p-0">
      <div className="flex flex-col sm:flex-row justify-between items-end pb-6 border-b border-border/40 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Testimonials</h1>
          <p className="text-muted-foreground mt-2 text-lg">Manage client reviews and feedback.</p>
        </div>

        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/testimonials/new">
            <Plus className="w-5 h-5 mr-2" />
            Add Testimonial
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className="group relative flex flex-col h-full bg-card border border-border/50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="p-6 flex-1 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <Quote className="w-8 h-8 text-primary/20 rotate-180" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className={`w-4 h-4 ${idx < t.rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground/30"}`} />
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground italic leading-relaxed line-clamp-4 flex-1">
                "{t.description}"
              </p>

              <div>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/40">
                  <div className="w-10 h-10 rounded-full bg-muted overflow-hidden shrink-0">
                    {t.image ? (
                      <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-bold">
                        {t.author[0]}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold truncate text-foreground">{t.author}</h4>
                    <p className="text-xs text-muted-foreground truncate">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
              <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-sm" asChild>
                <Link href={`/testimonials/${t.id}/edit`}>
                  <MessageSquare className="w-3 h-3" />
                </Link>
              </Button>
              <DeleteButton id={t.id} onDelete={deleteTestimonialAction} itemType="testimonial" className="h-8 w-8 rounded-full bg-white hover:bg-destructive hover:text-white" />
            </div>
          </div>
        ))}
      </div>

      {testimonials.length === 0 && (
        <div className="text-center py-32 border-2 border-dashed border-border/50 rounded-3xl bg-muted/10">
          <div className="bg-muted p-4 rounded-full w-fit mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-bold mb-2">No testimonials yet</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Start collecting feedback from your happy travelers.</p>
          <Link href="/testimonials/new">
            <Button size="lg">
              <Plus className="w-4 h-4 mr-2" />
              Add First Testimonial
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
