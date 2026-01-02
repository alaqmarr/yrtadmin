"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Loader2, X, ArrowLeft } from "lucide-react";
import Link from "next/link";

import RichTextEditor from "@/components/RichTextEditor";
import DropzoneClient from "@/components/DropzoneClient";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createBlogAction, updateBlogAction } from "@/app/actions/blog.server";

interface BlogFormProps {
    id?: string;
    initialData?: any;
}

export default function BlogForm({ id, initialData }: BlogFormProps) {
    const router = useRouter();
    const isEditMode = !!id;

    const [saving, setSaving] = useState(false);
    const [title, setTitle] = useState(initialData?.title || "");
    const [author, setAuthor] = useState(initialData?.author || "");
    const [html, setHtml] = useState(initialData?.html || "");
    const [thumbnail, setThumbnail] = useState(initialData?.thumbnail || "");
    const [categories, setCategories] = useState(
        initialData?.categories
            ? initialData.categories.map((c: any) => c.name).join(", ")
            : ""
    );
    const [images, setImages] = useState<string[]>(
        initialData?.images?.map((i: any) => i.url) || []
    );

    const handleSubmit = async () => {
        if (!title || !author) {
            toast.error("Title and Author are required");
            return;
        }

        setSaving(true);
        try {
            const data = {
                title,
                author,
                html,
                thumbnail,
                categories: categories.split(",").map((c: any) => c.trim()).filter(Boolean),
                images,
            };

            if (isEditMode && id) {
                await updateBlogAction(id, data);
                toast.success("Blog updated successfully");
            } else {
                await createBlogAction(data);
                toast.success("Blog published successfully");
                router.push("/blogs");
            }
        } catch (error) {
            console.error(error);
            toast.error(isEditMode ? "Failed to update blog" : "Failed to create blog");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild className="h-10 w-10 rounded-full border-border/60">
                        <Link href="/blogs">
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">
                            {isEditMode ? "Edit Blog Post" : "Compose New Blog"}
                        </h1>
                        <p className="text-muted-foreground">
                            {isEditMode ? "Update your article content and settings." : "Share your thoughts and travel stories."}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="ghost" onClick={() => router.back()}>Cancel</Button>
                    <Button onClick={handleSubmit} disabled={saving} size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                        {saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                        {isEditMode ? "Save Changes" : "Publish Post"}
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LEFT COLUMN: Main Editor (2/3) */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="border-none shadow-sm bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle>Article Details</CardTitle>
                            <CardDescription>Basic information about this post.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-3">
                                <Label htmlFor="title" className="text-base font-semibold">Blog Title <span className="text-red-500">*</span></Label>
                                <Input
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="text-lg py-6"
                                    placeholder="e.g. The Hidden Gems of Bali"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="author">Author <span className="text-red-500">*</span></Label>
                                    <Input
                                        id="author"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        placeholder="e.g. Jane Doe"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="categories">Categories</Label>
                                    <Input
                                        id="categories"
                                        value={categories}
                                        onChange={(e) => setCategories(e.target.value)}
                                        placeholder="Travel, Tips, Adventure (comma separated)"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="rounded-xl border border-border/60 bg-card overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-border/40 bg-muted/20">
                            <h3 className="font-semibold">Content Editor</h3>
                        </div>
                        <RichTextEditor value={html} onChange={setHtml} />
                    </div>
                </div>

                {/* RIGHT COLUMN: Media & Metadata (1/3) */}
                <div className="space-y-6">
                    {/* THUMBNAIL */}
                    <Card className="border-none shadow-sm overflow-hidden">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base">Featured Image</CardTitle>
                            <CardDescription>The main cover image for your blog.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {thumbnail ? (
                                    <div className="relative rounded-lg overflow-hidden aspect-video group border border-border/50">
                                        <img src={thumbnail} alt="Thumbnail" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                            <Button variant="destructive" size="sm" onClick={() => setThumbnail("")}>Remove Image</Button>
                                        </div>
                                    </div>
                                ) : (
                                    <DropzoneClient
                                        multiple={false}
                                        onUploadComplete={(urls) => {
                                            if (urls.length) setThumbnail(urls[0]);
                                        }}
                                    />
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* GALLERY */}
                    <Card className="border-none shadow-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base">Image Gallery</CardTitle>
                            <CardDescription>Additional images for the blog post.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4">
                                <DropzoneClient
                                    multiple={true}
                                    onUploadComplete={(urls) => {
                                        setImages(prev => [...prev, ...urls]);
                                        toast.success(`Added ${urls.length} images`);
                                    }}
                                />
                            </div>

                            {images.length > 0 && (
                                <div className="grid grid-cols-3 gap-2 mt-4">
                                    {images.map((url, idx) => (
                                        <div key={idx} className="relative aspect-square rounded-md overflow-hidden group border border-border/40">
                                            <img src={url} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                                <Button
                                                    variant="destructive"
                                                    size="icon"
                                                    className="h-6 w-6 rounded-full"
                                                    onClick={() => setImages(images.filter((_, i) => i !== idx))}
                                                >
                                                    <X className="w-3 h-3" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
