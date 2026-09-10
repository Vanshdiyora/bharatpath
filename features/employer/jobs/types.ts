export type JobStatus = "live" | "draft" | "closed";

export interface EmployerJob {
  id: string;
  title: string;
  status: JobStatus;
  location: string;
  salaryMin: number;
  salaryMax: number;
  minScore: number;
  applicantsCount: number;
  viewedCount: number;
  shortlistedCount: number;
  interviewCount: number;
  hiredCount: number;
  rejectedCount: number;
  skills: string[];
}