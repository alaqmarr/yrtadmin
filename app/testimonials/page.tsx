import { prisma } from "@/lib/db";
import Link from "next/link";
import { Plus, MessageSquare, Star, Quote, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "@/components/DeleteButton";
import { deleteTestimonialAction } from "@/app/actions/testimonial.server";

export const dynamic = "force-dynamic";

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border/40 pb-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Testimonials
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            What people are saying. Manage feedback and reviews.
          </p>
        </div>

        <Link href="/testimonials/new">
          <Button size="lg" className="rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all h-11 px-6">
            <MessageSquare className="w-5 h-5 mr-2" />
            <span className="font-semibold">Add Review</span>
          </Button>
        </Link>
      </div>

      {/* Modern Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className="group relative flex flex-col h-full bg-card rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            {/* Giant Quote Watermark */}
            <Quote className="absolute top-6 right-6 w-24 h-24 text-primary/5 rotate-180 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />

            {/* Stars */}
            <div className="relative z-10 flex gap-0.5 mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-4 h-4 ${idx < t.rating ? "fill-orange-400 text-orange-400 drop-shadow-sm" : "fill-muted text-muted"}`}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 mb-8">
              <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90 italic font-serif">
                "{t.description}"
              </p>
            </div>

            {/* Author Block */}
            <div className="relative z-10 flex items-center gap-4 mt-auto pt-6 border-t border-border/40">
              <div className="w-12 h-12 rounded-full ring-2 ring-background ring-offset-2 ring-offset-border overflow-hidden shrink-0 shadow-md">
                {t.image ? (
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary/60 text-primary-foreground font-bold text-lg">
                    {t.author[0]}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-base truncate">{t.author}</h4>
                <p className="text-sm text-muted-foreground truncate font-medium">{t.role}</p>
              </div>
            </div>

            {/* Actions (Floating) */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:-translate-y-2 md:group-hover:translate-y-0 z-20">
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur border border-border/50 hover:bg-background" asChild>
                <Link href={`/testimonials/${t.id}/edit`}>
                  <MessageCircle className="w-4 h-4" />
                </Link>
              </Button>
              <DeleteButton id={t.id} onDelete={deleteTestimonialAction} itemType="testimonial" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur border border-border/50 hover:bg-destructive hover:text-white" />
            </div>
          </div>
        ))}
      </div>

      {testimonials.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 text-center space-y-4 border-2 border-dashed border-border/50 rounded-3xl bg-muted/5">
          <div className="p-4 bg-muted/20 rounded-full">
            <MessageSquare className="w-10 h-10 text-muted-foreground/50" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold">No testimonials yet</h3>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Start collecting feedback from your community.
            </p>
          </div>
          <Link href="/testimonials/new">
            <Button>
              Add Testimonial
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
