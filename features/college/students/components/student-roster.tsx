"use client";

import { useMemo, useState } from "react";
import {
  Mail,
  Search,
  Upload,
  UserPlus,
} from "lucide-react";

import { usePageHeader } from "@/components/layout/header-context";
import {
  CollegeStudent,
  StudentStatus,
} from "../types";
import { StudentStatusBadge } from "./student-status-badge";

interface StudentRosterProps {
  students?: CollegeStudent[];
  total?: number;
}

export function StudentRoster({
  students = [],
  total = students.length,
}: StudentRosterProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] =
    useState<StudentStatus | "all">("all");

  const linkedCount = students.filter(
    (student) => student.status === "linked",
  ).length;

  usePageHeader(
    "Students",
    "Roster, invites, bulk upload and consent states",
    {
      stat: {
        icon: UserPlus,
        label: `${total} students`,
        sublabel: `${linkedCount} linked`,
      },
    },
  );

  const filteredStudents = useMemo(() => {
    const normalized =
      search.toLowerCase().trim();

    return students.filter((student) => {
      const matchesSearch =
        !normalized ||
        student.name
          .toLowerCase()
          .includes(normalized) ||
        student.email
          .toLowerCase()
          .includes(normalized) ||
        student.course
          .toLowerCase()
          .includes(normalized);

      const matchesStatus =
        status === "all" ||
        student.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [students, search, status]);

  return (
    <div className="mx-auto max-w-[1280px] space-y-6">
      <div className="flex justify-end">
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg bg-[#151b2b] px-4 py-2.5 text-xs font-semibold text-white">
            <UserPlus size={15} />
            Invite students
          </button>

          <button className="inline-flex items-center gap-2 rounded-lg border border-[#dfe2e8] bg-white px-4 py-2.5 text-xs font-semibold text-[#303747]">
            <Upload size={15} />
            Bulk upload
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-[#e5e7ec] bg-white">
        <div className="flex flex-col gap-3 border-b border-[#e7e9ee] p-4 md:flex-row">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969dab]"
            />

            <input
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search students..."
              className="h-10 w-full rounded-lg border border-[#dfe2e8] pl-9 pr-3 text-sm outline-none focus:border-[#5b4fcf]"
            />
          </div>

          <select
            value={status}
            onChange={(event) =>
              setStatus(
                event.target.value as
                  | StudentStatus
                  | "all",
              )
            }
            className="h-10 rounded-lg border border-[#dfe2e8] bg-white px-3 text-sm text-[#303747] outline-none"
          >
            <option value="all">All states</option>
            <option value="linked">Linked</option>
            <option value="invited">Invited</option>
            <option value="consent_pending">
              Consent pending
            </option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left">
            <thead>
              <tr className="border-b border-[#e7e9ee] bg-[#fafbfc]">
                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#8a91a0]">
                  Student
                </th>

                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#8a91a0]">
                  Course
                </th>

                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#8a91a0]">
                  Year
                </th>

                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#8a91a0]">
                  Consent
                </th>

                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#8a91a0]">
                  Score
                </th>

                <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#8a91a0]">
                  Last active
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-[#f0f1f4] last:border-0"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef0ff] text-xs font-semibold text-[#5b4fcf]">
                        {student.name
                          .split(" ")
                          .map(
                            (part) => part[0],
                          )
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#252b3b]">
                          {student.name}
                        </p>

                        <p className="mt-0.5 flex items-center gap-1 text-xs text-[#8a91a0]">
                          <Mail size={11} />
                          {student.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-[#4f5666]">
                    {student.course}
                  </td>

                  <td className="px-5 py-4 text-sm text-[#4f5666]">
                    {student.year}
                  </td>

                  <td className="px-5 py-4">
                    <StudentStatusBadge
                      status={student.status}
                    />
                  </td>

                  <td className="px-5 py-4">
                    {student.score ? (
                      <span className="text-sm font-semibold text-[#252b3b]">
                        {student.score}
                      </span>
                    ) : (
                      <span className="text-sm text-[#a0a6b1]">
                        —
                      </span>
                    )}
                  </td>

                  <td className="px-5 py-4 text-xs text-[#8a91a0]">
                    {student.lastActive ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredStudents.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-sm font-medium text-[#4f5666]">
                No students found
              </p>

              <p className="mt-1 text-xs text-[#969dab]">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-[#e7e9ee] px-5 py-3 text-xs text-[#8a91a0]">
          Showing {filteredStudents.length} of{" "}
          {total} students
        </div>
      </div>
    </div>
  );
}