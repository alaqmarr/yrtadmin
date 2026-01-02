import { prisma } from "@/lib/db";
import Link from "next/link";
import { Plus, Pencil, Calendar, User, FileText, ArrowUpRight, PenTool, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DeleteButton } from "@/components/DeleteButton";
import { deleteBlogAction } from "@/app/actions/blog.server";

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const blogs = await prisma.blogs.findMany({
    orderBy: { createdAt: "desc" },
    include: { categories: true }
  });

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border/40 pb-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Editorial
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            Stories, updates, and travel guides.
          </p>
        </div>

        <Link href="/blogs/new">
          <Button size="lg" className="rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all h-11 px-6">
            <PenTool className="w-4 h-4 mr-2" />
            <span className="font-semibold">Write Story</span>
          </Button>
        </Link>
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <article
            key={blog.id}
            className="group flex flex-col gap-4"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] bg-muted rounded-2xl overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
              <Link href={`/blogs/${blog.id}`} className="block w-full h-full">
                {blog.thumbnail ? (
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <FileText className="w-12 h-12 text-muted-foreground/20" />
                  </div>
                )}
              </Link>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {blog.categories.slice(0, 2).map((cat) => (
                  <Badge key={cat.id} variant="secondary" className="bg-white/90 backdrop-blur text-foreground text-xs font-semibold px-2.5 py-0.5 shadow-sm border-none">
                    {cat.name}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-y-2 md:group-hover:translate-y-0">
                <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-white/90 shadow-sm backdrop-blur hover:bg-white" asChild>
                  <Link href={`/blogs/${blog.id}/edit`}><Edit2 className="w-3.5 h-3.5" /></Link>
                </Button>
                <DeleteButton id={blog.id} onDelete={deleteBlogAction} itemType="blog" className="h-8 w-8 rounded-full bg-white/90 hover:bg-destructive hover:text-white shadow-sm backdrop-blur" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-primary" />
                  {blog.author}
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{new Date(blog.createdAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>

              <Link href={`/blogs/${blog.id}/edit`} className="group-hover:text-primary transition-colors block">
                <h2 className="text-2xl font-bold leading-tight line-clamp-2 tracking-tight group-hover:underline decoration-2 underline-offset-4 decoration-primary/30">
                  {blog.title}
                </h2>
              </Link>

              <div className="flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors cursor-pointer w-fit">
                Read Story <ArrowUpRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 text-center space-y-4 border-2 border-dashed border-border/50 rounded-3xl bg-muted/5">
          <div className="p-4 bg-muted/20 rounded-full">
            <FileText className="w-10 h-10 text-muted-foreground/50" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold">The press is silent</h3>
            <p className="text-muted-foreground max-w-sm mx-auto">
              No articles published yet. Start writing yours.
            </p>
          </div>
          <Link href="/blogs/new">
            <Button>
              Draft First Post
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
