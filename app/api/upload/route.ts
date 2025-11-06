// app/api/upload/route.ts
import { NextResponse } from "next/server";
import { uploadToCloudinary } from "@/lib/cloudinary";


export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (contentType.startsWith("multipart/form-data")) {
      // parse multipart form data using built-in Request.formData()
      const formData = await req.formData();
      const file = formData.get("file") as File | null;
      if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

      // read file as arrayBuffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const result = await uploadToCloudinary(buffer, { folder: "destinations" });
      return NextResponse.json({ url: result.secure_url, public_id: result.public_id });
    }

    // also support JSON with dataURL
    const body = await req.json().catch(() => null);
    if (body?.dataUrl) {
      const result = await uploadToCloudinary(body.dataUrl, { folder: "destinations" });
      return NextResponse.json({ url: result.secure_url, public_id: result.public_id });
    }

    return NextResponse.json({ error: "Unsupported content-type or missing file" }, { status: 400 });
  } catch (err) {
    console.error("upload error", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
