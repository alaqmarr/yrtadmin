// app/lib/db.ts
import { PrismaClient } from "@/app/prisma/client";

declare global {
  // allow global prisma caching in dev
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "production" ? [] : ["query", "warn", "error"],
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
