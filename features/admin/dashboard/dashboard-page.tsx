"use client";

import {
  Building2,
  GraduationCap,
  Gavel,
  IdCard,
  ShieldAlert,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { usePageHeader } from "@/components/layout/header-context";
import { MetricCard } from "@/components/common/dashboard/metric-card";

import {
  disputes,
  integrityItems,
  kybItems,
} from "../shared/data";

export function AdminDashboard() {
  const router = useRouter();

  usePageHeader(
    "Operations",
    "Monitor verification, integrity and platform activity from one place.",
  );

  /*
   * --------------------------------------------------------------------------
   * Dashboard metrics
   * --------------------------------------------------------------------------
   */

  const kybCount = kybItems?.length ?? 0;
  const integrityCount = integrityItems?.length ?? 0;
  const disputeCount = disputes?.length ?? 0;

  const metrics = [
    {
      title: "KYB awaiting review",
      value: kybCount,
      icon: IdCard,
      tone: "purple" as const,
      status: "All within SLA",
      statusTone: "success" as const,
      onClick: () => router.push("/admin/queue"),
    },
    {
      title: "Integrity flags",
      value: integrityCount,
      icon: ShieldAlert,
      tone: "amber" as const,
      status: "1 escalated",
      statusTone: "warning" as const,
      onClick: () => router.push("/admin/queue"),
    },
    {
      title: "Open disputes",
      value: disputeCount,
      icon: Gavel,
      tone: "red" as const,
      status: "Oldest 2 days",
      statusTone: "neutral" as const,
      onClick: () => router.push("/admin/disputes"),
    },
    {
      title: "Active employers",
      value: 148,
      icon: Building2,
      tone: "navy" as const,
      status: "+6 this week",
      statusTone: "success" as const,
      onClick: () => router.push("/admin/users"),
    },
  ];

  /*
   * --------------------------------------------------------------------------
   * Oldest items waiting
   * --------------------------------------------------------------------------
   */

  const oldestItems = [
    {
      name: "Sterling Diagnostics Pvt Ltd",
      meta: "GSTIN 27ABCDE1234F1Z5",
      initials: "SD",
      type: "KYB",
      risk: "Medium",
      waiting: "14h",
    },
    {
      name: "Sterling Diagnostics Pvt Ltd",
      meta: "GSTIN 27ABCDE1234F1Z5",
      initials: "SD",
      type: "KYB",
      risk: "Medium",
      waiting: "14h",
    },
    {
      name: "Sterling Diagnostics Pvt Ltd",
      meta: "GSTIN 27ABCDE1234F1Z5",
      initials: "SD",
      type: "KYB",
      risk: "Medium",
      waiting: "14h",
    },
    {
      name: "Sterling Diagnostics Pvt Ltd",
      meta: "GSTIN 27ABCDE1234F1Z5",
      initials: "SD",
      type: "KYB",
      risk: "Medium",
      waiting: "14h",
    },
    {
      name: "Sterling Diagnostics Pvt Ltd",
      meta: "GSTIN 27ABCDE1234F1Z5",
      initials: "SD",
      type: "KYB",
      risk: "Medium",
      waiting: "14h",
    },
    {
      name: "Sterling Diagnostics Pvt Ltd",
      meta: "GSTIN 27ABCDE1234F1Z5",
      initials: "SD",
      type: "KYB",
      risk: "Medium",
      waiting: "14h",
    },
    {
      name: "Sterling Diagnostics Pvt Ltd",
      meta: "GSTIN 27ABCDE1234F1Z5",
      initials: "SD",
      type: "KYB",
      risk: "Medium",
      waiting: "14h",
    },
    {
      name: "Nashik Pharma Works",
      meta: "GSTIN 27PQRST5678K2M1",
      initials: "NP",
      type: "KYB",
      risk: "Low",
      waiting: "11h",
    },
    {
      name: "Candidate · C218",
      meta: "Duplicate device fingerprint",
      initials: "C2",
      type: "Integrity",
      risk: "High",
      waiting: "8h",
    },
    {
      name: "Chakan Auto Components",
      meta: "GSTIN 27LMNOP9012J3H4",
      initials: "CA",
      type: "KYB",
      risk: "Low",
      waiting: "6h",
    },
    {
      name: "Candidate · C331",
      meta: "Score anomaly on retest",
      initials: "C3",
      type: "Integrity",
      risk: "Medium",
      waiting: "3h",
    },
  ];

  /*
   * --------------------------------------------------------------------------
   * Helpers
   * --------------------------------------------------------------------------
   */

  const getTypeClasses = (type: string) => {
    if (type === "KYB") {
      return "bg-[#eef0ff] text-[#4e43b7]";
    }

    return "bg-[#fff4df] text-[#a86500]";
  };

  const getRiskClasses = (risk: string) => {
    switch (risk) {
      case "High":
        return "bg-[#fdecec] text-[#c43d3d]";

      case "Medium":
        return "bg-[#fff4df] text-[#a86500]";

      case "Low":
      default:
        return "bg-[#f1f3f6] text-[#697386]";
    }
  };

  const getAvatarClasses = (type: string) => {
    if (type === "KYB") {
      return "bg-[#eef0ff] text-[#4e43b7]";
    }

    return "bg-[#fff4df] text-[#a86500]";
  };

  /*
   * --------------------------------------------------------------------------
   * Platform totals
   * --------------------------------------------------------------------------
   */

  const platformTotals = [
    {
      label: "Candidates",
      value: "18,402",
      icon: User,
      iconWrapper: "bg-[#f1f3f6]",
      iconColor: "text-[#151b2b]",
    },
    {
      label: "Employers",
      value: "148",
      icon: Building2,
      iconWrapper: "bg-[#eef0ff]",
      iconColor: "text-[#4e43b7]",
    },
    {
      label: "Institutions",
      value: "26",
      icon: GraduationCap,
      iconWrapper: "bg-[#e6f6ec]",
      iconColor: "text-[#1f8a4c]",
    },
  ];

  /*
   * --------------------------------------------------------------------------
   * Intake vs cleared
   * --------------------------------------------------------------------------
   */

  const intakeClearedData = [
    {
      day: "Mon",
      intake: 18,
      cleared: 21,
      intakeHeight: 69,
      clearedHeight: 81,
    },
    {
      day: "Tue",
      intake: 22,
      cleared: 24,
      intakeHeight: 85,
      clearedHeight: 92,
    },
    {
      day: "Wed",
      intake: 16,
      cleared: 19,
      intakeHeight: 62,
      clearedHeight: 73,
    },
    {
      day: "Thu",
      intake: 24,
      cleared: 26,
      intakeHeight: 92,
      clearedHeight: 100,
    },
    {
      day: "Fri",
      intake: 20,
      cleared: 22,
      intakeHeight: 77,
      clearedHeight: 85,
    },
  ];

  return (
    <div className="min-w-0 space-y-5">
      {/* ================================================================== */}
      {/* Metrics                                                            */}
      {/* ================================================================== */}

      <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
            tone={metric.tone}
            status={metric.status}
            statusTone={metric.statusTone}
            onClick={metric.onClick}
          />
        ))}
      </div>

      {/* ================================================================== */}
      {/* Main content                                                       */}
      {/* ================================================================== */}

      <div className="grid min-w-0 items-stretch gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        {/* ================================================================ */}
        {/* Oldest items waiting                                             */}
        {/* ================================================================ */}

        <section className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden rounded-[16px] border border-[#e5e7ec] bg-white lg:h-[530px] lg:max-h-[568px]">
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between gap-4 px-5 py-4">
            <div className="min-w-0">
              <h2
                className="text-[14px] font-semibold leading-[20px] text-[#151b2b]"
                style={{
                  fontFamily: "'General Sans', sans-serif",
                }}
              >
                Oldest items waiting
              </h2>

              <p
                className="mt-0.5 text-[12px] leading-[18px] text-[#777f90]"
                style={{
                  fontFamily: "'General Sans', sans-serif",
                }}
              >
                Items that need operator attention first.
              </p>
            </div>

            <Link
              href="/admin/queue"
              className="shrink-0 rounded-[8px] px-2.5 py-2 text-[12px] font-semibold text-[#4e43b7] transition-colors hover:bg-[#f1f0ff]"
            >
              View queue
            </Link>
          </div>

          {/* ============================================================ */}
          {/* Table scroll container                                       */}
          {/* ============================================================ */}

          <div className="min-h-0 flex-1 overflow-auto">
            <div className="min-w-[620px]">
              {/* Table header */}
              <div className="sticky top-0 z-10 grid grid-cols-[minmax(180px,1.6fr)_120px_104px_88px] gap-3 border-t border-[#eef0f3] bg-[#fafbfc] px-5 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8a91a0]">
                  Subject
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8a91a0]">
                  Type
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8a91a0]">
                  Risk
                </span>

                <span className="text-right text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8a91a0]">
                  Waiting
                </span>
              </div>

              {/* Table rows */}
              <div>
                {oldestItems.map((item, index) => (
                  <button
                    key={`${item.name}-${index}`}
                    type="button"
                    onClick={() => router.push("/admin/queue")}
                    className="grid min-h-[56px] w-full grid-cols-[minmax(180px,1.6fr)_120px_104px_88px] items-center gap-3 border-t border-[#eef0f3] px-5 text-left transition-colors hover:bg-[#fafbfc]"
                  >
                    {/* Subject */}
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={[
                          "grid h-7 w-7 shrink-0 place-items-center rounded-[8px]",
                          "text-[11px] font-bold leading-[14px]",
                          getAvatarClasses(item.type),
                        ].join(" ")}
                      >
                        {item.initials}
                      </div>

                      <div className="min-w-0">
                        <p
                          className="truncate text-[12px] font-semibold leading-[18px] text-[#151b2b]"
                          style={{
                            fontFamily: "'General Sans', sans-serif",
                          }}
                        >
                          {item.name}
                        </p>

                        <p
                          className="truncate text-[11px] leading-[16px] text-[#8a91a0]"
                          style={{
                            fontFamily: "'General Sans', sans-serif",
                          }}
                        >
                          {item.meta}
                        </p>
                      </div>
                    </div>

                    {/* Type */}
                    <span
                      className={[
                        "inline-flex w-fit items-center rounded-full px-2.5 py-1",
                        "text-[10px] font-semibold leading-[14px]",
                        getTypeClasses(item.type),
                      ].join(" ")}
                    >
                      {item.type}
                    </span>

                    {/* Risk */}
                    <span
                      className={[
                        "inline-flex w-fit items-center rounded-full px-2.5 py-1",
                        "text-[10px] font-semibold leading-[14px]",
                        getRiskClasses(item.risk),
                      ].join(" ")}
                    >
                      {item.risk}
                    </span>

                    {/* Waiting */}
                    <span
                      className="text-right text-[12px] font-semibold text-[#151b2b]"
                      style={{
                        fontFamily: "'General Sans', sans-serif",
                      }}
                    >
                      {item.waiting}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* Right column                                                     */}
        {/* ================================================================ */}

        <div className="flex min-w-0 flex-col gap-4">
          {/* ============================================================ */}
          {/* Platform totals                                               */}
          {/* ============================================================ */}

          <section className="rounded-[12px] border border-[#e5e7ec] bg-white p-5 shadow-[0_4px_12px_rgba(19,26,38,0.024)]">
            <div className="flex flex-col gap-3">
              {/* Title */}
              <span
                className="text-[14px] font-semibold leading-[18px] text-[#151b2b]"
                style={{
                  fontFamily: "'General Sans', sans-serif",
                }}
              >
                Platform totals
              </span>

              {/* Rows */}
              <div>
                {platformTotals.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className={[
                        "flex items-center gap-[10px]",
                        index === 0
                          ? "pb-3 pt-1"
                          : "border-t border-[#eef0f3] py-3",
                      ].join(" ")}
                    >
                      {/* Icon */}
                      <span
                        className={[
                          "grid h-8 w-8 shrink-0 place-items-center rounded-[8px]",
                          item.iconWrapper,
                        ].join(" ")}
                      >
                        <Icon
                          size={16}
                          strokeWidth={2}
                          className={item.iconColor}
                        />
                      </span>

                      {/* Label */}
                      <span
                        className="min-w-0 flex-1 text-[13px] font-medium leading-[17px] text-[#4f5665]"
                        style={{
                          fontFamily: "'General Sans', sans-serif",
                        }}
                      >
                        {item.label}
                      </span>

                      {/* Value */}
                      <span
                        className="text-[15px] font-bold leading-[19px] text-[#151b2b]"
                        style={{
                          fontFamily: "'General Sans', sans-serif",
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/* Intake vs cleared                                             */}
          {/* ============================================================ */}

          <section className="rounded-[12px] border border-[#e5e7ec] bg-white p-5 shadow-[0_4px_12px_rgba(19,26,38,0.024)]">
            <div className="flex flex-col gap-3">
              {/* Header */}
              <div className="flex items-start gap-3">
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span
                    className="text-[14px] font-semibold leading-[18px] text-[#151b2b]"
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                    }}
                  >
                    Intake vs cleared
                  </span>

                  <span
                    className="text-[12px] font-normal leading-[17px] text-[#777f90]"
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                    }}
                  >
                    This week, all queues
                  </span>
                </div>

                <span
                  className="shrink-0 whitespace-nowrap rounded-full bg-[#e6f6ec] px-[10px] py-1 text-[11px] font-semibold leading-[14px] text-[#1f8a4c]"
                  style={{
                    fontFamily: "'General Sans', sans-serif",
                  }}
                >
                  12 cleared from backlog
                </span>
              </div>

              {/* Chart */}
              <div className="flex h-[96px] items-end gap-[10px]">
                {intakeClearedData.map((item) => (
                  <div
                    key={item.day}
                    className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-[6px]"
                  >
                    <div
                      className="flex h-full w-full items-end gap-[3px]"
                      title={`${item.day}: ${item.intake} in, ${item.cleared} cleared`}
                    >
                      {/* Intake */}
                      <div className="flex h-full flex-1 items-end">
                        <span
                          className="block w-full rounded-t-[4px] bg-[#e5e7ec]"
                          style={{
                            height: `${item.intakeHeight}%`,
                          }}
                        />
                      </div>

                      {/* Cleared */}
                      <div className="flex h-full flex-1 items-end">
                        <span
                          className="block w-full rounded-t-[4px] bg-[#1f8a4c]"
                          style={{
                            height: `${item.clearedHeight}%`,
                          }}
                        />
                      </div>
                    </div>

                    <span
                      className="text-[11px] font-medium leading-[14px] text-[#777f90]"
                      style={{
                        fontFamily: "'General Sans', sans-serif",
                      }}
                    >
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <span
                className="border-t border-[#eef0f3] pt-3 text-[12px] font-normal leading-[17px] text-[#777f90]"
                style={{
                  fontFamily: "'General Sans', sans-serif",
                }}
              >
                Grey is what arrived, colour is what operators cleared. 100
                in, 112 out this week.
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}