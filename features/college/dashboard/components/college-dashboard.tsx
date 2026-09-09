"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  Check,
  Copy,
  Gauge,
  ShieldCheck,
  Users,
} from "lucide-react";

import { usePageHeader } from "@/components/layout/header-context";
import { CollegeDashboard as DashboardData } from "../types";
import { MetricCard } from "./metric-card";
import { RecentActivityList } from "./recent-activity";
import { ScoreDistribution } from "./score-distribution";

export function CollegeDashboard({
  data,
}: {
  data: DashboardData;
}) {
  usePageHeader(
    "Dashboard",
    "Cohort overview, linking code and recent activity",
    {
      stat: {
        icon: Users,
        label: `${data.seats.used} / ${data.seats.total} seats used`,
        sublabel: `${Math.max(
          data.seats.total - data.seats.used,
          0,
        )} seats remaining`,
        progress:
          data.seats.total > 0
            ? (data.seats.used / data.seats.total) * 100
            : 0,
      },
    },
  );

  return (
    <div className="mx-auto max-w-[1280px] space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Students linked"
          value={data.stats.studentsLinked}
          icon={Users}
          tone="purple"
        />

        <MetricCard
          title="Consent shared"
          value={data.stats.consentShared}
          icon={ShieldCheck}
          tone="green"
        />

        <MetricCard
          title="Average score"
          value={data.stats.averageScore}
          icon={Gauge}
          tone="blue"
        />

        <MetricCard
          title="Hired via platform"
          value={data.stats.hiredViaPlatform}
          icon={BriefcaseBusiness}
          tone="orange"
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <ScoreDistribution
          bands={data.scoreBands}
          averageScore={data.stats.averageScore}
        />

        <RecentActivityList
          activities={data.recentActivity}
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <ReferralCode code={data.referralCode} />

        <div className="rounded-xl border border-[#e5e7ec] bg-white p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-[#8a91a0]">
                Seats
              </p>

              <p className="mt-1 text-lg font-semibold text-[#151b2b]">
                {data.seats.used} /{" "}
                {data.seats.total}
              </p>
            </div>
          </div>

          <div className="mt-4 h-2 rounded-full bg-[#f0f1f4]">
            <div
              className="h-full rounded-full bg-[#5b4fcf]"
              style={{
                width: `${Math.min(
                  100,
                  (data.seats.used /
                    data.seats.total) *
                    100,
                )}%`,
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-[#252b3b]">
          Quick actions
        </h2>

        <div className="mt-3 flex flex-wrap gap-2">
          <button className="rounded-lg bg-[#151b2b] px-4 py-2.5 text-xs font-semibold text-white">
            Invite students by email
          </button>

          <button className="rounded-lg border border-[#dfe2e8] bg-white px-4 py-2.5 text-xs font-semibold text-[#303747]">
            Bulk upload a roster
          </button>
        </div>
      </div>
    </div>
  );
}

function ReferralCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-xl border border-[#e5e7ec] bg-white p-5">
      <h2 className="text-sm font-semibold text-[#252b3b]">
        Referral code
      </h2>

      <p className="mt-1 text-xs text-[#8a91a0]">
        Students enter this code in the BharatPath
        app to link their account to your
        institution.
      </p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <code className="rounded-lg bg-[#f5f6f8] px-3 py-2 text-sm font-semibold text-[#252b3b]">
          {code}
        </code>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#dfe2e8] px-3 py-2 text-xs font-semibold text-[#303747]"
        >
          {copied ? (
            <Check size={13} />
          ) : (
            <Copy size={13} />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}