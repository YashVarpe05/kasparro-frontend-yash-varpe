"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarStaggered } from "@/components/navbar-staggered";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Search,
  Boxes,
  ChevronRight,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Audit", href: "/audit", icon: Search },
  { name: "Architecture", href: "/architecture", icon: Boxes },
];

interface DashboardShellProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function DashboardShell({ children, title, description }: DashboardShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      {/* Staggered Menu - consistent across all pages */}
      <NavbarStaggered />

      {/* Main Container with padding for navbar */}
      <div className="pt-24">
        {/* Secondary Navigation - Dashboard specific tabs */}
        <div className="border-b bg-background/95 backdrop-blur-sm sticky top-0 z-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1 py-3">
              {navigation.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                      isActive
                        ? "bg-violet-600 text-white shadow-md shadow-violet-500/25"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div className="border-b bg-linear-to-r from-violet-500/5 via-transparent to-violet-500/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground font-medium">{title}</span>
            </div>
            {title && (
              <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            )}
            {description && (
              <p className="text-muted-foreground mt-1">{description}</p>
            )}
          </div>
        </div>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
