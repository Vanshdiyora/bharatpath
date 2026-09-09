import { BillingData } from "../types";

export function Billing({
  billing,
}: {
  billing: BillingData;
}) {
  const percentage =
    billing.seatsTotal > 0
      ? Math.min(
          100,
          Math.round(
            (billing.seatsUsed /
              billing.seatsTotal) *
              100,
          ),
        )
      : 0;

  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-[#e5e7ec] bg-white p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-sm font-semibold text-[#252b3b]">
              Seats & payment
            </h2>

            <p className="mt-1 text-xs text-[#8a91a0]">
              Manage your seat plan and payments.
            </p>
          </div>

          <span className="rounded-full bg-[#eaf7ef] px-2.5 py-1 text-[11px] font-semibold text-[#287a4d]">
            {billing.paymentStatus}
          </span>
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-xs">
            <span className="text-[#777f90]">
              Seats used
            </span>

            <span className="font-semibold text-[#252b3b]">
              {billing.seatsUsed} /{" "}
              {billing.seatsTotal}
            </span>
          </div>

          <div className="mt-2 h-2 rounded-full bg-[#f0f1f4]">
            <div
              className="h-full rounded-full bg-[#5b4fcf]"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-[#e5e7ec] bg-white">
        <div className="border-b border-[#e7e9ee] p-5">
          <h2 className="text-sm font-semibold text-[#252b3b]">
            Invoices
          </h2>
        </div>

        {billing.invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex items-center justify-between border-b border-[#f0f1f4] p-5 last:border-0"
          >
            <div>
              <p className="text-sm font-medium text-[#252b3b]">
                {invoice.id}
              </p>

              <p className="mt-1 text-xs text-[#8a91a0]">
                {invoice.date}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-[#252b3b]">
                ₹{invoice.amount.toLocaleString("en-IN")}
              </p>

              <p
                className={`mt-1 text-[11px] font-semibold ${
                  invoice.status === "paid"
                    ? "text-[#287a4d]"
                    : "text-[#986c08]"
                }`}
              >
                {invoice.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}