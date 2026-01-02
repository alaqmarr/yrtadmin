"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getAppConfig() {
  const config = await prisma.appConfig.findFirst();
  if (!config) {
    return await prisma.appConfig.create({
      data: {
        siteName: "YRT Admin",
        contactEmail: "admin@example.com",
      },
    });
  }
  return config;
}

export async function updateAppConfig(formData: FormData) {
  const siteName = formData.get("siteName") as string;
  const contactEmail = formData.get("contactEmail") as string;
  const contactPhone = formData.get("contactPhone") as string;

  const config = await prisma.appConfig.findFirst();

  if (config) {
    await prisma.appConfig.update({
      where: { id: config.id },
      data: { siteName, contactEmail, contactPhone },
    });
  } else {
    await prisma.appConfig.create({
      data: { siteName, contactEmail, contactPhone },
    });
  }

  revalidatePath("/settings");
  revalidatePath("/");
  return { success: true };
}
