"use client";

import {
  Armchair,
  Bell,
  ChevronRight,
  FlaskConical,
} from "lucide-react";

import { useAppSelector } from "@/store/hooks";
import { selectPortal } from "@/store/selectors/tenant.selectors";
import { PORTAL_TYPES, PortalType } from "@/config/portal";
import { useHeaderContent } from "./header-context";

const PORTAL_BADGE_LABEL: Record<PortalType, string> = {
  [PORTAL_TYPES.COLLEGE]: "DEMO STATE",
  [PORTAL_TYPES.STUDENT]: "DEMO STATE",
  [PORTAL_TYPES.EMPLOYER]: "DEMO STATE",
  [PORTAL_TYPES.ADMIN]: "DEMO STATE",
};

export function PortalHeader() {
  const { title, subtitle, badge, stat } = useHeaderContent();

  const portal = useAppSelector(selectPortal);

  const resolvedBadge = badge ?? {
    icon: FlaskConical,
    label: portal
      ? PORTAL_BADGE_LABEL[portal]
      : "DEMO STATE",
  };

  return (
    <header
      className="
        flex
        min-h-[64px]
        shrink-0
        items-center
        gap-[8px]
        border-b
        border-[#e7e9ee]
        bg-white
        px-[16px]
        py-[10px]
      "
      style={{
        fontFamily: "'General Sans', sans-serif",
      }}
    >
      {/* TITLE + SUBTITLE */}
      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
          gap-[4px]
        "
      >
        <h1
          className="
            m-0
            truncate
            text-[18px]
            leading-[23px]
            font-[700]
            tracking-[-0.01em]
            text-[#151b2b]
          "
          style={{
            fontFamily: "'General Sans', sans-serif",
            fontWeight: 700,
          }}
        >
          {title}
        </h1>

        <span
          className="
            truncate
            whitespace-nowrap
            text-[12px]
            leading-[17px]
            font-[400]
            text-[#777f90]
          "
          style={{
            fontFamily: "'General Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          {subtitle}
        </span>
      </div>

      {/* DEMO STATE */}
      <button
        type="button"
        className="
          hidden
          shrink-0
          items-center
          gap-[6px]
          rounded-[8px]
          px-[12px]
          py-[7px]
          text-[#777f90]
          sm:flex
        "
        style={{
          fontFamily: "'General Sans', sans-serif",
        }}
      >
        {resolvedBadge.icon && (
          <resolvedBadge.icon
            size={14}
            strokeWidth={2}
          />
        )}

        <span
          className="
            text-[11px]
            leading-[14px]
            font-[600]
            tracking-[0.04em]
          "
          style={{
            fontFamily: "'General Sans', sans-serif",
            fontWeight: 600,
          }}
        >
          {resolvedBadge.label}
        </span>
      </button>

      {/* SEATS */}
      {stat && (
        <button
          type="button"
          aria-label="Seats used — open billing"
          title={`${stat.label} — open Seats & payment to add more before you run out`}
          className="
            flex
            h-[36px]
            shrink-0
            items-center
            gap-[10px]
            rounded-[10px]
            border
            border-[#e5e7ec]
            bg-white
            px-[10px]
            pl-[6px]
          "
          style={{
            fontFamily: "'General Sans', sans-serif",
          }}
        >
          {/* ARMCHAIR */}
          <span
            className="
              grid
              h-[24px]
              w-[24px]
              shrink-0
              place-items-center
              rounded-[8px]
              bg-[#edf2fa]
            "
          >
            <Armchair
              size={14}
              strokeWidth={2}
              className="text-[#5b4fcf]"
            />
          </span>

          {/* LABEL + PROGRESS */}
          <span
            className="
              flex
              flex-col
              gap-[2px]
            "
          >
            <span
              className="
                whitespace-nowrap
                text-[12px]
                leading-[16px]
                font-[600]
                text-[#303747]
              "
              style={{
                fontFamily: "'General Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              {stat.label}
            </span>

            {typeof stat.progress === "number" && (
              <span
                className="
                  block
                  h-[4px]
                  w-[88px]
                  overflow-hidden
                  rounded-full
                  bg-[#e7e9ee]
                "
              >
                <span
                  className="
                    block
                    h-full
                    rounded-full
                    bg-[#5b4fcf]
                  "
                  style={{
                    width: `${Math.min(
                      100,
                      Math.max(0, stat.progress),
                    )}%`,
                  }}
                />
              </span>
            )}
          </span>

          {/* CHEVRON */}
          <ChevronRight
            size={12}
            strokeWidth={2}
            className="shrink-0 text-[#5d6673]"
          />
        </button>
      )}

      {/* NOTIFICATION */}
      <button
        type="button"
        aria-label="Notifications"
        className="
          relative
          flex
          h-[36px]
          w-[36px]
          shrink-0
          items-center
          justify-center
          rounded-[10px]
          border
          border-[#e5e7ec]
          bg-white
          text-[#777f90]
        "
      >
        <Bell
          size={17}
          strokeWidth={1.8}
        />

        <span
          className="
            absolute
            right-[6px]
            top-[6px]
            h-[6px]
            w-[6px]
            rounded-full
            bg-[#c62828]
          "
        />
      </button>
    </header>
  );
}