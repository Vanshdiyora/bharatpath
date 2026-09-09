import {
  CollegeStudent,
  InviteStudentRequest,
  StudentFilters,
  StudentListResponse,
} from "../types";

/*
 * Temporary static data.
 *
 * The backend API is not available yet, so the
 * roster is served from this mock until it is.
 */
const MOCK_STUDENTS: CollegeStudent[] = [
  {
    id: "stu-1",
    name: "Aarav Sharma",
    email: "aarav.sharma@example.edu",
    course: "Computer Science",
    year: "2026",
    status: "linked",
    scoreBand: "exceptional",
    score: 92,
    lastActive: "2 hours ago",
  },
  {
    id: "stu-2",
    name: "Diya Patel",
    email: "diya.patel@example.edu",
    course: "Computer Science",
    year: "2026",
    status: "linked",
    scoreBand: "strong",
    score: 78,
    lastActive: "1 day ago",
  },
  {
    id: "stu-3",
    name: "Kabir Singh",
    email: "kabir.singh@example.edu",
    course: "Mechanical Engineering",
    year: "2025",
    status: "consent_pending",
    lastActive: "3 days ago",
  },
  {
    id: "stu-4",
    name: "Ishita Rao",
    email: "ishita.rao@example.edu",
    course: "Electronics",
    year: "2026",
    status: "linked",
    scoreBand: "strong",
    score: 74,
    lastActive: "5 hours ago",
  },
  {
    id: "stu-5",
    name: "Vivaan Mehta",
    email: "vivaan.mehta@example.edu",
    course: "Computer Science",
    year: "2027",
    status: "invited",
  },
  {
    id: "stu-6",
    name: "Ananya Gupta",
    email: "ananya.gupta@example.edu",
    course: "Information Technology",
    year: "2026",
    status: "linked",
    scoreBand: "building",
    score: 52,
    lastActive: "2 days ago",
  },
  {
    id: "stu-7",
    name: "Reyansh Kumar",
    email: "reyansh.kumar@example.edu",
    course: "Civil Engineering",
    year: "2025",
    status: "linked",
    scoreBand: "building",
    score: 47,
    lastActive: "1 week ago",
  },
  {
    id: "stu-8",
    name: "Saanvi Joshi",
    email: "saanvi.joshi@example.edu",
    course: "Computer Science",
    year: "2026",
    status: "invited",
  },
];

function applyFilters(
  students: CollegeStudent[],
  filters: StudentFilters,
): CollegeStudent[] {
  return students.filter((student) => {
    if (
      filters.search &&
      !student.name
        .toLowerCase()
        .includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.status &&
      filters.status !== "all" &&
      student.status !== filters.status
    ) {
      return false;
    }

    if (
      filters.course &&
      student.course !== filters.course
    ) {
      return false;
    }

    return true;
  });
}

export const studentsService = {
  async getStudents(
    filters: StudentFilters = {},
  ): Promise<StudentListResponse> {
    const filtered = applyFilters(
      MOCK_STUDENTS,
      filters,
    );

    const page = filters.page ?? 1;
    const pageSize = filters.pageSize ?? 50;
    const start = (page - 1) * pageSize;

    return {
      students: filtered.slice(
        start,
        start + pageSize,
      ),
      total: filtered.length,
      page,
      pageSize,
    };
  },

  async getStudent(
    id: string,
  ): Promise<CollegeStudent> {
    const student = MOCK_STUDENTS.find(
      (item) => item.id === id,
    );

    if (!student) {
      throw new Error("Student not found");
    }

    return student;
  },

  async inviteStudent(
    payload: InviteStudentRequest,
  ) {
    return {
      success: true,
      email: payload.email,
    };
  },

  async bulkUpload(
    file: File,
  ) {
    return {
      success: true,
      fileName: file.name,
    };
  },
};
