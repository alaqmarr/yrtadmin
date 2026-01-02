"use client";

import { usePathname } from "next/navigation";
import { Bell, Search, User } from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);

    return (
        <header className="h-16 border-b bg-background/50 backdrop-blur-sm sticky top-0 z-10 px-6 flex items-center justify-between transition-all">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">
                    Home
                </Link>
                {pathSegments.map((segment, index) => (
                    <div key={segment} className="flex items-center gap-2">
                        <span>/</span>
                        <span
                            className={`capitalize ${index === pathSegments.length - 1
                                    ? "text-foreground font-medium"
                                    : "hover:text-foreground transition-colors"
                                }`}
                        >
                            {segment.replace(/-/g, " ")}
                        </span>
                    </div>
                ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-9 w-64 rounded-md border bg-background pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-all"
                    />
                </div>

                {/* Notifications */}
                <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-accent transition-colors">
                    <Bell className="w-5 h-5 text-muted-foreground" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
                </button>

                {/* User Profile */}
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors relative overflow-hidden">
                    <User className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
}
