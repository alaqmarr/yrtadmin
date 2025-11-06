"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DropzoneClient from "@/components/DropzoneClient";
import toast from "react-hot-toast";
import { updatePackageAction } from "@/app/actions/package.server";

type Inclusion = { id: string; item: string };
type Exclusion = { id: string; item: string };
type Feature = { id: string; item: string };
type Itinerary = {
  id: string;
  dayNumber: number | "";
  description: string;
  features: Feature[];
};

function uid(prefix = "") {
  return `${prefix}${Math.random().toString(36).slice(2, 9)}`;
}

export default function EditPackagePage() {
  const params = useParams();
  const packageId = params.id;
  if (!packageId) return <div className="p-8 text-center text-gray-500">No package ID provided</div>;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const [name, setName] = useState("");
  const [days, setDays] = useState<number | "">("");
  const [nights, setNights] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">("");
  const [typeValue, setTypeValue] = useState("");
  const [location, setLocation] = useState("");

  const [inclusions, setInclusions] = useState<Inclusion[]>([]);
  const [exclusions, setExclusions] = useState<Exclusion[]>([]);
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);

  useEffect(() => {
    const load = async () => {
      if (!packageId) return;
      try {
        const res = await fetch(`/api/packages/${packageId}`);
        const data = await res.json();
        if (data?.error) throw new Error(data.error);

        setName(data.name);
        setDays(data.days);
        setNights(data.nights);
        setPrice(data.price);
        setTypeValue(data.type || "");
        setLocation(data.location || "");
        setImageUrl(data.image || "");

        setInclusions(
          data.inclusions?.length
            ? data.inclusions.map((i: any) => ({ id: i.id, item: i.item }))
            : [{ id: uid(), item: "" }]
        );
        setExclusions(
          data.exclusions?.length
            ? data.exclusions.map((e: any) => ({ id: e.id, item: e.item }))
            : [{ id: uid(), item: "" }]
        );
        setItineraries(
          data.itineraries?.length
            ? data.itineraries.map((it: any) => ({
                id: it.id,
                dayNumber: it.dayNumber,
                description: it.description || "",
                features:
                  it.features?.length > 0
                    ? it.features.map((f: any) => ({ id: f.id, item: f.item }))
                    : [{ id: uid(), item: "" }],
              }))
            : [{ id: uid(), dayNumber: 1, description: "", features: [{ id: uid(), item: "" }] }]
        );
      } catch (err) {
        console.error(err);
        toast.error("Failed to load package");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [packageId]);

  // Inclusion handlers
  const addInclusion = () => setInclusions([...inclusions, { id: uid(), item: "" }]);
  const updateInclusion = (id: string, val: string) =>
    setInclusions(inclusions.map((i) => (i.id === id ? { ...i, item: val } : i)));
  const removeInclusion = (id: string) =>
    setInclusions(inclusions.filter((i) => i.id !== id));

  // Exclusion handlers
  const addExclusion = () => setExclusions([...exclusions, { id: uid(), item: "" }]);
  const updateExclusion = (id: string, val: string) =>
    setExclusions(exclusions.map((e) => (e.id === id ? { ...e, item: val } : e)));
  const removeExclusion = (id: string) =>
    setExclusions(exclusions.filter((e) => e.id !== id));

  // Itinerary handlers
  const addItinerary = () =>
    setItineraries([
      ...itineraries,
      { id: uid(), dayNumber: itineraries.length + 1, description: "", features: [{ id: uid(), item: "" }] },
    ]);
  const removeItinerary = (id: string) =>
    setItineraries(itineraries.filter((it) => it.id !== id));
  const updateItineraryField = (id: string, key: keyof Itinerary, value: any) =>
    setItineraries(itineraries.map((it) => (it.id === id ? { ...it, [key]: value } : it)));

  // Feature handlers
  const addFeature = (itineraryId: string) =>
    setItineraries(
      itineraries.map((it) =>
        it.id === itineraryId
          ? { ...it, features: [...it.features, { id: uid(), item: "" }] }
          : it
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
  const updateFeature = (itineraryId: string, featureId: string, val: string) =>
    setItineraries(
      itineraries.map((it) =>
        it.id === itineraryId
          ? {
              ...it,
              features: it.features.map((f) => (f.id === featureId ? { ...f, item: val } : f)),
            }
          : it
      )
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updatePackageAction(packageId as string, {
        name,
        days: Number(days),
        nights: Number(nights),
        price: Number(price),
        type: typeValue,
        location,
        image: imageUrl,
        inclusions: inclusions.filter((i) => i.item.trim()),
        exclusions: exclusions.filter((e) => e.item.trim()),
        itineraries: itineraries.map((it) => ({
          dayNumber: Number(it.dayNumber),
          description: it.description,
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

  if (loading)
    return <div className="p-8 text-center text-gray-500">Loading package...</div>;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Edit Package</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Package Name"
            required
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Days"
            value={days}
            onChange={(e) => setDays(e.target.value === "" ? "" : Number(e.target.value))}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Nights"
            value={nights}
            onChange={(e) => setNights(e.target.value === "" ? "" : Number(e.target.value))}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
            className="border p-2 rounded"
          />
          <input
            placeholder="Type"
            value={typeValue}
            onChange={(e) => setTypeValue(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium mb-2">Package Image</label>
          <DropzoneClient
            multiple={false}
            onUploadComplete={(urls) => {
              if (urls.length) setImageUrl(urls[0]);
            }}
          />
          {imageUrl && (
            <div className="mt-3 relative w-fit">
              <img src={imageUrl} className="w-64 h-40 object-cover rounded border" />
              <button
                type="button"
                onClick={() => setImageUrl("")}
                className="absolute top-1 right-1 bg-white border text-xs px-2 py-0.5 rounded"
              >
                Remove
              </button>
            </div>
          )}
        </div>

        {/* Inclusions */}
        <Section
          title="Inclusions"
          items={inclusions}
          onAdd={addInclusion}
          onRemove={removeInclusion}
          onChange={updateInclusion}
          placeholder="Inclusion"
        />

        {/* Exclusions */}
        <Section
          title="Exclusions"
          items={exclusions}
          onAdd={addExclusion}
          onRemove={removeExclusion}
          onChange={updateExclusion}
          placeholder="Exclusion"
        />

        {/* Itineraries */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">Day Itineraries</h3>
            <button type="button" onClick={addItinerary} className="text-blue-600 text-sm">
              + Add Day
            </button>
          </div>
          <div className="space-y-4">
            {itineraries.map((it) => (
              <div key={it.id} className="border rounded-md p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-sm">Day {it.dayNumber}</h4>
                  {itineraries.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItinerary(it.id)}
                      className="text-red-600 text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <textarea
                  value={it.description}
                  onChange={(e) =>
                    updateItineraryField(it.id, "description", e.target.value)
                  }
                  placeholder="Day description"
                  className="w-full border p-2 rounded text-sm"
                  rows={3}
                />
                <div className="mt-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Features</span>
                    <button
                      type="button"
                      onClick={() => addFeature(it.id)}
                      className="text-blue-600 text-sm"
                    >
                      + Add Feature
                    </button>
                  </div>
                  <div className="space-y-2">
                    {it.features.map((f) => (
                      <div key={f.id} className="flex gap-2">
                        <input
                          value={f.item}
                          onChange={(e) => updateFeature(it.id, f.id, e.target.value)}
                          placeholder="Feature"
                          className="border p-2 rounded flex-1 text-sm"
                        />
                        {it.features.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeFeature(it.id, f.id)}
                            className="text-red-600 text-sm px-2"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-slate-800 text-white rounded disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}

function Section({
  title,
  items,
  onAdd,
  onRemove,
  onChange,
  placeholder,
}: {
  title: string;
  items: { id: string; item: string }[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onChange: (id: string, val: string) => void;
  placeholder: string;
}) {
  return (
    <section>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <button type="button" onClick={onAdd} className="text-blue-600 text-sm">
          + Add
        </button>
      </div>
      <div className="space-y-2">
        {items.map((i) => (
          <div key={i.id} className="flex gap-2">
            <input
              value={i.item}
              onChange={(e) => onChange(i.id, e.target.value)}
              placeholder={placeholder}
              className="border p-2 rounded flex-1 text-sm"
            />
            {items.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(i.id)}
                className="text-red-600 text-sm px-2"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
