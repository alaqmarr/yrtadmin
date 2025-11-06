// app/lib/cloudinary.ts
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function uploadToCloudinary(
  bufferOrStream: Buffer | string,
  options?: {
    folder?: string;
    resource_type?: "image" | "auto";
    public_id?: string;
  }
) {
  // If buffer provided, use upload_stream. If string (dataURL) use upload.
  if (Buffer.isBuffer(bufferOrStream)) {
    return new Promise<{ secure_url: string; public_id: string; raw: any }>(
      (resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: options?.folder,
            resource_type: options?.resource_type ?? "image",
            public_id: options?.public_id,
          },
          (error, result) => {
            if (error) return reject(error);
            resolve({ secure_url: result!.secure_url, public_id: result!.public_id, raw: result });
          }
        );
        stream.end(bufferOrStream);
      }
    );
  } else {
    // assume string url / dataURL
    const result = await cloudinary.uploader.upload(bufferOrStream, {
      folder: options?.folder,
      resource_type: options?.resource_type ?? "image",
      public_id: options?.public_id,
    });
    return { secure_url: result.secure_url, public_id: result.public_id, raw: result };
  }
}
