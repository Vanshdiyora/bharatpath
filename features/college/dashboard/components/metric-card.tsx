import { LucideIcon } from "lucide-react";

export type MetricTone =
  | "purple"
  | "green"
  | "blue"
  | "orange";

const toneClasses: Record<MetricTone, string> = {
  purple: "bg-[#eef0ff] text-[#4e43b7]",
  green: "bg-[#e6f6ec] text-[#1f8a4c]",
  blue: "bg-[#e8f1fe] text-[#2563b0]",
  orange: "bg-[#fdf1e0] text-[#b5650b]",
};

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  tone: MetricTone;
}

export function MetricCard({
  title,
  value,
  icon: Icon,
  tone,
}: MetricCardProps) {
  return (
    <div className="rounded-xl border border-[#e5e7ec] bg-white p-5">
      <div className="flex items-start justify-between">
        <p className="text-2xl font-semibold text-[#151b2b]">
          {value}
        </p>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full ${toneClasses[tone]}`}
        >
          <Icon size={17} />
        </div>
      </div>

      <p className="mt-3 text-[13px] text-[#777f90]">
        {title}
      </p>
    </div>
  );
}
