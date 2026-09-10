"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dropdown } from "@/components/ui/dropdown";
import { usePageHeader } from "@/components/layout/header-context";

import { JobsTable } from "./jobs-table";
import { employerJobs } from "../data/jobs.data";
import type { EmployerJob, JobStatus } from "../types";

const PAGE_SIZE = 10;

type StatusFilter = "all" | JobStatus;

export function JobsPage() {
    const router = useRouter();

    /*
     * IMPORTANT:
     * The global PortalHeader is responsible for rendering:
     *
     * Jobs
     * Manage job postings and track how each one is performing
     *
     * Therefore there must NOT be another Jobs header inside this page.
     */
    usePageHeader(
        "Jobs",
        "Manage job postings and track how each one is performing"
    );

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] =
        useState<StatusFilter>("all");
    const statusOptions = [
        {
            value: "all",
            label: "All statuses",
        },
        {
            value: "live",
            label: "Live",
        },
        {
            value: "draft",
            label: "Draft",
        },
        {
            value: "closed",
            label: "Closed",
        },
    ] satisfies {
        value: StatusFilter;
        label: string;
    }[];

    const [currentPage, setCurrentPage] = useState(1);

    const liveJobsCount = useMemo(() => {
        return employerJobs.filter(
            (job) => job.status === "live"
        ).length;
    }, []);

    const filteredJobs = useMemo(() => {
        const query = search.trim().toLowerCase();

        return employerJobs.filter((job) => {
            const matchesSearch =
                query.length === 0 ||
                job.title.toLowerCase().includes(query) ||
                job.location.toLowerCase().includes(query);

            const matchesStatus =
                statusFilter === "all" ||
                job.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [search, statusFilter]);

    const totalPages = Math.max(
        1,
        Math.ceil(filteredJobs.length / PAGE_SIZE)
    );

    const paginatedJobs = useMemo(() => {
        const start =
            (currentPage - 1) * PAGE_SIZE;

        return filteredJobs.slice(
            start,
            start + PAGE_SIZE
        );
    }, [filteredJobs, currentPage]);

    function handleSearch(value: string) {
        setSearch(value);
        setCurrentPage(1);
    }

    function handleStatusChange(
        value: StatusFilter
    ) {
        setStatusFilter(value);
        setCurrentPage(1);
    }

    function handlePageChange(page: number) {
        setCurrentPage(
            Math.min(
                Math.max(page, 1),
                totalPages
            )
        );
    }

    function handleViewApplicants(job: EmployerJob) {
        router.push(
            `/employer/applications?jobId=${job.id}`
        );
    }

    function handleEditJob(job: EmployerJob) {
        router.push(
            `/employer/jobs/${job.id}/edit`
        );
    }

    return (
        <main className="min-h-full bg-[#f7f8fa]">
            <section
                className="
          overflow-hidden
          rounded-[12px]
          border
          border-[#e5e8ed]
          bg-white
          shadow-[0_2px_8px_rgba(19,26,38,0.02)]
        "
            >
                {/* Jobs toolbar */}
                <div
                    className="
            flex
            items-center
            justify-between
            gap-4
            border-b
            border-[#edf0f3]
            px-5
            py-3
          "
                >
                    {/* Summary */}
                    <div className="flex items-center gap-2 text-[12px]">
                        <span className="font-medium text-[#3566b8]">
                            {filteredJobs.length} jobs
                        </span>

                        <span className="text-[#b0b5bd]">
                            |
                        </span>

                        <span className="font-medium text-[#1f7a4d]">
                            {liveJobsCount} live
                        </span>
                    </div>

                    {/* Filters */}
                    <div className="flex items-center gap-2">
                        {/* Search */}
                        <div className="relative">
                            <Search
                                size={15}
                                strokeWidth={1.8}
                                className="
                  pointer-events-none
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-[#777f90]
                "
                            />

                            <input
                                value={search}
                                onChange={(event) =>
                                    handleSearch(event.target.value)
                                }
                                placeholder="Search jobs"
                                className="
                  h-9
                  w-[207px]
                  rounded-[9px]
                  border
                  border-[#e3e6eb]
                  bg-white
                  pl-9
                  pr-3
                  text-[12px]
                  text-[#151b2b]
                  outline-none
                  placeholder:text-[#8a919d]
                  focus:border-[#b7b1ee]
                  focus:ring-2
                  focus:ring-[#5b4fcf]/10
                "
                            />
                        </div>

                        {/* Status */}
                        <Dropdown
                            value={statusFilter}
                            options={statusOptions}
                            onChange={handleStatusChange}
                            width="w-[130px]"
                        />
                    </div>
                </div>

                {/* Existing shared DataTable */}
                <JobsTable
                    jobs={paginatedJobs}
                    currentPage={currentPage}
                    pageSize={PAGE_SIZE}
                    totalCount={filteredJobs.length}
                    onPageChange={handlePageChange}
                    onViewApplicants={handleViewApplicants}
                    onEditJob={handleEditJob}
                />
            </section>
        </main>
    );
}