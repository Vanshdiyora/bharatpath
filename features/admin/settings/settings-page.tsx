"use client";

import { CircleAlert } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
    selectAdminSettings,
    setKybMode,
    setSettingsTab,
    toggleCheck,
} from "@/store/admin";

import { usePageHeader } from "@/components/layout/header-context";

export function AdminSettingsPage() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(selectAdminSettings);

    usePageHeader(
        "Settings",
        "Approval mode, verification checks and platform controls",
    );

    const approvalOptions = [
        {
            key: "manual",
            label: "Manual approval",
            description:
                "Every employer waits for an operator decision before becoming fully active. Slower, but nothing clears unreviewed.",
        },
        {
            key: "auto",
            label: "Automatic approval",
            description:
                "Employers clear automatically once the enabled verification checks pass. Only exceptions reach the queue.",
        },
    ] as const;

    const automaticChecks = [
        {
            key: "gstin",
            label: "GSTIN active & matches entity",
            detail: "Live lookup against the GST registry",
        },
        {
            key: "pan",
            label: "PAN matches registered name",
            detail: "Name and entity-type comparison",
        },
        {
            key: "bank",
            label: "Bank account verification",
            detail: "Penny-drop to the submitted account",
        },
        {
            key: "address",
            label: "Registered address proof",
            detail: "Document match on the submitted address",
        },
    ] as const;

    const platformControls = [
        {
            label: "Credit price per unlock",
            detail: "Applies to every employer account",
            value: "1 credit",
        },
        {
            label: "Candidate masking",
            detail: "Identity hidden until an unlock is recorded",
            value: "Enforced",
        },
        {
            label: "Audit retention",
            detail: "Immutable operator action log",
            value: "7 years",
        },
    ];

    return (
        <div className="min-w-0">
            {/* =================================================
          SETTINGS TABS
          ================================================= */}
            <div className="border-b border-[#e7e9ee]">
                <div className="flex items-center gap-1">
                    {(
                        [
                            ["approval", "KYB approval"],
                            ["platform", "Platform"],
                        ] as const
                    ).map(([tab, label]) => {
                        const active = state.tab === tab;

                        return (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => dispatch(setSettingsTab(tab))}
                                className={[
                                    "relative shrink-0 cursor-pointer px-4 py-3",
                                    "text-[13px] font-semibold transition-colors",
                                    active
                                        ? "text-[#172033]"
                                        : "text-[#687182] hover:text-[#172033]",
                                ].join(" ")}
                            >
                                {label}

                                {active && (
                                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#315c9f]" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* =================================================
          KYB APPROVAL TAB
          ================================================= */}
            {state.tab === "approval" ? (
                <div className="grid min-w-0 grid-cols-1 gap-4 pt-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,348px)]">
                    {/* =================================================
              EMPLOYER KYB APPROVAL MODE
              ================================================= */}
                    <section className="min-w-0 rounded-[12px] border border-[#e5e8ee] bg-white p-5">
                        <h2 className="text-[14px] font-semibold leading-[18px] text-[#172033]">
                            Employer KYB approval mode
                        </h2>

                        <p className="mt-1 max-w-[530px] text-[12px] leading-[17px] text-[#7b8494]">
                            Controls whether an employer needs an operator decision before
                            becoming fully active. Employers can always enter the portal
                            after onboarding — this gates operational functionality.
                        </p>

                        {/* Approval Options */}
                        <div className="mt-4 space-y-2.5">
                            {approvalOptions.map((option) => {
                                const active = state.kybMode === option.key;

                                return (
                                    <button
                                        key={option.key}
                                        type="button"
                                        onClick={() => dispatch(setKybMode(option.key))}
                                        className={[
                                            "flex w-full cursor-pointer items-start gap-3 rounded-[12px] border p-4 text-left transition-colors",
                                            active
                                                ? "border-[#6557e5] bg-[#f7f5ff]"
                                                : "border-[#e5e8ee] bg-white hover:bg-[#fafbfc]",
                                        ].join(" ")}
                                    >
                                        {/* Radio */}
                                        <span
                                            className={[
                                                "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border",
                                                active
                                                    ? "border-[#6557e5]"
                                                    : "border-[#d9dee6]",
                                            ].join(" ")}
                                        >
                                            {active && (
                                                <span className="h-2.5 w-2.5 rounded-full bg-[#6557e5]" />
                                            )}
                                        </span>

                                        {/* Content */}
                                        <span className="min-w-0 flex-1">
                                            <span className="flex items-center justify-between gap-3">
                                                <span className="text-[13px] font-semibold text-[#172033]">
                                                    {option.label}
                                                </span>

                                                {active && (
                                                    <span className="shrink-0 rounded-full bg-[#6255d8] px-2.5 py-1 text-[10px] font-bold uppercase text-white">
                                                        Current
                                                    </span>
                                                )}
                                            </span>

                                            <span className="mt-1 block max-w-[440px] text-[11px] leading-[17px] text-[#7b8494]">
                                                {option.description}
                                            </span>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Warning */}
                        <div className="mt-4 flex gap-2.5 rounded-[10px] bg-[#fff5df] p-3.5">
                            <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#b17a19]" />

                            <p className="text-[11px] leading-[17px] text-[#9a6c19]">
                                {state.kybMode === "auto"
                                    ? "Automatic approval is live. Spot-check the audit trail weekly."
                                    : "Manual approval is live. Employers stay gated until an operator decides, so KYB backlog directly delays their hiring."}
                            </p>
                        </div>
                    </section>

                    {/* =================================================
              AUTOMATIC CHECKS
              ================================================= */}
                    <section className="min-w-0 rounded-[12px] border border-[#e5e8ee] bg-white p-5">
                        <h2 className="text-[14px] font-semibold leading-[18px] text-[#172033]">
                            Automatic checks
                        </h2>

                        <p className="mt-1 text-[12px] leading-[17px] text-[#7b8494]">
                            Checks that must pass before automatic approval clears an
                            employer.
                        </p>

                        <div className="mt-3 divide-y divide-[#eef0f3]">
                            {automaticChecks.map((check) => {
                                const enabled = Boolean(state.autoChecks[check.key]);

                                return (
                                    <div
                                        key={check.key}
                                        className="flex items-center gap-3 py-3.5"
                                    >
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[13px] font-semibold leading-[18px] text-[#172033]">
                                                {check.label}
                                            </p>

                                            <p className="mt-0.5 text-[11px] leading-[16px] text-[#7b8494]">
                                                {check.detail}
                                            </p>
                                        </div>

                                        {/* Toggle */}
                                        <button
                                            type="button"
                                            aria-label={`Toggle ${check.label}`}
                                            aria-pressed={enabled}
                                            onClick={() => dispatch(toggleCheck(check.key))}
                                            className={[
                                                "relative h-6 w-10 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors",
                                                enabled ? "bg-[#5b4fcf]" : "bg-[#dfe3e8]",
                                            ].join(" ")}
                                        >
                                            <span
                                                className={[
                                                    "block h-5 w-5 rounded-full bg-white shadow-sm transition-transform",
                                                    enabled
                                                        ? "translate-x-4"
                                                        : "translate-x-0",
                                                ].join(" ")}
                                            />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>
            ) : (
                <section
                    className="mt-4 flex max-w-[640px] flex-col gap-4 rounded-[12px] border border-[#e5e8ee] bg-white p-5"
                    style={{
                        boxShadow: "0 4px 12px rgba(19, 26, 38, 0.024)",
                    }}
                >
                    {/* Header */}
                    <span className="flex flex-col gap-1">
                        <span className="text-[14px] font-semibold leading-[18px] text-[#172033]">
                            Platform controls
                        </span>

                        <span className="text-[12px] font-normal leading-[17px] text-[#7b8494]">
                            Applies across every employer, candidate and institution account.
                        </span>
                    </span>

                    {/* Controls */}
                    <div className="flex flex-col">
                        {/* Credit price */}
                        <div className="flex items-center gap-3 border-t border-[#eef0f3] py-3">
                            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                                <span className="text-[13px] font-semibold leading-[17px] text-[#172033]">
                                    Credit price per unlock
                                </span>

                                <span className="text-[11px] font-normal leading-[14px] text-[#7b8494]">
                                    Applies to every employer account
                                </span>
                            </span>

                            <span className="shrink-0 whitespace-nowrap rounded-full bg-[#f0f2f5] px-2.5 py-1 text-[11px] font-semibold leading-[14px] text-[#172033]">
                                1 credit
                            </span>
                        </div>

                        {/* Candidate masking */}
                        <div className="flex items-center gap-3 border-t border-[#eef0f3] py-3">
                            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                                <span className="text-[13px] font-semibold leading-[17px] text-[#172033]">
                                    Candidate masking
                                </span>

                                <span className="text-[11px] font-normal leading-[14px] text-[#7b8494]">
                                    Identity hidden until an unlock is recorded
                                </span>
                            </span>

                            <span className="shrink-0 whitespace-nowrap rounded-full bg-[#f0f2f5] px-2.5 py-1 text-[11px] font-semibold leading-[14px] text-[#172033]">
                                Enforced
                            </span>
                        </div>

                        {/* Audit retention */}
                        <div className="flex items-center gap-3 border-t border-[#eef0f3] py-3">
                            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                                <span className="text-[13px] font-semibold leading-[17px] text-[#172033]">
                                    Audit retention
                                </span>

                                <span className="text-[11px] font-normal leading-[14px] text-[#7b8494]">
                                    Immutable operator action log
                                </span>
                            </span>

                            <span className="shrink-0 whitespace-nowrap rounded-full bg-[#f0f2f5] px-2.5 py-1 text-[11px] font-semibold leading-[14px] text-[#172033]">
                                7 years
                            </span>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export const SettingsPage = AdminSettingsPage;