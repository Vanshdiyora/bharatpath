"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";

import { usePageHeader } from "@/components/layout/header-context";
import { CollegeProfileForm } from "./college-profile";
import { CollegeUsers } from "./college-users";
import { Billing } from "./billing";
import { CollegeSettings } from "../types";

interface CollegeSettingsProps {
  data: CollegeSettings;
}

export function CollegeSettingsView({
  data,
}: CollegeSettingsProps) {
  usePageHeader(
    "Settings & Billing",
    "College profile, users, seats and payment",
    {
      stat: {
        icon: CreditCard,
        label: `${data.billing.seatsUsed} / ${data.billing.seatsTotal} seats used`,
        sublabel: data.billing.paymentStatus,
        progress:
          data.billing.seatsTotal > 0
            ? (data.billing.seatsUsed /
                data.billing.seatsTotal) *
              100
            : 0,
      },
    },
  );

  const [tab, setTab] = useState<
    "profile" | "users" | "billing"
  >("profile");

  const tabs = [
    ["profile", "College profile"],
    ["users", "Users"],
    ["billing", "Seats & payment"],
  ] as const;

  return (
    <div className="mx-auto max-w-[1100px] space-y-6">
      <div className="flex overflow-x-auto border-b border-[#e7e9ee]">
        {tabs.map(([value, label]) => (
          <button
            key={value}
            onClick={() => setTab(value)}
            className={`whitespace-nowrap border-b-2 px-4 py-3 text-xs font-semibold ${
              tab === value
                ? "border-[#5b4fcf] text-[#5b4fcf]"
                : "border-transparent text-[#777f90]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "profile" && (
        <CollegeProfileForm
          profile={data.profile}
        />
      )}

      {tab === "users" && (
        <CollegeUsers users={data.users} />
      )}

      {tab === "billing" && (
        <Billing billing={data.billing} />
      )}
    </div>
  );
}