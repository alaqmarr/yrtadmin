"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ArrowLeft, Loader2, Star, Save } from "lucide-react";
import Link from "next/link";
import DropzoneClient from "@/components/DropzoneClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createTestimonialAction, updateTestimonialAction } from "@/app/actions/testimonial.server";

interface Props {
    id?: string;
    initialData?: {
        image?: string | null;
        rating: number;
        description: string;
        author: string;
        role: string;
    };
}

export default function TestimonialForm({ id, initialData }: Props) {
    const router = useRouter();
    const isEdit = !!id;
    const [saving, setSaving] = useState(false);

    const [author, setAuthor] = useState(initialData?.author || "");
    const [role, setRole] = useState(initialData?.role || "");
    const [description, setDescription] = useState(initialData?.description || "");
    const [rating, setRating] = useState(initialData?.rating || 5);
    const [image, setImage] = useState(initialData?.image || "");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!author.trim()) return toast.error("Client name is required");
        if (!description.trim()) return toast.error("Description is required");

        setSaving(true);
        try {
            const payload = {
                image: image || undefined,
                rating,
                description,
                author,
                role,
            };

            if (isEdit && id) {
                await updateTestimonialAction(id, payload);
                toast.success("Testimonial updated");
            } else {
                await createTestimonialAction(payload);
                toast.success("Testimonial added");
                router.push("/testimonials");
            }
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to save testimonial");
        } finally {
            setSaving(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-border/40">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild className="rounded-full shrink-0">
                        <Link href="/testimonials">
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                            {isEdit ? "Edit Testimonial" : "New Testimonial"}
                        </h1>
                        <p className="text-sm sm:text-base text-muted-foreground">
                            {isEdit ? "Update client feedback." : "Add a new client review."}
                        </p>
                    </div>
                </div>
                <Button type="submit" size="lg" disabled={saving} className="rounded-full w-full sm:w-auto min-w-[140px]">
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Save className="w-4 h-4 mr-2" /> Save Review</>}
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Image & Rating */}
                <div className="space-y-6">
                    <Card className="border-none shadow-sm bg-muted/20">
                        <CardHeader>
                            <CardTitle>Client Photo</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <DropzoneClient multiple={false} onUploadComplete={(urls) => setImage(urls[0])} />
                            {image && (
                                <div className="mt-4 relative rounded-xl overflow-hidden aspect-square group border border-border/50">
                                    <img src={image} alt="Preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Button variant="destructive" size="sm" onClick={() => setImage("")}>Remove</Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm bg-muted/20">
                        <CardHeader>
                            <CardTitle>Rating</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        className={`p-1 hover:scale-110 transition-transform focus:outline-none ${rating >= star ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                                    >
                                        <Star className={`w-8 h-8 ${rating >= star ? "fill-current" : ""}`} />
                                    </button>
                                ))}
                            </div>
                            <p className="text-center mt-2 font-bold text-lg">{rating} / 5 Stars</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Content */}
                <div className="md:col-span-2 space-y-6">
                    <Card className="border-none shadow-sm h-full">
                        <CardContent className="p-6 space-y-6">
                            <div className="grid gap-2">
                                <Label>Client Name <span className="text-red-500">*</span></Label>
                                <Input
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    placeholder="e.g. Mr. Hussain Eranpurwala"
                                    className="text-lg font-medium"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label>Role / Location</Label>
                                <Input
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    placeholder="e.g. Mumbai, India"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label>Testimonial Text <span className="text-red-500">*</span></Label>
                                <Textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Write the review here..."
                                    className="min-h-[200px] text-base leading-relaxed p-4"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </form>
    );
}
