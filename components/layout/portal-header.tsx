"use client";

import {
  Armchair,
  ChevronRight,
  FlaskConical,
} from "lucide-react";

import { useAppSelector } from "@/store/hooks";
import { selectPortal } from "@/store/common/selectors/tenant.selectors";
import {
  PORTAL_TYPES,
  PortalType,
} from "@/config/portal";

import {
  NotificationCenter,
} from "@/features/notifications";

import { useHeaderContent } from "./header-context";

const PORTAL_BADGE_LABEL: Record<
  PortalType,
  string
> = {
  [PORTAL_TYPES.COLLEGE]: "DEMO STATE",
  [PORTAL_TYPES.STUDENT]: "DEMO STATE",
  [PORTAL_TYPES.EMPLOYER]: "DEMO STATE",
  [PORTAL_TYPES.ADMIN]: "DEMO STATE",
};

export function PortalHeader() {
  const {
    title,
    subtitle,
    badge,
    stat,
    action,
  } = useHeaderContent();

  const portal =
    useAppSelector(selectPortal);

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
        gap-[12px]
        border-b
        border-[#e7e9ee]
        bg-white
        px-[16px]
        py-[10px]
      "
      style={{
        fontFamily:
          "'General Sans', sans-serif",
      }}
    >
      {/* TITLE + SUBTITLE */}
      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
          gap-[2px]
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
            fontFamily:
              "'General Sans', sans-serif",
            fontWeight: 700,
          }}
        >
          {title}
        </h1>

        <span
          className="
            truncate
            whitespace-nowrap
            text-[12.5px]
            leading-[17px]
            font-[400]
            text-[#777f90]
          "
          style={{
            fontFamily:
              "'General Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          {subtitle}
        </span>
      </div>

      {/* DEMO STATE */}
      <div
        className="
          hidden
          shrink-0
          items-center
          gap-[6px]
          px-[6px]
          py-[7px]
          text-[#5d6673]
          sm:flex
        "
        style={{
          fontFamily:
            "'General Sans', sans-serif",
        }}
      >
        {resolvedBadge.icon && (
          <resolvedBadge.icon
            size={15}
            strokeWidth={2}
            className="shrink-0"
          />
        )}

        <span
          className="
            text-[11.5px]
            leading-[14px]
            font-[700]
            tracking-[0.04em]
          "
        >
          {resolvedBadge.label}
        </span>
      </div>

      {/* SEATS */}
      {stat && (
        <button
          type="button"
          aria-label="Seats used — open billing"
          title={`${stat.label} — open Seats & payment to add more before you run out`}
          className="
            flex
            h-[40px]
            shrink-0
            items-center
            gap-[10px]
            rounded-xl
            border
            border-[#e5e7ec]
            bg-white
            px-[10px]
            pl-[6px]
            cursor-pointer
            hover:border-[#cfd3dc]
            transition-colors
          "
          style={{
            fontFamily:
              "'General Sans', sans-serif",
          }}
        >
          {/* ARMCHAIR */}
          <span
            className="
              grid
              h-[28px]
              w-[28px]
              shrink-0
              place-items-center
              rounded-[8px]
              bg-[#edf2fa]
            "
          >
            <Armchair
              size={15}
              strokeWidth={2.2}
              className="text-[#2c62c4]"
            />
          </span>

          {/* LABEL + PROGRESS */}
          <span
            className="
              flex
              flex-col
              gap-[3px]
            "
          >
            <span
              className="
                whitespace-nowrap
                text-[13px]
                leading-[16px]
                font-[700]
                text-[#151b2b]
              "
            >
              {stat.label}
            </span>

            {typeof stat.progress ===
              "number" && (
              <span
                className="
                  block
                  h-[3.5px]
                  w-[96px]
                  overflow-hidden
                  rounded-full
                  bg-[#e5e7ec]
                "
              >
                <span
                  className="
                    block
                    h-full
                    rounded-full
                    bg-[#2c62c4]
                  "
                  style={{
                    width: `${Math.min(
                      100,
                      Math.max(
                        0,
                        stat.progress,
                      ),
                    )}%`,
                  }}
                />
              </span>
            )}
          </span>

          {/* CHEVRON */}
          <ChevronRight
            size={14}
            strokeWidth={2}
            className="shrink-0 text-[#777f90]"
          />
        </button>
      )}

      {/* ACTION BUTTON(S) */}
      {action && (
        <div className="flex shrink-0 items-center">
          {action}
        </div>
      )}

      {/* NOTIFICATION */}
      <NotificationCenter />
    </header>
  );
}