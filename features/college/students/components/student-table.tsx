"use client";

import React, { useState } from "react";
import { Send, X } from "lucide-react";

import { TableContainer, TablePagination } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { LinkStateBadge } from "@/components/ui/link-state-badge";
import { ScoreBandBadge } from "@/components/ui/score-band-badge";
import { CollegeStudent } from "../types";

export interface StudentTableProps {
  students: CollegeStudent[];
  totalCount?: number;
  pageSize?: number;
  onResend?: (student: CollegeStudent) => void;
  onRemove?: (student: CollegeStudent) => void;
}

/*
 * Matches the standalone HTML:
 *
 * grid-template-columns:
 *   minmax(180px, 2fr)
 *   132px
 *   minmax(140px, 1.2fr)
 *   104px
 *   80px
 *   72px;
 *
 * gap: 12px;
 * padding: 12px 20px;
 * min-height: 56px;
 * min-width: 882px;
 */
const GRID_COLUMNS =
  "minmax(180px, 2fr) 165px minmax(140px, 1.2fr) 104px 80px 72px";

export function StudentTable({
  students,
  totalCount,
  pageSize = 5,
  onResend,
  onRemove,
}: StudentTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const total = totalCount ?? students.length;

  const startIndex = (currentPage - 1) * pageSize;

  const currentSlice = students.slice(
    startIndex,
    startIndex + pageSize,
  );

  return (
    <TableContainer>
      {/* =====================================================
          TABLE SCROLL AREA
      ===================================================== */}
      <div className="overflow-x-auto bp-scrollbar">
        <div
          className="min-w-[882px]"
          style={{
            fontFamily: "'General Sans', sans-serif",
          }}
        >
          {/* =================================================
              HEADER
          ================================================= */}
          <div
            className="
              grid
              items-center
              border-b
              border-[#e7e9ee]
              bg-[#fafbfc]
            "
            style={{
              gridTemplateColumns: GRID_COLUMNS,
              gap: "12px",
              padding: "12px 20px",
              minHeight: "48px",
            }}
          >
            <div
              className="
                whitespace-nowrap
                text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#6c7482]
              "
            >
              Student
            </div>

            <div
              className="
                whitespace-nowrap
                text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#6c7482]
              "
            >
              Link State
            </div>

            <div
              className="
                whitespace-nowrap
                text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#6c7482]
              "
            >
              Course
            </div>

            <div
              className="
                whitespace-nowrap
                text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#6c7482]
              "
            >
              Score Band
            </div>

            <div
              className="
                whitespace-nowrap
                text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#6c7482]
              "
            >
              Active
            </div>

            <div
              className="
                whitespace-nowrap
                text-right
                text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#6c7482]
              "
            >
              Actions
            </div>
          </div>

          {/* =================================================
              BODY
          ================================================= */}
          <div>
            {currentSlice.length > 0 ? (
              currentSlice.map((student) => (
                <div
                  key={student.id}
                  className="
                    grid
                    items-center
                    border-b
                    border-[#f0f2f5]
                    transition-colors
                    last:border-b-0
                    hover:bg-[#fafbfc]/70
                  "
                  style={{
                    gridTemplateColumns: GRID_COLUMNS,
                    gap: "12px",
                    padding: "12px 20px",
                    minHeight: "56px",
                  }}
                >
                  {/* =========================================
                      STUDENT
                  ========================================= */}
                  <div className="flex min-w-0 items-center gap-[10px]">
                    {/* Avatar:
                        28x28
                        radius 8px
                    */}
                    <Avatar
                      name={student.name}
                      size="sm"
                    />

                    <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
                      {/* Name */}
                      <div
                        className="
                          min-w-0
                          truncate
                          whitespace-nowrap
                          text-[13px]
                          font-semibold
                          leading-[17px]
                          text-[#151b2b]
                        "
                      >
                        {student.name}
                      </div>

                      {/* Email */}
                      <div
                        className="
                          min-w-0
                          truncate
                          whitespace-nowrap
                          text-[11px]
                          font-normal
                          leading-[14px]
                          text-[#777f90]
                        "
                      >
                        {student.email}
                      </div>
                    </div>
                  </div>

                  {/* =========================================
                      LINK STATE
                  ========================================= */}
                  <div className="flex min-w-0 items-center">
                    <LinkStateBadge state={student.status} />
                  </div>

                  {/* =========================================
                      COURSE
                  ========================================= */}
                  <div className="flex min-w-0 flex-col justify-center gap-[2px]">
                    {/* Course */}
                    <div
                      className="
                        min-w-0
                        truncate
                        whitespace-nowrap
                        text-[13px]
                        font-medium
                        leading-[17px]
                        text-[#151b2b]
                      "
                    >
                      {student.course}
                    </div>

                    {/* Year */}
                    <div
                      className="
                        min-w-0
                        truncate
                        whitespace-nowrap
                        text-[11px]
                        font-normal
                        leading-[14px]
                        text-[#777f90]
                      "
                    >
                      {student.year}
                    </div>
                  </div>

                  {/* =========================================
                      SCORE BAND
                  ========================================= */}
                  <div className="flex items-center">
                    <ScoreBandBadge band={student.scoreBand} />
                  </div>

                  {/* =========================================
                      ACTIVE
                  ========================================= */}
                  <div
                    className="
                      flex
                      items-center
                      whitespace-nowrap
                      text-[12px]
                      font-normal
                      leading-[17px]
                      text-[#777f90]
                    "
                  >
                    {student.lastActive ?? "—"}
                  </div>

                  {/* =========================================
                      ACTIONS
                  ========================================= */}
                  <div className="flex items-center justify-end gap-[6px]">
                    {/* Resend */}
                    <button
                      type="button"
                      aria-label={`Resend invite to ${student.name}`}
                      title="Resend invite"
                      onClick={() => onResend?.(student)}
                      className="
                        grid
                        h-8
                        w-8
                        shrink-0
                        place-items-center
                        rounded-[8px]
                        border
                        border-[#e7e9ee]
                        bg-white
                        text-[#777f90]
                        transition-colors
                        hover:bg-[#f8f9fb]
                        hover:text-[#3566b8]
                      "
                    >
                      <Send
                        size={14}
                        strokeWidth={2}
                      />
                    </button>

                    {/* Remove */}
                    <button
                      type="button"
                      aria-label={`Remove ${student.name}`}
                      title="Remove student"
                      onClick={() => onRemove?.(student)}
                      className="
                        grid
                        h-8
                        w-8
                        shrink-0
                        place-items-center
                        rounded-[8px]
                        border
                        border-[#e7e9ee]
                        bg-white
                        text-[#777f90]
                        transition-colors
                        hover:bg-[#f8f9fb]
                        hover:text-[#e02424]
                      "
                    >
                      <X
                        size={14}
                        strokeWidth={2}
                      />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              /* =============================================
                 EMPTY STATE
              ============================================= */
              <div
                className="
                  flex
                  min-h-[220px]
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                <p className="text-[14px] font-semibold text-[#303747]">
                  No students match your filter
                </p>

                <p className="mt-1 text-[12px] text-[#777f90]">
                  Try adjusting your search query or selecting
                  "All link states"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          PAGINATION
      ===================================================== */}
      <TablePagination
        currentPage={currentPage}
        totalCount={total}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        itemLabel="students"
      />
    </TableContainer>
  );
}