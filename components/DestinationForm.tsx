"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DropzoneClient from "@/components/DropzoneClient";
import { createDestinationAction, updateDestinationAction } from "@/app/actions/destination.server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, X, MapPin, HelpCircle, Save, ArrowLeft, GripVertical } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";

interface FAQ {
    question: string;
    answer: string;
}

interface Place {
    name: string;
    description: string;
    image?: string;
}

interface Props {
    id?: string; // If present, edit mode
    initialData?: {
        name: string;
        tag?: string | null;
        title?: string | null;
        description?: string | null;
        image?: string | null;
        country?: string | null;
        visa?: string | null;
        languagesSpoken?: string | null;
        currency?: string | null;
        faqs?: FAQ[];
        places?: Place[];
    };
}

export default function DestinationForm({ id, initialData }: Props) {
    const router = useRouter();
    const isEdit = !!id;

    const [loading, setLoading] = useState(false);

    // Form State
    const [name, setName] = useState(initialData?.name || "");
    const [tag, setTag] = useState(initialData?.tag || "");
    const [title, setTitle] = useState(initialData?.title || "");
    const [country, setCountry] = useState(initialData?.country || "");
    const [description, setDescription] = useState(initialData?.description || "");
    const [image, setImage] = useState(initialData?.image || "");
    const [visa, setVisa] = useState(initialData?.visa || "");
    const [currency, setCurrency] = useState(initialData?.currency || "");
    const [languages, setLanguages] = useState(initialData?.languagesSpoken || "");

    // Nested Lists
    const [faqs, setFaqs] = useState<FAQ[]>(initialData?.faqs || []);
    const [places, setPlaces] = useState<Place[]>(initialData?.places || []);

    // Helper: Add FAQ
    const addFaq = () => setFaqs([...faqs, { question: "", answer: "" }]);
    const removeFaq = (idx: number) => setFaqs(faqs.filter((_, i) => i !== idx));
    const updateFaq = (idx: number, field: keyof FAQ, val: string) => {
        const newFaqs = [...faqs];
        newFaqs[idx][field] = val;
        setFaqs(newFaqs);
    };

    // Helper: Add Place
    const addPlace = () => setPlaces([...places, { name: "", description: "", image: "" }]);
    const removePlace = (idx: number) => setPlaces(places.filter((_, i) => i !== idx));
    const updatePlace = (idx: number, field: keyof Place, val: string) => {
        const newPlaces = [...places];
        // @ts-ignore
        newPlaces[idx][field] = val;
        setPlaces(newPlaces);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            name,
            tag,
            title,
            description,
            image,
            country,
            visa,
            currency,
            languagesSpoken: languages,
            faqs: faqs.filter(f => f.question.trim()), // Filter empty
            places: places.filter(p => p.name.trim()),
        };

        try {
            if (isEdit && id) {
                await updateDestinationAction(id, payload);
                toast.success("Destination updated successfully");
            } else {
                await createDestinationAction(payload);
                toast.success("Destination created successfully");
                router.push("/destinations");
            }
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to save destination");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSave} className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-4 border-b border-border/40">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild className="rounded-full">
                        <Link href="/destinations">
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight">
                            {isEdit ? "Edit Destination" : "New Destination"}
                        </h1>
                        <p className="text-muted-foreground">
                            {isEdit ? `Managing content for ${name}` : "Create a new travel destination"}
                        </p>
                    </div>
                </div>
                <Button type="submit" size="lg" disabled={loading} className="rounded-full min-w-[140px]">
                    {loading ? "Saving..." : <><Save className="w-4 h-4 mr-2" /> Save Content</>}
                </Button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Left Column: Core Info */}
                <div className="xl:col-span-1 space-y-6">
                    <Card className="border-none shadow-sm bg-muted/20">
                        <CardHeader>
                            <CardTitle>Basic Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Destination Name</Label>
                                <Input value={name} onChange={e => setName(e.target.value)} required placeholder="e.g. Paris" className="bg-background" />
                            </div>
                            <div className="space-y-2">
                                <Label>Country</Label>
                                <Input value={country} onChange={e => setCountry(e.target.value)} placeholder="e.g. France" className="bg-background" />
                            </div>
                            <div className="space-y-2">
                                <Label>Tag / Category</Label>
                                <Input value={tag} onChange={e => setTag(e.target.value)} placeholder="e.g. Romantic, Adventure" className="bg-background" />
                            </div>
                            <div className="space-y-2">
                                <Label>Main Image</Label>
                                <div className="border border-dashed rounded-lg p-2 bg-background">
                                    <DropzoneClient multiple={false} onUploadComplete={urls => setImage(urls[0])} />
                                    {image && <img src={image} className="mt-2 rounded-md aspect-video object-cover w-full" />}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm bg-muted/20">
                        <CardHeader>
                            <CardTitle>Travel Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Currency</Label>
                                <Input value={currency} onChange={e => setCurrency(e.target.value)} placeholder="e.g. Euro (€)" className="bg-background" />
                            </div>
                            <div className="space-y-2">
                                <Label>Visa Info</Label>
                                <Input value={visa} onChange={e => setVisa(e.target.value)} placeholder="e.g. Schengen Visa" className="bg-background" />
                            </div>
                            <div className="space-y-2">
                                <Label>Languages</Label>
                                <Input value={languages} onChange={e => setLanguages(e.target.value)} placeholder="e.g. French, English" className="bg-background" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Rich Content */}
                <div className="xl:col-span-2 space-y-6">
                    <Card className="border-none shadow-sm bg-background">
                        <CardContent className="p-6 space-y-4">
                            <div className="space-y-2">
                                <Label className="text-lg font-semibold">Tagline / Title</Label>
                                <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="A catchy header for the page page" className="text-lg p-6" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-lg font-semibold">About Destination</Label>
                                <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Write a compelling description..." className="min-h-[150px] text-base" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Places Section */}
                    <Card className="border-none shadow-sm bg-background">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <CardTitle>Popular Places</CardTitle>
                            </div>
                            <Button onClick={addPlace} variant="outline" size="sm" className="rounded-full">
                                <Plus className="w-4 h-4 mr-2" /> Add Place
                            </Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {places.map((place, i) => (
                                <div key={i} className="group relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 p-4 rounded-xl border border-border/40 hover:border-primary/50 transition-colors bg-muted/10">
                                    <div className="h-full">
                                        <div className="w-[120px] h-[100px] rounded-lg bg-muted flex items-center justify-center overflow-hidden relative">
                                            {place.image ? (
                                                <img src={place.image} className="w-full h-full object-cover" />
                                            ) : (
                                                <span className="text-xs text-muted-foreground">No Img</span>
                                            )}
                                            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                                                <DropzoneClient multiple={false} onUploadComplete={urls => updatePlace(i, 'image', urls[0])} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex gap-2">
                                            <Input
                                                value={place.name}
                                                onChange={e => updatePlace(i, 'name', e.target.value)}
                                                onKeyDown={e => {
                                                    if (e.key === 'Enter' && e.shiftKey) { e.preventDefault(); addPlace(); }
                                                }}
                                                placeholder="Place Name"
                                                className="font-semibold"
                                            />
                                            <Button variant="ghost" size="icon" onClick={() => removePlace(i)} className="text-muted-foreground hover:text-destructive shrink-0">
                                                <X className="w-4 h-4" />
                                            </Button>
                                        </div>
                                        <Textarea
                                            value={place.description}
                                            onChange={e => updatePlace(i, 'description', e.target.value)}
                                            onKeyDown={e => {
                                                if (e.key === 'Enter' && e.shiftKey) { e.preventDefault(); addPlace(); }
                                            }}
                                            placeholder="Description..."
                                            className="min-h-[60px] resize-none"
                                        />
                                    </div>
                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-background border rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-move text-muted-foreground hidden md:block">
                                        <GripVertical className="w-3 h-3" />
                                    </div>
                                </div>
                            ))}
                            {places.length === 0 && <div className="text-center p-8 text-muted-foreground text-sm italic">No places added yet. Click "Add Place" or press Shift+Enter to start.</div>}
                        </CardContent>
                    </Card>

                    {/* FAQs Section */}
                    <Card className="border-none shadow-sm bg-background">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div className="flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-primary" />
                                <CardTitle>FAQs</CardTitle>
                            </div>
                            <Button onClick={addFaq} variant="outline" size="sm" className="rounded-full">
                                <Plus className="w-4 h-4 mr-2" /> Add FAQ
                            </Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="flex gap-4 items-start p-4 rounded-xl border border-border/40 hover:border-primary/50 transition-colors bg-muted/10">
                                    <div className="flex-1 space-y-3">
                                        <Input
                                            value={faq.question}
                                            onChange={e => updateFaq(i, 'question', e.target.value)}
                                            placeholder="Question"
                                            className="font-medium bg-background"
                                        />
                                        <Textarea
                                            value={faq.answer}
                                            onChange={e => updateFaq(i, 'answer', e.target.value)}
                                            onKeyDown={e => {
                                                if (e.key === 'Enter' && e.shiftKey) { e.preventDefault(); addFaq(); }
                                            }}
                                            placeholder="Answer..."
                                            className="min-h-[60px] bg-background resize-none"
                                        />
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => removeFaq(i)} className="text-muted-foreground hover:text-destructive mt-1">
                                        <X className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                            {faqs.length === 0 && <div className="text-center p-8 text-muted-foreground text-sm italic">No FAQs added yet.</div>}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </form>
    );
}
