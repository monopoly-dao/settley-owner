'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { FaHome, FaClipboardList, FaUsers, FaChartLine, FaCog } from 'react-icons/fa';

const adminLinks = [
    { href: '/admin', label: 'Applications', icon: FaClipboardList },
    // { href: '/admin/users', label: 'User Management', icon: FaUsers },
    // { href: '/admin/analytics', label: 'Analytics', icon: FaChartLine },
    // { href: '/admin/settings', label: 'System Settings', icon: FaCog },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-navy text-white flex flex-col fixed inset-y-0 shadow-xl z-20">
                <div className="p-8 border-b border-white/10">
                    <Link href="/" className="text-2xl font-playfair font-bold tracking-tighter hover:opacity-80 transition-opacity">
                        Settley<span className="text-settley-primary">.admin</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-1 mt-4">
                    {adminLinks.map((link) => {
                        const isActive = pathname === link.href;
                        const Icon = link.icon;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                                    isActive
                                        ? "bg-settley-primary text-white shadow-lg shadow-settley-primary/20"
                                        : "text-navy-100 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <Icon className={cn("text-lg", isActive ? "text-white" : "text-navy-200 group-hover:text-white")} />
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-navy-200 hover:text-white transition-colors"
                    >
                        <FaHome className="text-lg" />
                        Back to Site
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-10">
                {children}
            </main>
        </div>
    );
}
