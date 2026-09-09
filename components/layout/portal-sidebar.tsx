"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowLeftToLine,
  LogOut,
} from "lucide-react";

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
    "Sinhgad Institute of Technology";

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
      className="hidden h-full shrink-0 flex-col border-r border-[#e7e9ee] bg-white transition-all duration-200 lg:flex"
      style={{
        width: collapsed ? 64 : 232,
      }}
    >
      {/* =========================================================
          SIDEBAR HEADER
      ========================================================= */}
      <div
        className={`group relative flex min-h-6 items-center gap-2.25 ${
          collapsed
            ? "justify-center px-2 py-5"
            : ""
        }`}
        style={
          collapsed
            ? undefined
            : {
                padding: "20px 12px 16px 16px",
              }
        }
      >
        {collapsed ? (
          <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
            {/* Collapsed logo */}
            <Link
              href="/college"
              className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#151b2b] text-sm font-bold text-white opacity-100 transition-opacity group-hover:opacity-0"
            >
              B
            </Link>

            {/* Expand button */}
            <button
              type="button"
              onClick={onToggle}
              aria-label="Expand sidebar"
              title="Expand sidebar"
              className="absolute inset-0 grid cursor-pointer place-items-center rounded-lg opacity-0 transition-opacity group-hover:opacity-100 hover:bg-[#f3f4f7]"
            >
              <ArrowLeftToLine
                size={16}
                className="rotate-180"
                style={{
                  color: "var(--ink-muted)",
                }}
              />
            </button>
          </span>
        ) : (
          <>
            {/* Logo */}
            <Link
              href="/college"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#151b2b] text-sm font-bold text-white"
            >
              B
            </Link>

            {/* Brand */}
            <span className="flex min-w-0 flex-1 flex-col overflow-hidden whitespace-nowrap">
              <span
                style={{
                  font: '800 14px/17px "General Sans", sans-serif',
                  letterSpacing: "-0.01em",
                  color: "#151b2b",
                }}
              >
                BharatPath
              </span>

              <span
                style={{
                  font: '700 10px/13px "General Sans", sans-serif',
                  letterSpacing: "0.14em",
                  color: "var(--ink-muted)",
                }}
              >
                COLLEGE
              </span>
            </span>

            {/* Collapse button */}
            <button
              type="button"
              onClick={onToggle}
              aria-label="Collapse sidebar"
              title="Collapse sidebar"
              className="grid h-7 w-7 shrink-0 cursor-pointer place-items-center rounded-lg hover:bg-[#f3f4f7]"
            >
              <ArrowLeftToLine
                size={16}
                style={{
                  color: "var(--ink-muted)",
                }}
              />
            </button>
          </>
        )}
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <nav className="flex-1 overflow-y-auto px-3 bp-scrollbar">
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
                title={
                  collapsed
                    ? item.label
                    : undefined
                }
                style={{
                  font: '600 13px/17px "General Sans", sans-serif',
                  color: active
                    ? "var(--navy)"
                    : "var(--ink-muted)",
                  whiteSpace: "nowrap",
                  background: active
                    ? "var(--indigo-bg)"
                    : undefined,
                }}
                className={`flex min-h-10 cursor-pointer items-center gap-[11px] rounded-lg px-[11px] py-[10px] transition ${
                  collapsed
                    ? "justify-center px-2"
                    : "justify-start"
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

      {/* =========================================================
          BOTTOM USER SECTION
      ========================================================= */}
      <div
        className="mt-auto shrink-0 border-t"
        style={{
          borderColor: "var(--border-hair)",
        }}
      >
        <div
          className={`flex min-h-[76px] items-center gap-[10px] ${
            collapsed
              ? "justify-center px-2"
              : "px-[16px]"
          }`}
        >
          {/* =====================================================
              USER AVATAR
          ===================================================== */}
          <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
            style={{
              background: "var(--navy)",
              color: "#fff",
              font: '600 13px/16px "General Sans", sans-serif',
            }}
          >
            {initials}
          </span>

          {!collapsed && (
            <>
              {/* =================================================
                  USER / COLLEGE INFORMATION
              ================================================= */}
              <div className="min-w-0 flex-1">
                <div
                  className="truncate"
                  style={{
                    font: '600 13px/17px "General Sans", sans-serif',
                    color: "var(--navy)",
                  }}
                >
                  {tenantName}
                </div>

                <div
                  className="truncate"
                  style={{
                    marginTop: "1px",
                    font: '400 12px/16px "General Sans", sans-serif',
                    color: "var(--ink-muted)",
                  }}
                >
                  Placement cell
                </div>
              </div>

              {/* =================================================
                  LOGOUT BUTTON
              ================================================= */}
              <button
                type="button"
                onClick={handleLogout}
                aria-label="Log out"
                title="Log out"
                className="grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded-lg transition-colors hover:bg-[#f5f6f8]"
              >
                <LogOut
                  size={18}
                  strokeWidth={1.8}
                  style={{
                    color: "var(--ink-muted)",
                  }}
                />
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}