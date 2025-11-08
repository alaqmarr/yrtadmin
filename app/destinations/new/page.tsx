"use client";

import { useState } from "react";
import DropzoneClient from "@/components/DropzoneClient";
import { createDestinationAction } from "@/app/actions/destination.server";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function NewDestinationPage() {
    const router = useRouter();
    const [imageUrl, setImageUrl] = useState<string>("");
    const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([
        { question: "", answer: "" },
    ]);
    const [places, setPlaces] = useState<{ name: string; description: string }[]>([
        { name: "", description: "" },
    ]);
    const [loading, setLoading] = useState(false);

    const handleAddFaq = () => {
        setFaqs([...faqs, { question: "", answer: "" }]);
    };

    const handleFaqChange = (index: number, field: "question" | "answer", value: string) => {
        const updated = [...faqs];
        updated[index][field] = value;
        setFaqs(updated);
    };

    const handleRemoveFaq = (index: number) => {
        if (faqs.length > 1) {
            const updated = faqs.filter((_, i) => i !== index);
            setFaqs(updated);
        }
    };
    const handleAddPlace = () => {
        setPlaces([...places, { name: "", description: "" }]);
    };

    const handlePlaceChange = (index: number, field: "name" | "description", value: string) => {
        const updated = [...places];
        updated[index][field] = value;
        setPlaces(updated);
    };

    const handleRemovePlace = (index: number) => {
        if (places.length > 1) {
            const updated = places.filter((_, i) => i !== index);
            setPlaces(updated);
        }
    };

    const validateForm = (formData: FormData): string | null => {
        const name = formData.get("name") as string;

        if (!name?.trim()) {
            return "Name is required";
        }

        if (name.trim().length < 2) {
            return "Name must be at least 2 characters";
        }

        const validFaqs = faqs.filter(f => f.question.trim() && f.answer.trim());
        if (validFaqs.length > 0 && validFaqs.some(f => f.question.trim().length < 5 || f.answer.trim().length < 5)) {
            return "FAQ questions and answers must be at least 5 characters";
        }
        const validPlaces = places.filter(f => f.name.trim() && f.description.trim());
        if (validPlaces.length > 0 && validPlaces.some(f => f.name.trim().length < 5 || f.description.trim().length < 5)) {
            return "Place names and descriptions must be at least 5 characters";
        }

        return null;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (loading) return;

        const formData = new FormData(e.currentTarget);

        const validationError = validateForm(formData);
        if (validationError) {
            toast.error(validationError);
            return;
        }

        setLoading(true);
        const toastId = toast.loading("Creating destination...");

        try {
            const name = (formData.get("name") as string).trim();
            const tag = (formData.get("tag") as string)?.trim() || null;
            const title = (formData.get("title") as string)?.trim() || null;
            const description = (formData.get("description") as string)?.trim() || null;
            const country = (formData.get("country") as string)?.trim() || null;
            const visa = (formData.get("visa") as string)?.trim() || null;
            const languagesSpoken = (formData.get("languagesSpoken") as string)?.trim() || null;
            const currency = (formData.get("currency") as string)?.trim() || null;

            const validFaqs = faqs.filter(f => f.question.trim() && f.answer.trim());
            const validPlaces = places.filter(p => p.name.trim() && p.description.trim());

            await createDestinationAction({
                name,
                tag: tag || undefined,
                title: title || undefined,
                description: description || undefined,
                image: imageUrl || undefined,
                country: country || undefined,
                visa: visa || undefined,
                languagesSpoken: languagesSpoken || undefined,
                currency: currency || undefined,
                faqs: validFaqs,
                places: validPlaces,
            });

            toast.success("Destination created successfully", { id: toastId });
            router.push("/destinations");
        } catch (err) {
            console.error("Failed to create destination:", err);
            const errorMessage = err instanceof Error ? err.message : "Failed to create destination";
            toast.error(errorMessage, { id: toastId });
        } finally {
            setLoading(false);
        }
    };

    const handleUploadError = (error: Error) => {
        console.error("Image upload failed:", error);
        toast.error("Failed to upload image. Please try again.");
    };

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Create Destination</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm mb-1 font-medium">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        name="name"
                        required
                        minLength={2}
                        maxLength={100}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-slate-400"
                        placeholder="Enter destination name"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1 font-medium">Tag</label>
                    <input
                        name="tag"
                        maxLength={50}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-slate-400"
                        placeholder="e.g., Beach, Mountain, City"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1 font-medium">Title</label>
                    <input
                        name="title"
                        maxLength={150}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-slate-400"
                        placeholder="Enter a catchy title"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1 font-medium">Country</label>
                    <input
                        name="country"
                        maxLength={100}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-slate-400"
                        placeholder="Enter country name"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1 font-medium">Visa Requirements</label>
                    <input
                        name="visa"
                        maxLength={200}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-slate-400"
                        placeholder="e.g., Visa on arrival, eVisa required"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1 font-medium">Languages Spoken</label>
                    <input
                        name="languagesSpoken"
                        maxLength={200}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-slate-400"
                        placeholder="e.g., English, Spanish, French"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1 font-medium">Currency</label>
                    <input
                        name="currency"
                        maxLength={50}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-slate-400"
                        placeholder="e.g., USD, EUR, GBP"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1 font-medium">Description</label>
                    <textarea
                        name="description"
                        maxLength={1000}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-slate-400"
                        rows={4}
                        placeholder="Describe the destination..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Image</label>
                    <DropzoneClient
                        multiple={false}
                        onUploadComplete={(urls) => {
                            if (urls.length > 0) {
                                setImageUrl(urls[0]);
                            }
                        }}
                    />
                    {imageUrl && (
                        <div className="mt-3 relative inline-block">
                            <img
                                src={imageUrl}
                                alt="Preview"
                                className="w-48 h-28 object-cover rounded"
                            />
                            <button
                                type="button"
                                onClick={() => setImageUrl("")}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                            >
                                ×
                            </button>
                        </div>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">FAQs</label>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border rounded-md p-3 space-y-2 bg-gray-50 relative"
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="font-medium text-sm">Question {index + 1}</h4>
                                    {faqs.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveFaq(index)}
                                            className="text-xs text-red-600 hover:text-red-800 font-medium"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    value={faq.question}
                                    onChange={(e) => handleFaqChange(index, "question", e.target.value)}
                                    placeholder="Enter question"
                                    maxLength={200}
                                    className="w-full border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                                />
                                <textarea
                                    value={faq.answer}
                                    onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
                                    placeholder="Enter answer"
                                    maxLength={500}
                                    className="w-full border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                                    rows={2}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={handleAddFaq}
                        className="mt-3 text-sm text-blue-600 underline hover:text-blue-800"
                    >
                        + Add another question
                    </button>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Nearby Places</label>
                    <div className="space-y-4">
                        {places.map((place, index) => (
                            <div
                                key={index}
                                className="border rounded-md p-3 space-y-2 bg-gray-50 relative"
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="font-medium text-sm">Place {index + 1}</h4>
                                    {places.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleRemovePlace(index)}
                                            className="text-xs text-red-600 hover:text-red-800 font-medium"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    value={place.name}
                                    onChange={(e) => handlePlaceChange(index, "name", e.target.value)}
                                    placeholder="Enter place name"
                                    maxLength={200}
                                    className="w-full border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                                />
                                <textarea
                                    value={place.description}
                                    onChange={(e) => handlePlaceChange(index, "description", e.target.value)}
                                    placeholder="Enter answer"
                                    maxLength={500}
                                    className="w-full border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                                    rows={2}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={handleAddPlace}
                        className="mt-3 text-sm text-blue-600 underline hover:text-blue-800"
                    >
                        + Add another place
                    </button>
                </div>

                <div className="pt-4 flex gap-3">
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-2 rounded bg-slate-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
                    >
                        {loading ? "Creating..." : "Create Destination"}
                    </button>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        disabled={loading}
                        className="px-4 py-2 rounded border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
