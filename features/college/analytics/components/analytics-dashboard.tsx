"use client";

import { useState } from "react";
import { Download, TrendingUp } from "lucide-react";
import { usePageHeader } from "@/components/layout/header-context";
import { CollegeAnalytics } from "../types";

interface AnalyticsDashboardProps {
  data: CollegeAnalytics;
}

export function AnalyticsDashboard({
  data,
}: AnalyticsDashboardProps) {
  usePageHeader(
    "Analytics & Outcomes",
    "Cohort score analytics and platform-sourced outcomes",
    {
      stat: {
        icon: TrendingUp,
        label: `${data.metrics.averageScore} avg score`,
        sublabel: `${data.metrics.hired} hired`,
      },
    },
  );

  const [cohort, setCohort] =
    useState("2025-26");

  return (
    <div className="mx-auto max-w-[1280px] space-y-6">
      <div className="flex justify-end">
        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#151b2b] px-4 py-2.5 text-xs font-semibold text-white">
          <Download size={15} />
          Export report
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto">
        {[
          ["2025-26", "Cohort 2025-26"],
          ["2024-25", "Cohort 2024-25"],
          ["all", "All cohorts"],
        ].map(([value, label]) => (
          <button
            key={value}
            onClick={() => setCohort(value)}
            className={`whitespace-nowrap rounded-full border px-3 py-2 text-xs font-semibold ${
              cohort === value
                ? "border-[#5b4fcf] bg-[#eef0ff] text-[#4e43b7]"
                : "border-[#dfe2e8] bg-white text-[#777f90]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric
          label="Students"
          value={data.metrics.students}
        />

        <Metric
          label="Average score"
          value={data.metrics.averageScore}
        />

        <Metric
          label="Median score"
          value={data.metrics.medianScore}
        />

        <Metric
          label="Hired"
          value={data.metrics.hired}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-[#e5e7ec] bg-white p-5">
          <h2 className="text-sm font-semibold text-[#252b3b]">
            Course performance
          </h2>

          <div className="mt-6 space-y-5">
            {data.courseScores.map((course) => (
              <div key={course.label}>
                <div className="mb-2 flex justify-between text-xs">
                  <span className="font-medium text-[#4f5666]">
                    {course.label}
                  </span>

                  <span className="font-semibold text-[#252b3b]">
                    {course.score}
                  </span>
                </div>

                <div className="h-2 rounded-full bg-[#f0f1f4]">
                  <div
                    className="h-full rounded-full bg-[#5b4fcf]"
                    style={{
                      width: `${course.percentage}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#e5e7ec] bg-white p-5">
          <h2 className="text-sm font-semibold text-[#252b3b]">
            Skill gaps
          </h2>

          <div className="mt-6 space-y-5">
            {data.skillGaps.map((gap) => (
              <div key={gap.label}>
                <div className="mb-2 flex justify-between text-xs">
                  <span className="font-medium text-[#4f5666]">
                    {gap.label}
                  </span>

                  <span className="font-semibold text-[#986c08]">
                    {gap.percentageBelowMedian}%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-[#f0f1f4]">
                  <div
                    className="h-full rounded-full bg-[#d49a22]"
                    style={{
                      width: `${gap.percentageBelowMedian}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-[#e5e7ec] bg-white">
        <div className="border-b border-[#e7e9ee] p-5">
          <h2 className="text-sm font-semibold text-[#252b3b]">
            Platform-sourced outcomes
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead>
              <tr className="bg-[#fafbfc]">
                <th className="px-5 py-3 text-[11px] uppercase text-[#8a91a0]">
                  Role
                </th>
                <th className="px-5 py-3 text-[11px] uppercase text-[#8a91a0]">
                  Employer
                </th>
                <th className="px-5 py-3 text-[11px] uppercase text-[#8a91a0]">
                  Applied
                </th>
                <th className="px-5 py-3 text-[11px] uppercase text-[#8a91a0]">
                  Stage
                </th>
                <th className="px-5 py-3 text-[11px] uppercase text-[#8a91a0]">
                  Students
                </th>
              </tr>
            </thead>

            <tbody>
              {data.outcomes.map((outcome) => (
                <tr
                  key={outcome.id}
                  className="border-t border-[#f0f1f4]"
                >
                  <td className="px-5 py-4 text-sm font-medium text-[#252b3b]">
                    {outcome.role}
                  </td>

                  <td className="px-5 py-4 text-sm text-[#4f5666]">
                    {outcome.employer}
                  </td>

                  <td className="px-5 py-4 text-xs text-[#8a91a0]">
                    {outcome.applied}
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-full bg-[#eef0ff] px-2.5 py-1 text-[11px] font-semibold text-[#4e43b7]">
                      {outcome.stage}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-[#252b3b]">
                    {outcome.students}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-[#e5e7ec] bg-white p-5">
      <p className="text-xs text-[#8a91a0]">
        {label}
      </p>

      <p className="mt-2 text-2xl font-semibold text-[#151b2b]">
        {value}
      </p>
    </div>
  );
}