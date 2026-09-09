"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import { collegeNavigation } from "@/config/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectTenantName } from "@/store/selectors/tenant.selectors";
import { clearTenant } from "@/store/slices/tenant.slice";
import { clearUser } from "@/store/slices/auth.slice";

interface PortalSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function PortalSidebar({
  collapsed,
  onToggle,
}: PortalSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const tenantName =
    useAppSelector(selectTenantName) ??
    "BharatPath College";

  const initials = tenantName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(clearTenant());
    router.push("/login");
  };

  return (
    <aside
      className="hidden shrink-0 border-r border-[#e7e9ee] bg-white transition-all duration-200 lg:flex lg:flex-col"
      style={{
        width: collapsed ? 64 : 232,
      }}
    >
      <div
        className={`flex items-center ${
          collapsed
            ? "justify-center px-2"
            : "justify-between px-4"
        } py-5`}
      >
        <Link
          href="/college"
          className="flex items-center gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#151b2b] text-sm font-bold text-white">
            B
          </div>

          {!collapsed && (
            <div>
              <div className="text-[14px] font-semibold text-[#151b2b]">
                BharatPath
              </div>

              <div className="text-[11px] text-[#777f90]">
                College Portal
              </div>
            </div>
          )}
        </Link>

        {!collapsed && (
          <button
            type="button"
            onClick={onToggle}
            className="rounded-lg p-1.5 text-[#777f90] hover:bg-[#f3f4f7]"
            aria-label="Collapse sidebar"
          >
            <ChevronLeft size={16} />
          </button>
        )}

        {collapsed && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute left-[52px] rounded-lg bg-white p-1 text-[#777f90] shadow-sm"
            aria-label="Expand sidebar"
          >
            <ChevronRight size={14} />
          </button>
        )}
      </div>

      <nav className="flex-1 px-3">
        <div className="space-y-1">
          {collegeNavigation.map((item) => {
            const Icon = item.icon;

            const href =
              item.href === "/"
                ? "/college"
                : `/college${item.href}`;

            const active =
              item.href === "/"
                ? pathname === href
                : pathname === href ||
                  pathname.startsWith(`${href}/`);

            return (
              <Link
                key={item.key}
                href={href}
                title={collapsed ? item.label : undefined}
                style={{
                  font: '600 13px/17px "General Sans", sans-serif',
                  color: active ? "var(--navy)" : "var(--ink-muted)",
                  whiteSpace: "nowrap",
                  background: active ? "var(--indigo-bg)" : undefined,
                }}
                className={`flex min-h-10 cursor-pointer items-center justify-start gap-[11px] rounded-lg px-[11px] py-[10px] transition ${
                  collapsed
                    ? "justify-center px-2"
                    : ""
                } ${
                  active
                    ? ""
                    : "hover:bg-[#f5f6f8] hover:text-(--navy)"
                }`}
              >
                <Icon
                  size={16}
                  strokeWidth={1.9}
                  className="shrink-0"
                />

                {!collapsed && (
                  <span className="truncate">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      <div
        className="flex flex-col gap-[8px] border-t p-[10px]"
        style={{ borderColor: "var(--border-hair)" }}
      >
        <div
          className={`flex items-center gap-[10px] py-[6px] ${
            collapsed ? "justify-center px-1" : "px-[4px]"
          }`}
        >
          <span
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white"
            style={{
              background: "var(--navy)",
              font: '600 12px/16px "General Sans", sans-serif',
            }}
          >
            {initials}
          </span>

          {!collapsed && (
            <>
              <span className="flex min-w-0 flex-1 flex-col gap-[1px]">
                <span
                  className="truncate"
                  style={{
                    font: '600 12px/16px "General Sans", sans-serif',
                    color: "var(--navy)",
                  }}
                >
                  {tenantName}
                </span>

                <span
                  style={{
                    font: '400 11px/14px "General Sans", sans-serif',
                    color: "var(--ink-muted)",
                  }}
                >
                  Placement cell
                </span>
              </span>

              <button
                type="button"
                onClick={handleLogout}
                aria-label="Log out"
                title="Log out"
                className="grid h-7 w-7 shrink-0 cursor-pointer place-items-center rounded-lg hover:bg-[#f5f6f8]"
              >
                <LogOut size={16} style={{ color: "var(--ink-muted)" }} />
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}