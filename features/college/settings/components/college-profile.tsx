"use client";

import { useState } from "react";
import { CollegeProfile } from "../types";

interface CollegeProfileProps {
  profile: CollegeProfile;
}

export function CollegeProfileForm({
  profile,
}: CollegeProfileProps) {
  const [form, setForm] = useState(profile);

  return (
    <div className="rounded-xl border border-[#e5e7ec] bg-white p-5">
      <h2 className="text-sm font-semibold text-[#252b3b]">
        College profile
      </h2>

      <p className="mt-1 text-xs text-[#8a91a0]">
        Manage your institution information.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field
          label="Legal name"
          value={form.legalName}
          onChange={(value) =>
            setForm({
              ...form,
              legalName: value,
            })
          }
        />

        <Field
          label="Display name"
          value={form.displayName}
          onChange={(value) =>
            setForm({
              ...form,
              displayName: value,
            })
          }
        />

        <Field
          label="AICTE code"
          value={form.aicteCode ?? ""}
          onChange={(value) =>
            setForm({
              ...form,
              aicteCode: value,
            })
          }
        />

        <Field
          label="City"
          value={form.city ?? ""}
          onChange={(value) =>
            setForm({
              ...form,
              city: value,
            })
          }
        />

        <Field
          label="Contact email"
          value={form.contactEmail}
          onChange={(value) =>
            setForm({
              ...form,
              contactEmail: value,
            })
          }
        />

        <Field
          label="Phone"
          value={form.phone ?? ""}
          onChange={(value) =>
            setForm({
              ...form,
              phone: value,
            })
          }
        />
      </div>

      <div className="mt-6">
        <button className="rounded-lg bg-[#151b2b] px-4 py-2.5 text-xs font-semibold text-white">
          Save changes
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label>
      <span className="mb-2 block text-xs font-medium text-[#4f5666]">
        {label}
      </span>

      <input
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="h-10 w-full rounded-lg border border-[#dfe2e8] px-3 text-sm outline-none focus:border-[#5b4fcf]"
      />
    </label>
  );
}