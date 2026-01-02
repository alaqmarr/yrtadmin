import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AppSidebar from "@/components/AppSidebar";
import TopHeader from "@/components/TopHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "YRT Admin",
  description: "Made with love for YRT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased overscroll-none`}>
        <Toaster position="top-right" />
        <div className="flex h-screen overflow-hidden bg-background">
          <AppSidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <TopHeader />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-muted/30 p-4 md:p-6 transition-all duration-300">
              <div className="mx-auto max-w-7xl animate-in fade-in zoom-in-95 duration-500">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

export const preferredRegion = "sin1";

