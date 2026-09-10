"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  collegeNavigation,
  employerNavigation,
} from "@/config/navigation";

interface PortalMobileNavProps {
  portal: "college" | "employer" | "student";
}

export function PortalMobileNav({
  portal,
}: PortalMobileNavProps) {
  const pathname = usePathname();

  /*
   * ==========================================
   * NAVIGATION
   *
   * Employer has its own navigation.
   * Student currently uses the college
   * navigation structure.
   * ==========================================
   */

  const navigation =
    portal === "employer"
      ? employerNavigation
      : collegeNavigation;

  /*
   * ==========================================
   * BASE PATH
   * ==========================================
   */

  const basePath =
    portal === "employer"
      ? "/employer"
      : portal === "student"
        ? "/student"
        : "/college";

  return (
    <div className="shrink-0 overflow-x-auto border-b border-[#e7e9ee] bg-white lg:hidden">
      <nav className="flex min-w-max gap-1 p-2">
        {navigation.map((item) => {
          /*
           * ======================================
           * RESOLVE HREF
           * ======================================
           */

          const href =
            portal === "employer"
              ? item.href
              : item.href === "/"
                ? basePath
                : `${basePath}${item.href}`;

          /*
           * ======================================
           * ACTIVE STATE
           *
           * Dashboard should only be active on
           * the exact portal root.
           * ======================================
           */

          const isDashboard =
            portal === "employer"
              ? item.href === "/employer"
              : item.href === "/";

          const active = isDashboard
            ? pathname === href
            : pathname === href ||
              pathname.startsWith(`${href}/`);

          const Icon = item.icon;

          return (
            <Link
              key={item.key}
              href={href}
              className={`
                flex
                items-center
                gap-2
                rounded-lg
                px-3
                py-2
                text-xs
                font-medium
                transition-colors
                ${
                  active
                    ? "bg-[#eef0ff] text-[#18203a]"
                    : "text-[#777f90] hover:bg-[#f5f6f8]"
                }
              `}
            >
              <Icon
                size={15}
                strokeWidth={1.9}
              />

              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}