
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DropzoneClient from "@/components/DropzoneClient";
import RichTextEditor from "@/components/RichTextEditor";
import { DestinationSelect } from "@/components/DestinationSelect";
import toast from "react-hot-toast";
import { updatePackageAction, getPackageAction } from "@/app/actions/package.server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, X, Trash2, Wand2 } from "lucide-react";

type Inclusion = { id: string; item: string };
type Exclusion = { id: string; item: string };
type Feature = { id: string; item: string };
type DayItinerary = {
  id: string;
  dayNumber: number | "";
  title: string;
  description: string;
  features: Feature[];
};

function uid(prefix = "") {
  return `${prefix}${Math.random().toString(36).slice(2, 9)}`;
}

export default function EditPackagePage() {
  const params = useParams();
  const packageId = params.id as string;

  if (!packageId) return <div className="p-8 text-center text-muted-foreground">No package ID provided</div>;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [imageUrl, setImageUrl] = useState<string>("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState(""); // New Field
  const [days, setDays] = useState<number | "">("");
  const [nights, setNights] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">("");
  const [typeValue, setTypeValue] = useState("");

  const [destinationId, setDestinationId] = useState("");
  const [location, setLocation] = useState("");

  const [inclusions, setInclusions] = useState<Inclusion[]>([]);
  const [exclusions, setExclusions] = useState<Exclusion[]>([]);
  const [itineraries, setItineraries] = useState<DayItinerary[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getPackageAction(packageId);
        if (!data) throw new Error("Package not found");

        setName(data.name);
        setAbout(data.about || "");
        setDays(data.days);
        setNights(data.nights);
        setPrice(Number(data.price));
        setTypeValue(data.type || "");
        setLocation(data.location || "");
        setDestinationId(data.destinationId || ""); // Load relation
        setImageUrl(data.image || "");

        setInclusions(
          data.inclusions?.length
            ? data.inclusions.map((i: any) => ({ id: i.id || uid(), item: i.item }))
            : [{ id: uid(), item: "" }]
        );
        setExclusions(
          data.exclusions?.length
            ? data.exclusions.map((e: any) => ({ id: e.id || uid(), item: e.item }))
            : [{ id: uid(), item: "" }]
        );
        setItineraries(
          data.itineraries?.length
            ? data.itineraries.map((it: any) => ({
              id: it.id || uid(),
              dayNumber: it.dayNumber,
              title: it.title || "",
              description: it.description || "",
              features:
                it.features?.length > 0
                  ? it.features.map((f: any) => ({ id: f.id || uid(), item: f.item }))
                  : [{ id: uid(), item: "" }],
            }))
            : [{ id: uid(), dayNumber: 1, title: "", description: "", features: [{ id: uid(), item: "" }] }]
        );
      } catch (err) {
        console.error(err);
        toast.error("Failed to load package data");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [packageId]);

  // Handlers (mostly identical to New Page)
  const addInclusion = () => setInclusions([...inclusions, { id: uid(), item: "" }]);
  const removeInclusion = (id: string) => setInclusions(inclusions.filter((i) => i.id !== id));
  const updateInclusion = (id: string, value: string) =>
    setInclusions(inclusions.map((i) => (i.id === id ? { ...i, item: value } : i)));

  const addExclusion = () => setExclusions([...exclusions, { id: uid(), item: "" }]);
  const removeExclusion = (id: string) => setExclusions(exclusions.filter((e) => e.id !== id));
  const updateExclusion = (id: string, value: string) =>
    setExclusions(exclusions.map((e) => (e.id === id ? { ...e, item: value } : e)));

  const addItinerary = () =>
    setItineraries([
      ...itineraries,
      { id: uid(), dayNumber: itineraries.length + 1, title: "", description: "", features: [{ id: uid(), item: "" }] },
    ]);
  const removeItinerary = (id: string) => setItineraries(itineraries.filter((it) => it.id !== id));
  const updateItinerary = (id: string, key: keyof DayItinerary, value: any) =>
    setItineraries(itineraries.map((it) => (it.id === id ? { ...it, [key]: value } : it)));

  const addFeature = (itineraryId: string) =>
    setItineraries(
      itineraries.map((it) =>
        it.id === itineraryId ? { ...it, features: [...it.features, { id: uid(), item: "" }] } : it
      )
    );
  const removeFeature = (itineraryId: string, featureId: string) =>
    setItineraries(
      itineraries.map((it) =>
        it.id === itineraryId
          ? { ...it, features: it.features.filter((f) => f.id !== featureId) }
          : it
      )
    );
  const updateFeature = (itineraryId: string, featureId: string, value: string) =>
    setItineraries(
      itineraries.map((it) =>
        it.id === itineraryId
          ? {
            ...it,
            features: it.features.map((f) => (f.id === featureId ? { ...f, item: value } : f)),
          }
          : it
      )
    );

  const autoFormatDescription = (itineraryId: string, currentText: string) => {
    // Basic heuristic: split by newlines and wrap in <p> if not already HTML-ish
    if (!currentText) return;

    let formatted = currentText;
    // If it doesn't contain tags, assume plain text
    if (!/<[a-z][\s\S]*>/i.test(currentText)) {
      formatted = currentText
        .split(/\n+/)
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => `<p>${line}</p>`)
        .join("");
    } else {
      // Even if it has tags, maybe just try to clean up newlines to paragraphs if it looks like a dump
      // But cleaner to just trust strict plain text detection for now to avoid breaking existing HTML
    }

    updateItinerary(itineraryId, "description", formatted);
    toast.success("Auto-formatted description");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return toast.error("Package name is required");
    if (!about.trim()) return toast.error("About package is required");

    setSaving(true);
    try {
      await updatePackageAction({
        id: packageId,
        name,
        about,
        days: Number(days),
        nights: Number(nights),
        price: Number(price),
        type: typeValue,
        location,
        destinationId,
        image: imageUrl,
        inclusions: inclusions.filter((i) => i.item.trim()),
        exclusions: exclusions.filter((e) => e.item.trim()),
        itineraries: itineraries.map((it) => ({
          dayNumber: Number(it.dayNumber),
          description: it.description,
          title: it.title,
          features: it.features.filter((f) => f.item.trim()),
        })),
      });
      toast.success("Package updated successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update package");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-20 text-center animate-pulse text-muted-foreground">Loading package details...</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Edit Package</h1>
        <Button onClick={handleSubmit} disabled={saving} size="lg" className="rounded-full px-8 w-full sm:w-auto">
          {saving ? "Saving Changes..." : "Save Changes"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: Main Info */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none shadow-sm bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Package Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card className="border-none shadow-sm bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Package Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label>Package Name <span className="text-red-500">*</span></Label>
                    <Input
                      value={name} onChange={(e) => setName(e.target.value)}
                      className="text-lg font-medium"
                      placeholder="e.g. Magical Paris Getaway"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label>About Package <span className="text-red-500">*</span></Label>
                    <div className="min-h-[150px] border rounded-md">
                      <RichTextEditor value={about} onChange={setAbout} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label>Destination</Label>
                      <DestinationSelect value={destinationId} onChange={setDestinationId} />
                    </div>
                    <div className="grid gap-2">
                      <Label>Specific Location (Optional)</Label>
                      <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Eiffel Tower Area" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label>Days</Label>
                      <Input type="number" value={days} onChange={e => setDays(Number(e.target.value))} />
                    </div>
                    <div className="grid gap-2">
                      <Label>Nights</Label>
                      <Input type="number" value={nights} onChange={e => setNights(Number(e.target.value))} />
                    </div>
                    <div className="grid gap-2">
                      <Label>Price</Label>
                      <Input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} prefix="₹" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>Type</Label>
                    <Input value={typeValue} onChange={(e) => setTypeValue(e.target.value)} placeholder="e.g. Honeymoon" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Day Itinerary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {itineraries.map((it) => (
                    <div key={it.id} className="relative pl-6 border-l-2 border-primary/20 pb-8 last:pb-0">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold text-primary">Day {it.dayNumber}</h3>
                        {itineraries.length > 1 && (
                          <Button variant="ghost" size="icon" onClick={() => removeItinerary(it.id)} className="text-muted-foreground hover:text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      <div className="space-y-4">
                        <Input
                          value={it.title}
                          onChange={(e) => updateItinerary(it.id, "title", e.target.value)}
                          placeholder="Day Title"
                          className="font-medium"
                        />
                        <div className="min-h-[150px] relative group/editor">
                          <div className="absolute top-2 right-2 z-10 opacity-0 group-hover/editor:opacity-100 transition-opacity">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => autoFormatDescription(it.id, it.description)}
                              title="Auto-format plain text"
                              className="bg-white/80 backdrop-blur shadow-sm hover:bg-white"
                            >
                              <Wand2 className="w-3 h-3 mr-1" />
                              Format
                            </Button>
                          </div>
                          <RichTextEditor
                            value={it.description}
                            onChange={(val) => updateItinerary(it.id, "description", val)}
                          />
                        </div>

                        <div className="bg-muted/30 p-4 rounded-lg">
                          <Label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Highlights</Label>
                          <div className="space-y-2">
                            {it.features.map((f) => (
                              <div key={f.id} className="flex gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                                <Input
                                  value={f.item}
                                  onChange={e => updateFeature(it.id, f.id, e.target.value)}
                                  className="h-8 text-sm bg-transparent border-transparent hover:border-input focus:border-input transition-colors"
                                  placeholder="Add a highlight..."
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" && e.shiftKey) {
                                      e.preventDefault();
                                      addFeature(it.id);
                                    }
                                  }}
                                />
                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeFeature(it.id, f.id)}>
                                  <X className="w-3 h-3" />
                                </Button>
                              </div>
                            ))}
                            <Button variant="link" size="sm" onClick={() => addFeature(it.id)} className="px-0 text-muted-foreground">
                              + Add Highlight
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" onClick={addItinerary} className="w-full mt-4 border-dashed">
                    + Add Day {itineraries.length + 1}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT COLUMN: Media & Extras */}
            <div className="space-y-8">
              <Card className="border-none shadow-sm overflow-hidden">
                <CardHeader>
                  <CardTitle>Cover Image</CardTitle>
                </CardHeader>
                <div className="px-6 pb-6">
                  <DropzoneClient
                    multiple={false}
                    onUploadComplete={(urls) => {
                      if (urls.length) setImageUrl(urls[0]);
                    }}
                  />
                  {imageUrl && (
                    <div className="mt-4 relative rounded-xl overflow-hidden aspect-video group">
                      <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="destructive" size="sm" onClick={() => setImageUrl("")}>Remove</Button>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Inclusions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {inclusions.map((inc) => (
                    <div key={inc.id} className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-green-500 shrink-0" />
                      <Input
                        value={inc.item}
                        onChange={e => updateInclusion(inc.id, e.target.value)}
                        className="h-9"
                        placeholder="Included item..."
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && e.shiftKey) { e.preventDefault(); addInclusion(); }
                        }}
                      />
                      <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0" onClick={() => removeInclusion(inc.id)}>
                        <X className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="ghost" size="sm" onClick={addInclusion} className="w-full text-muted-foreground">
                    + Add Inclusion
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Exclusions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {exclusions.map((exc) => (
                    <div key={exc.id} className="flex items-center gap-2">
                      <XIcon className="w-4 h-4 text-red-500 shrink-0" />
                      <Input
                        value={exc.item}
                        onChange={e => updateExclusion(exc.id, e.target.value)}
                        className="h-9"
                        placeholder="Excluded item..."
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && e.shiftKey) { e.preventDefault(); addExclusion(); }
                        }}
                      />
                      <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0" onClick={() => removeExclusion(exc.id)}>
                        <X className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="ghost" size="sm" onClick={addExclusion} className="w-full text-muted-foreground">
                    + Add Exclusion
                  </Button>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
      );
}

      function CheckIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
}
      function XIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
}