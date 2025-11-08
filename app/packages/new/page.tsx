"use client";

import React, { useState } from "react";
import DropzoneClient from "@/components/DropzoneClient";
import toast from "react-hot-toast";
import { createPackageAction } from "@/app/actions/package.server";

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

export default function NewPackagePage() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploading, setUploading] = useState(false);

  const [name, setName] = useState("");
  const [days, setDays] = useState<number | "">("");
  const [nights, setNights] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">("");
  const [typeValue, setTypeValue] = useState("");
  const [location, setLocation] = useState("");

  const [inclusions, setInclusions] = useState<Inclusion[]>([{ id: uid(), item: "" }]);
  const [exclusions, setExclusions] = useState<Exclusion[]>([{ id: uid(), item: "" }]);
  const [itineraries, setItineraries] = useState<DayItinerary[]>([
    { id: uid(), dayNumber: 1, title: "", description: "", features: [{ id: uid(), item: "" }] },
  ]);

  const [loading, setLoading] = useState(false);

  // Generic state utilities
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
      { id: uid(), dayNumber: itineraries.length + 1,title: "", description: "", features: [{ id: uid(), item: "" }] },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return toast.error("Package name is required");
    if (!imageUrl) return toast.error("Please upload a package image");

    setLoading(true);

    try {
      await createPackageAction({
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
          title: it.title,
          features: it.features.filter((f) => f.item.trim()),
        })),
      });

      toast.success("Package created successfully");
      resetForm();
    } catch (err) {
      console.error(err);
      toast.error("Failed to create package");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName("");
    setDays("");
    setNights("");
    setPrice("");
    setTypeValue("");
    setLocation("");
    setImageUrl("");
    setInclusions([{ id: uid(), item: "" }]);
    setExclusions([{ id: uid(), item: "" }]);
    setItineraries([{ id: uid(), dayNumber: 1, title: "", description: "", features: [{ id: uid(), item: "" }] }]);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Create New Package</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* BASIC INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            placeholder="Package Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            placeholder="Type (e.g. Adventure)"
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

        {/* IMAGE UPLOAD */}
        <div>
          <label className="block text-sm font-medium mb-2">Upload Image</label>
          <DropzoneClient
            multiple={false}
            onUploadComplete={(urls) => {
              if (urls.length) {
                setImageUrl(urls[0]);
                setUploading(false);
              }
            }}
          />
          {uploading && <p className="text-sm text-gray-500 mt-1">Uploading...</p>}
          {imageUrl && (
            <div className="mt-3 relative w-fit">
              <img src={imageUrl} alt="Preview" className="w-64 h-40 rounded object-cover border" />
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

        {/* INCLUSIONS */}
        <section>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">Inclusions</h3>
            <button type="button" onClick={addInclusion} className="text-blue-600 text-sm">
              + Add
            </button>
          </div>
          <div className="space-y-2">
            {inclusions.map((inc) => (
              <div key={inc.id} className="flex gap-2">
                <input
                  value={inc.item}
                  onChange={(e) => updateInclusion(inc.id, e.target.value)}
                  placeholder="Included item"
                  className="border p-2 rounded flex-1 text-sm"
                />
                {inclusions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeInclusion(inc.id)}
                    className="text-red-600 text-sm px-2"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* EXCLUSIONS */}
        <section>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">Exclusions</h3>
            <button type="button" onClick={addExclusion} className="text-blue-600 text-sm">
              + Add
            </button>
          </div>
          <div className="space-y-2">
            {exclusions.map((exc) => (
              <div key={exc.id} className="flex gap-2">
                <input
                  value={exc.item}
                  onChange={(e) => updateExclusion(exc.id, e.target.value)}
                  placeholder="Excluded item"
                  className="border p-2 rounded flex-1 text-sm"
                />
                {exclusions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeExclusion(exc.id)}
                    className="text-red-600 text-sm px-2"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ITINERARIES */}
        <section>
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
                <input
                  value={it.title}
                  onChange={(e) => updateItinerary(it.id, "title", e.target.value)}
                  placeholder="Day title"
                  className="border p-2 rounded flex-1 text-sm"
                />

                <textarea
                  value={it.description}
                  onChange={(e) => updateItinerary(it.id, "description", e.target.value)}
                  placeholder="Day description"
                  rows={3}
                  className="w-full border p-2 rounded text-sm"
                />

                {/* FEATURES */}
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
        </section>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-slate-800 text-white rounded disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Package"}
          </button>
        </div>
      </form>
    </div>
  );
}
