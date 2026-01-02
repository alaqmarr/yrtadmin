import { prisma } from "@/lib/db";
import BlogForm from "@/components/BlogForm";

interface Props { params: Promise<{ id: string }> }

export default async function BlogEditPage({ params }: Props) {
  const { id } = await params;

  // Fetch initial data on the server
  const blog = await prisma.blogs.findUnique({
    where: { id },
    include: { categories: true, images: true },
  });

  if (!blog) {
    return <div className="p-10 text-center">Blog not found</div>;
  }

  return (
    <div className="p-8">
      <BlogForm id={id} initialData={blog} />
    </div>
  );
}
