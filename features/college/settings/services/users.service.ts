import { CollegeUser } from "../types";

/*
 * Temporary static data.
 *
 * The backend API is not available yet, so the
 * user list is served from this mock until it is.
 */
const MOCK_USERS: CollegeUser[] = [
  {
    id: "user-1",
    name: "Priya Nair",
    email: "priya.nair@dit.example.edu",
    role: "Owner",
    status: "active",
  },
  {
    id: "user-2",
    name: "Rohan Verma",
    email: "rohan.verma@dit.example.edu",
    role: "Placement lead",
    status: "active",
  },
  {
    id: "user-3",
    name: "Meera Iyer",
    email: "meera.iyer@dit.example.edu",
    role: "Viewer",
    status: "invited",
  },
];

export const usersService = {
  async getUsers(): Promise<CollegeUser[]> {
    return MOCK_USERS;
  },

  async inviteUser(
    email: string,
    role: CollegeUser["role"],
  ) {
    return {
      success: true,
      email,
      role,
    };
  },

  async removeUser(id: string) {
    return {
      success: true,
      id,
    };
  },
};
