"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { collegeNavigation } from "@/config/navigation";

export function PortalMobileNav() {
  const pathname = usePathname();

  return (
    <div className="overflow-x-auto border-b border-[#e7e9ee] bg-white lg:hidden">
      <nav className="flex min-w-max gap-1 p-2">
        {collegeNavigation.map((item) => {
          const href =
            item.href === "/"
              ? "/college"
              : `/college${item.href}`;

          const active =
            pathname === href ||
            pathname.startsWith(`${href}/`);

          const Icon = item.icon;

          return (
            <Link
              key={item.key}
              href={href}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium ${
                active
                  ? "bg-[#eef0ff] text-[#18203a]"
                  : "text-[#777f90]"
              }`}
            >
              <Icon size={15} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}