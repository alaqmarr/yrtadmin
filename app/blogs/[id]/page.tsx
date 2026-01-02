import { prisma } from "@/lib/db";
import Link from "next/link";
import { ArrowLeft, User, Calendar, Pencil, Share2, Printer, ImageIcon, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DeleteButton } from "@/components/DeleteButton";
import { deleteBlogAction } from "@/app/actions/blog.server";

export const dynamic = "force-dynamic";

export default async function BlogViewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await prisma.blogs.findUnique({
    where: { id },
    include: { categories: true, images: true },
  });

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Story not found</h2>
          <Button asChild variant="link">
            <Link href="/blogs">← Return to Blogs</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 animate-in fade-in duration-500">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="-ml-3 text-muted-foreground hover:text-foreground">
            <Link href="/blogs">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Printer className="w-4 h-4" />
            </Button>
            <div className="w-px h-4 bg-border mx-1" />
            <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
              <Link href={`/blogs/${blog.id}/edit`}>
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Link>
            </Button>
            <DeleteButton
              id={blog.id}
              onDelete={deleteBlogAction}
              itemType="blog"
              className="text-red-500 hover:bg-red-50 hover:text-red-600"
              iconOnly
            />
          </div>
        </div>
      </div>


      <article className="max-w-4xl mx-auto px-6 pt-12">
        {/* Header */}
        <div className="space-y-6 text-center max-w-2xl mx-auto mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {blog.categories.map(cat => (
              <Badge key={cat.id} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors uppercase tracking-widest text-[10px] px-2 py-0.5">
                {cat.name}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground">
            {blog.title}
          </h1>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <span className="font-medium text-foreground">{blog.author}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(blog.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        {blog.thumbnail && (
          <div className="relative aspect-[2/1] rounded-3xl overflow-hidden shadow-2xl mb-16">
            <img src={blog.thumbnail} alt={blog.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-2xl mx-auto prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-2xl prose-img:shadow-lg leading-relaxed text-muted-foreground">
          <div dangerouslySetInnerHTML={{ __html: blog.html }} />
        </div>

        {/* Image Gallery */}
        {blog.images.length > 0 && (
          <div className="max-w-5xl mx-auto mt-20 pt-12 border-t border-border/40">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <ImageIcon className="w-6 h-6 text-primary" />
              Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blog.images.map((img) => (
                <div key={img.id} className="group relative aspect-square bg-muted rounded-2xl overflow-hidden cursor-zoom-in">
                  <img src={img.url} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
