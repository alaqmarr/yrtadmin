"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Package,
    FileText,
    Settings,
    X,
    Menu,
    Box,
    Ticket,
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
    { label: "Dashboard", href: "/", icon: LayoutDashboard },
    { label: "Packages", href: "/packages", icon: Box },
    { label: "Blogs", href: "/blogs", icon: FileText },
    { label: "Destinations", href: "/destinations", icon: Ticket },
    { label: "Settings", href: "/settings", icon: Settings },
];

export default function AppSidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(true);

    // Mobile toggle
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile Trigger */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden fixed bottom-6 right-6 h-12 w-12 bg-primary text-primary-foreground rounded-full shadow-lg z-50 flex items-center justify-center"
            >
                {mobileOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Sidebar */}
            <aside
                className={`hidden lg:flex flex-col border-r bg-sidebar transition-all duration-300 ${isOpen ? "w-64" : "w-20"
                    }`}
            >
                <div className="h-16 flex items-center justify-between px-6 border-b">
                    {isOpen ? (
                        <span className="font-bold text-xl tracking-tight text-primary">
                            YRT<span className="text-foreground">Admin</span>
                        </span>
                    ) : (
                        <span className="font-bold text-xl text-primary">Y</span>
                    )}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        {isOpen ? <Menu className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {NAV_ITEMS.map((item) => {
                        const isActive =
                            item.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                title={!isOpen ? item.label : undefined}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${isActive
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                    }`}
                            >
                                <item.icon
                                    className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-primary-foreground" : ""
                                        }`}
                                />
                                {isOpen && (
                                    <span className="font-medium whitespace-nowrap">
                                        {item.label}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t">
                    {isOpen ? (
                        <div className="text-xs text-muted-foreground text-center">
                            &copy; 2026 YRT Admin
                        </div>
                    ) : (
                        <div className="text-xs text-center">©</div>
                    )}
                </div>
            </aside>

            {/* Mobile Sidebar Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
            )}

            {/* Mobile Sidebar Drawer */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r transform transition-transform duration-300 lg:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="h-16 flex items-center justify-between px-6 border-b">
                    <span className="font-bold text-xl tracking-tight text-primary">
                        YRT<span className="text-foreground">Admin</span>
                    </span>
                    <button onClick={() => setMobileOpen(false)}>
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    {NAV_ITEMS.map((item) => {
                        const isActive =
                            item.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${isActive
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}
