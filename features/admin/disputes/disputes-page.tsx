"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
    closeDispute,
    openDispute,
    selectAdminDisputes,
    setDisputeTab,
} from "@/store/admin";
import {
    CheckCircle2,
    FileText,
    Gavel,
    ToggleLeft,
    TriangleAlert,
} from "lucide-react";
import { usePageHeader } from "@/components/layout/header-context";
import {
    DataTable,
    type ColumnDef,
} from "@/components/ui/table";

import { disputes } from "../shared/data";
import { Drawer } from "../shared/admin-shell";
import { StateBadge } from "../shared/status-badge";

type DisputeRow = (typeof disputes)[number];

export function AdminDisputesPage() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(selectAdminDisputes);

    usePageHeader(
        "Disputes & Audit",
        "Investigate disputes and trace every operator action",
    );

    const openDisputes = disputes.filter(
        (item) => !["Resolved", "Rejected"].includes(item.status),
    );

    const resolvedDisputes = disputes.filter((item) =>
        ["Resolved", "Rejected"].includes(item.status),
    );

    const rows =
        state.tab === "open" ? openDisputes : resolvedDisputes;

    const selectedDispute = disputes.find(
        (item) => item.id === state.openId,
    );

    const openCount = openDisputes.length;
    const resolvedCount = resolvedDisputes.length;

    const columns: ColumnDef<DisputeRow>[] = [
        {
            id: "dispute",
            header: "Dispute",
            headerClassName: "min-w-[350px]",
            cellClassName: "min-w-[350px]",
            cell: (item) => (
                <button
                    type="button"
                    onClick={() => dispatch(openDispute(item.id))}
                    className="flex min-w-0 w-full cursor-pointer flex-col text-left"
                >
                    <p className="truncate text-[13px] font-semibold text-[#172033]">
                        {item.title}
                    </p>

                    <p className="mt-1 truncate text-[11px] text-[#7b8494]">
                        {item.parties}
                    </p>
                </button>
            ),
        },

        {
            id: "status",
            header: "Status",
            headerClassName: "min-w-[145px]",
            cellClassName: "min-w-[145px]",
            cell: (item) => <StateBadge state={item.status} />,
        },

        {
            id: "raised",
            header: "Raised",
            headerClassName: "min-w-[110px]",
            cellClassName:
                "min-w-[110px] whitespace-nowrap text-[12px] text-[#687182]",
            cell: (item) => item.raised,
        },

        {
            id: "age",
            header: "Age",
            headerClassName: "min-w-[85px]",
            cellClassName:
                "min-w-[85px] whitespace-nowrap text-[13px] font-semibold text-[#172033]",
            cell: (item) => item.age,
        },
    ];

    const auditItems = [
        [
            "Approved KYB for Nashik Pharma Works",
            "P. Menon",
            "Today 11:04",
        ],
        [
            "Requested additional address proof from Vidarbha Retail LLP",
            "P. Menon",
            "Today 09:47",
        ],
        [
            "Escalated integrity flag on Candidate · C218",
            "A. Rao",
            "Yesterday 18:22",
        ],
        [
            "Switched KYB approval mode to Manual",
            "S. Iyer",
            "03 Sep 15:10",
        ],
        [
            "Resolved dispute · duplicate account merged",
            "P. Menon",
            "30 Aug 12:35",
        ],
    ] as const;

    return (
        <>
            <div className="min-w-0 space-y-0">
                {/* =================================================
            DISPUTE TABS
            ================================================= */}
                <div className="border-b border-[#e7e9ee]">
                    <div className="flex items-center gap-1">
                        {(
                            [
                                ["open", `Open · ${openCount}`],
                                ["resolved", `Resolved · ${resolvedCount}`],
                            ] as const
                        ).map(([tab, label]) => {
                            const active = state.tab === tab;

                            return (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => dispatch(setDisputeTab(tab))}
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
            MAIN CONTENT
            ================================================= */}
                <div className="grid min-w-0 grid-cols-1 gap-4 pt-4 md:grid-cols-[minmax(0,1fr)_305px]">
                    {/* =================================================
              DISPUTES TABLE
              ================================================= */}
                    <div className="min-w-0">
                        <DataTable<DisputeRow>
                            columns={columns}
                            data={rows}
                            keyExtractor={(item) => item.id}
                            pageSize={5}
                            totalCount={rows.length}
                            itemLabel=""
                            emptyTitle={
                                state.tab === "open"
                                    ? "No open disputes"
                                    : "No resolved disputes"
                            }
                            emptySubtitle=""
                        />
                    </div>

                    {/* =================================================
    AUDIT TRAIL
    ================================================= */}
                    <section
                        className="flex h-fit flex-col gap-4 rounded-[12px] border border-[#e5e8ee] bg-white p-5"
                        style={{
                            boxShadow: "0 4px 12px rgba(19, 26, 38, 0.024)",
                        }}
                    >
                        {/* Header */}
                        <div className="flex items-baseline justify-between gap-3">
                            <span className="text-[14px] font-semibold leading-[18px] text-[#172033]">
                                Audit trail
                            </span>

                            <button
                                type="button"
                                className="cursor-pointer text-[12px] font-semibold leading-4 text-[#385da8]"
                            >
                                Export
                            </button>
                        </div>

                        {/* Timeline */}
                        <div className="relative pb-3">
                            {/* Vertical timeline line */}
                            <span className="absolute bottom-0 left-[13px] top-7 w-[2px] bg-[#eef0f3]" />

                            <div className="flex flex-col">
                                {/* Audit Item 1 */}
                                <div className="flex gap-3 pt-3.5">
                                    <span className="relative z-[1] grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-[#eef0f3] bg-white">
                                        <CheckCircle2
                                            className="h-[14px] w-[14px] text-[#385da8]"
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                                        <span className="text-[13px] font-normal leading-[18px] text-[#687182] [text-wrap:pretty]">
                                            Approved KYB for Nashik Pharma Works
                                        </span>

                                        <span className="flex flex-wrap items-center gap-2">
                                            <span className="whitespace-nowrap rounded-full bg-[#f0f2f5] px-2.5 py-1 text-[11px] font-semibold leading-[14px] text-[#172033]">
                                                P. Menon
                                            </span>

                                            <span className="text-[11px] font-medium leading-[14px] text-[#7b8494]">
                                                Today 11:04
                                            </span>
                                        </span>
                                    </span>
                                </div>

                                {/* Audit Item 2 */}
                                <div className="flex gap-3 pt-3.5">
                                    <span className="relative z-[1] grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-[#eef0f3] bg-white">
                                        <FileText
                                            className="h-[14px] w-[14px] text-[#385da8]"
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                                        <span className="text-[13px] font-normal leading-[18px] text-[#687182] [text-wrap:pretty]">
                                            Requested additional address proof from Vidarbha Retail LLP
                                        </span>

                                        <span className="flex flex-wrap items-center gap-2">
                                            <span className="whitespace-nowrap rounded-full bg-[#f0f2f5] px-2.5 py-1 text-[11px] font-semibold leading-[14px] text-[#172033]">
                                                P. Menon
                                            </span>

                                            <span className="text-[11px] font-medium leading-[14px] text-[#7b8494]">
                                                Today 09:47
                                            </span>
                                        </span>
                                    </span>
                                </div>

                                {/* Audit Item 3 */}
                                <div className="flex gap-3 pt-3.5">
                                    <span className="relative z-[1] grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-[#eef0f3] bg-white">
                                        <TriangleAlert
                                            className="h-[14px] w-[14px] text-[#385da8]"
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                                        <span className="text-[13px] font-normal leading-[18px] text-[#687182] [text-wrap:pretty]">
                                            Escalated integrity flag on Candidate · C218
                                        </span>

                                        <span className="flex flex-wrap items-center gap-2">
                                            <span className="whitespace-nowrap rounded-full bg-[#f0f2f5] px-2.5 py-1 text-[11px] font-semibold leading-[14px] text-[#172033]">
                                                A. Rao
                                            </span>

                                            <span className="text-[11px] font-medium leading-[14px] text-[#7b8494]">
                                                Yesterday 18:22
                                            </span>
                                        </span>
                                    </span>
                                </div>

                                {/* Audit Item 4 */}
                                <div className="flex gap-3 pt-3.5">
                                    <span className="relative z-[1] grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-[#eef0f3] bg-white">
                                        <ToggleLeft
                                            className="h-[14px] w-[14px] text-[#385da8]"
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                                        <span className="text-[13px] font-normal leading-[18px] text-[#687182] [text-wrap:pretty]">
                                            Switched KYB approval mode to Manual
                                        </span>

                                        <span className="flex flex-wrap items-center gap-2">
                                            <span className="whitespace-nowrap rounded-full bg-[#f0f2f5] px-2.5 py-1 text-[11px] font-semibold leading-[14px] text-[#172033]">
                                                S. Iyer
                                            </span>

                                            <span className="text-[11px] font-medium leading-[14px] text-[#7b8494]">
                                                03 Sep 15:10
                                            </span>
                                        </span>
                                    </span>
                                </div>

                                {/* Audit Item 5 */}
                                <div className="flex gap-3 pt-3.5">
                                    <span className="relative z-[1] grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-[#eef0f3] bg-white">
                                        <Gavel
                                            className="h-[14px] w-[14px] text-[#385da8]"
                                            strokeWidth={2}
                                        />
                                    </span>

                                    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                                        <span className="text-[13px] font-normal leading-[18px] text-[#687182] [text-wrap:pretty]">
                                            Resolved dispute · duplicate account merged
                                        </span>

                                        <span className="flex flex-wrap items-center gap-2">
                                            <span className="whitespace-nowrap rounded-full bg-[#f0f2f5] px-2.5 py-1 text-[11px] font-semibold leading-[14px] text-[#172033]">
                                                P. Menon
                                            </span>

                                            <span className="text-[11px] font-medium leading-[14px] text-[#7b8494]">
                                                30 Aug 12:35
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <span className="border-t border-[#eef0f3] pt-3 text-[12px] font-normal leading-[17px] text-[#7b8494]">
                            Audit records are immutable and retained for 7 years.
                        </span>
                    </section>
                </div>
            </div>

            {/* =================================================
          DISPUTE REVIEW DRAWER
          ================================================= */}
            <Drawer
                open={!!selectedDispute}
                title="Dispute review"
                onClose={() => dispatch(closeDispute())}
            >
                {selectedDispute && (
                    <div className="space-y-5">
                        {/* Header */}
                        <div>
                            <StateBadge state={selectedDispute.status} />

                            <h3 className="mt-3 text-base font-bold text-[#172033]">
                                {selectedDispute.title}
                            </h3>

                            <p className="mt-1 text-xs text-[#7b8494]">
                                {selectedDispute.parties} · raised{" "}
                                {selectedDispute.raised}
                            </p>
                        </div>

                        {/* Claim */}
                        <div>
                            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#7b8494]">
                                Claim
                            </p>

                            <p className="rounded-xl bg-[#f7f8fa] p-4 text-xs leading-5 text-[#3e4757]">
                                {selectedDispute.claim}
                            </p>
                        </div>

                        {/* Evidence */}
                        <div>
                            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#7b8494]">
                                Evidence on file
                            </p>

                            <div className="space-y-2">
                                {selectedDispute.evidence.map((evidence) => (
                                    <div
                                        key={evidence.label}
                                        className="rounded-lg border border-[#e5e8ee] p-3"
                                    >
                                        <p className="text-xs font-semibold text-[#172033]">
                                            {evidence.label}
                                        </p>

                                        <p className="mt-1 text-[10px] text-[#7b8494]">
                                            {evidence.meta}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 border-t border-[#e5e8ee] pt-4">
                            <button
                                type="button"
                                onClick={() => dispatch(closeDispute())}
                                className="flex-1 cursor-pointer rounded-lg border border-[#e5e8ee] px-4 py-2.5 text-xs font-semibold text-[#172033] transition-colors hover:bg-[#f8f9fb]"
                            >
                                Request evidence
                            </button>

                            <button
                                type="button"
                                onClick={() => dispatch(closeDispute())}
                                className="flex-1 cursor-pointer rounded-lg bg-[#5b4fcf] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#4f44bc]"
                            >
                                Record resolution
                            </button>
                        </div>
                    </div>
                )}
            </Drawer>
        </>
    );
}

export const DisputesPage = AdminDisputesPage;