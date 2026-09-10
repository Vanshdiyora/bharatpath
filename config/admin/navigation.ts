import type { LucideIcon } from "lucide-react";
import { Gavel, LayoutDashboard, Settings, ShieldCheck, Users } from "lucide-react";

export type AdminNavItem = { href: string; label: string; icon: LucideIcon; badge?: number };

export const ADMIN_NAVIGATION: AdminNavItem[] = [
  { href: "/admin/dashboard", label: "Operations", icon: LayoutDashboard },
  { href: "/admin/queue", label: "KYB & Integrity", icon: ShieldCheck, badge: 10 },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/disputes", label: "Disputes & Audit", icon: Gavel, badge: 3 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];
