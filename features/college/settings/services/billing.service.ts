import { BillingData } from "../types";

/*
 * Temporary static data.
 *
 * The backend API is not available yet, so billing
 * is served from this mock until it is.
 */
const MOCK_BILLING: BillingData = {
  seatsUsed: 300,
  seatsTotal: 450,
  plan: "block300",
  paymentStatus: "active",
  invoices: [
    {
      id: "INV-0231",
      date: "2026-08-01",
      amount: 45000,
      status: "paid",
    },
    {
      id: "INV-0198",
      date: "2026-07-01",
      amount: 45000,
      status: "paid",
    },
    {
      id: "INV-0165",
      date: "2026-06-01",
      amount: 30000,
      status: "paid",
    },
  ],
};

export const billingService = {
  async getBilling(): Promise<BillingData> {
    return MOCK_BILLING;
  },

  async createPayment(
    plan: BillingData["plan"],
  ) {
    return {
      success: true,
      plan,
    };
  },

  async getInvoices() {
    return MOCK_BILLING.invoices;
  },
};
