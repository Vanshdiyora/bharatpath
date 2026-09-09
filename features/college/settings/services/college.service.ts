import { CollegeProfile } from "../types";

/*
 * Temporary static data.
 *
 * The backend API is not available yet, so the
 * profile is served from this mock until it is.
 */
const MOCK_PROFILE: CollegeProfile = {
  id: "college-development",
  legalName: "Development Institute of Technology",
  displayName: "Development Institute of Technology",
  aicteCode: "AICTE-DEV-0001",
  city: "Bengaluru",
  state: "Karnataka",
  contactEmail: "placements@dit.example.edu",
  phone: "+91 98765 43210",
};

export const collegeService = {
  async getProfile(): Promise<CollegeProfile> {
    return MOCK_PROFILE;
  },

  async updateProfile(
    payload: Partial<CollegeProfile>,
  ) {
    return {
      ...MOCK_PROFILE,
      ...payload,
    };
  },
};
