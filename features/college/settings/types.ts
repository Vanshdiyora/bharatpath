export interface CollegeProfile {
  id: string;
  legalName: string;
  displayName: string;
  aicteCode?: string;
  city?: string;
  state?: string;
  contactEmail: string;
  phone?: string;
}

export interface CollegeUser {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Placement lead" | "Viewer";
  status: "active" | "invited";
}

export interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: "paid" | "pending";
}

export interface BillingData {
  seatsUsed: number;
  seatsTotal: number;
  plan: "block150" | "block300" | "custom";
  paymentStatus: "active" | "pending" | "full";
  invoices: Invoice[];
}

export interface CollegeSettings {
  profile: CollegeProfile;
  users: CollegeUser[];
  billing: BillingData;
}