import { CollegeAnalytics } from "../types";

/*
 * Temporary static data.
 *
 * The backend API is not available yet, so analytics
 * are served from this mock until it is.
 */
const MOCK_ANALYTICS: CollegeAnalytics = {
  metrics: {
    students: 482,
    averageScore: 71,
    medianScore: 68,
    hired: 38,
  },

  courseScores: [
    { label: "Computer Science", score: 78, percentage: 78 },
    { label: "Information Technology", score: 69, percentage: 69 },
    { label: "Electronics", score: 65, percentage: 65 },
    { label: "Mechanical Engineering", score: 58, percentage: 58 },
    { label: "Civil Engineering", score: 54, percentage: 54 },
  ],

  skillGaps: [
    { label: "System Design", percentageBelowMedian: 62 },
    { label: "Data Structures", percentageBelowMedian: 48 },
    { label: "Communication", percentageBelowMedian: 41 },
    { label: "SQL", percentageBelowMedian: 35 },
  ],

  outcomes: [
    {
      id: "out-1",
      role: "Software Engineer Intern",
      employer: "Northwind Tech",
      applied: "2026-07-12",
      stage: "Hired",
      students: 6,
    },
    {
      id: "out-2",
      role: "Data Analyst",
      employer: "Contoso Analytics",
      applied: "2026-07-18",
      stage: "Interview",
      students: 9,
    },
    {
      id: "out-3",
      role: "Frontend Developer",
      employer: "Fabrikam Labs",
      applied: "2026-08-02",
      stage: "Shortlisted",
      students: 14,
    },
    {
      id: "out-4",
      role: "QA Engineer",
      employer: "Adatum Systems",
      applied: "2026-08-10",
      stage: "Applied",
      students: 21,
    },
  ],
};

export const analyticsService = {
  async getAnalytics(
    cohort = "2025-26",
  ): Promise<CollegeAnalytics> {
    void cohort;

    return MOCK_ANALYTICS;
  },
};
