export interface AnalyticsMetrics {
  students: number;
  averageScore: number;
  medianScore: number;
  hired: number;
}

export interface CourseScore {
  label: string;
  score: number;
  percentage: number;
}

export interface SkillGap {
  label: string;
  percentageBelowMedian: number;
}

export interface Outcome {
  id: string;
  role: string;
  employer: string;
  applied: string;
  stage:
    | "Applied"
    | "Shortlisted"
    | "Interview"
    | "Hired";
  students: number;
}

export interface CollegeAnalytics {
  metrics: AnalyticsMetrics;
  courseScores: CourseScore[];
  skillGaps: SkillGap[];
  outcomes: Outcome[];
}