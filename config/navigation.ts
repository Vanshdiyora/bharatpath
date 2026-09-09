import {
  BarChart3,
  LayoutGrid,
  Settings,
  Users,
} from "lucide-react";

export const collegeNavigation = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/",
    icon: LayoutGrid,
  },
  {
    key: "students",
    label: "Students",
    href: "/students",
    icon: Users,
  },
  {
    key: "analytics",
    label: "Analytics & Outcomes",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    key: "settings",
    label: "Settings & Billing",
    href: "/settings",
    icon: Settings,
  },
] as const;