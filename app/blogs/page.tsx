import { prisma } from "@/lib/db";
import Link from "next/link";
import { Plus, Edit2, Calendar, User, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 p-2 md:p-0">
      <div className="flex flex-col sm:flex-row justify-between items-end pb-6 border-b border-border/40 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Blogs</h1>
          <p className="text-muted-foreground mt-2 text-lg">Manage thoughts, stories, and articles.</p>
        </div>

        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/blogs/new">
            <Plus className="w-5 h-5 mr-2" />
            Write Blog
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogs.map((blog, i) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}/edit`}
            className="group"
          >
            <Card className="h-full border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white/50 backdrop-blur-sm">
              <div className="aspect-[16/10] bg-muted relative overflow-hidden">
                {blog.thumbnail ? (
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <FileText className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                )}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {blog.categories.slice(0, 2).map((cat) => (
                    <Badge key={cat.id} variant="secondary" className="bg-background/80 backdrop-blur text-xs font-medium border-none">
                      {cat.name}
                    </Badge>
                  ))}
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={(e) => e.preventDefault()}>
                  <DeleteButton id={blog.id} onDelete={deleteBlogAction} itemType="blog" className="bg-white/80 hover:bg-destructive hover:text-white backdrop-blur-sm h-8 w-8 rounded-full" />
                </div>
              </div>

              <CardContent className="p-5 flex flex-col h-[calc(100%-aspect-[16/10])] ">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blog.author}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between text-sm font-medium text-primary">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="text-center py-32 border-2 border-dashed border-border/50 rounded-3xl bg-muted/10">
          <div className="bg-muted p-4 rounded-full w-fit mx-auto mb-4">
            <FileText className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-bold mb-2">No blogs yet</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Start sharing your stories and updates with the world.</p>
          <Link href="/blogs/new">
            <Button size="lg">
              <Plus className="w-4 h-4 mr-2" />
              Write First Blog
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
