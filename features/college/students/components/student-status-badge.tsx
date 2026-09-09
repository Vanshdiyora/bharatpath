import { StudentStatus } from "../types";

const STATUS_CONFIG: Record<
  StudentStatus,
  {
    label: string;
    className: string;
  }
> = {
  linked: {
    label: "Linked",
    className:
      "bg-[#eaf7ef] text-[#287a4d]",
  },
  invited: {
    label: "Invited",
    className:
      "bg-[#f3f4f7] text-[#707787]",
  },
  consent_pending: {
    label: "Consent pending",
    className:
      "bg-[#fff5dc] text-[#986c08]",
  },
};

export function StudentStatusBadge({
  status,
}: {
  status: StudentStatus;
}) {
  const config = STATUS_CONFIG[status];

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${config.className}`}
    >
      {config.label}
    </span>
  );
}