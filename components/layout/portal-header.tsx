"use client";

import {
  Bell,
  ChevronRight,
  FlaskConical,
} from "lucide-react";

import { useAppSelector } from "@/store/hooks";
import { selectPortal } from "@/store/selectors/tenant.selectors";
import { PORTAL_TYPES, PortalType } from "@/config/portal";
import { useHeaderContent } from "./header-context";

const PORTAL_BADGE_LABEL: Record<PortalType, string> = {
  [PORTAL_TYPES.COLLEGE]: "College · Demo state",
  [PORTAL_TYPES.STUDENT]: "Student · Demo state",
  [PORTAL_TYPES.EMPLOYER]: "Employer · Demo state",
  [PORTAL_TYPES.ADMIN]: "Admin · Demo state",
};

export function PortalHeader() {
  const { title, subtitle, badge, stat } =
    useHeaderContent();
  const portal = useAppSelector(selectPortal);

  const resolvedBadge = badge ?? {
    icon: FlaskConical,
    label: portal
      ? PORTAL_BADGE_LABEL[portal]
      : "Demo state",
  };

  return (
    <header className="flex min-h-[72px] shrink-0 items-center justify-between gap-4 border-b border-[#e7e9ee] bg-white px-5 py-3 lg:px-7">
      <div className="min-w-0">
        <h1 className="truncate text-[22px] font-semibold text-[#151b2b]">
          {title}
        </h1>

        <p className="mt-1 truncate text-[13px] text-[#777f90]">
          {subtitle}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <div className="hidden items-center gap-1.5 text-[13px] font-medium text-[#4f5666] sm:flex">
          {resolvedBadge.icon && (
            <resolvedBadge.icon size={15} />
          )}
          {resolvedBadge.label}
        </div>

        {stat && (
          <button
            type="button"
            className="hidden items-center gap-3 rounded-lg border border-[#e5e7ec] bg-white px-3 py-2 sm:flex"
          >
            {stat.icon && (
              <stat.icon
                size={15}
                className="text-[#5b4fcf]"
              />
            )}

            <div className="text-left">
              <div className="text-xs font-semibold text-[#303747]">
                {stat.label}
              </div>

              {stat.sublabel && (
                <div className="mt-0.5 text-[11px] text-[#8a91a0]">
                  {stat.sublabel}
                </div>
              )}

              {typeof stat.progress === "number" && (
                <div className="mt-1.5 h-1 w-20 overflow-hidden rounded-full bg-[#f0f1f4]">
                  <div
                    className="h-full rounded-full bg-[#5b4fcf]"
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(0, stat.progress),
                      )}%`,
                    }}
                  />
                </div>
              )}
            </div>

            <ChevronRight
              size={14}
              className="text-[#8a91a0]"
            />
          </button>
        )}

        <button
          type="button"
          className="relative rounded-lg border border-[#e5e7ec] p-2 text-[#777f90] hover:bg-[#f5f6f8]"
          aria-label="Notifications"
        >
          <Bell size={17} />

          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#e5484d]" />
        </button>
      </div>
    </header>
  );
}
