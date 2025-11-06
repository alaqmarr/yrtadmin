// components/DropzoneClient.tsx
"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

export default function DropzoneClient({
  onUploadComplete,
  accept = { "image/*": [] },
  multiple = false,
}: {
  onUploadComplete: (urls: string[]) => void;
  accept?: any;
  multiple?: boolean;
}) {
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (!acceptedFiles.length) return;
      setUploading(true);

      try {
        const uploadedUrls: string[] = [];
        for (const file of acceptedFiles) {
          const fd = new FormData();
          fd.append("file", file);
          const res = await fetch("/api/upload", { method: "POST", body: fd });
          const json = await res.json();
          if (!res.ok) {
            throw new Error(json?.error || "Upload failed");
          }
          uploadedUrls.push(json.url);
        }
        setPreviews(uploadedUrls);
        onUploadComplete(uploadedUrls);
        toast.success("Uploaded");
      } catch (err: any) {
        console.error(err);
        toast.error(String(err?.message || "Upload error"));
      } finally {
        setUploading(false);
      }
    },
    [onUploadComplete]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept, multiple });

  return (
    <div className="border-dashed border-2 rounded-lg p-3">
      <div {...getRootProps()} className="cursor-pointer py-6 text-center">
        <input {...getInputProps()} />
        <p>{isDragActive ? "Drop the images here..." : "Drag & drop images, or click to select"}</p>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {previews.map((p, i) => (
          <div key={i} className="w-full h-24 overflow-hidden rounded">
            <img src={p} alt={`preview-${i}`} className="w-full h-24 object-cover" />
          </div>
        ))}
      </div>

      {uploading && <p className="mt-2 text-sm">Uploading...</p>}
    </div>
  );
}
