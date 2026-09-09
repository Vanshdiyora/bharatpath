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
    <div className="rounded-[16px] border border-[#e5e7ec] bg-white px-6 py-5">
      <div className="flex items-start justify-between">
        {/* Value */}
        <p
          className="text-[28px] font-[700] leading-[38px] tracking-[-0.02em] text-[#151b2b]"
          style={{
            fontFamily: "'General Sans', sans-serif",
            fontWeight: 700,
          }}
        >
          {value}
        </p>

        {/* Icon */}
        <div
          className={`
            flex h-[32px] w-[32px]
            items-center justify-center
            rounded-[11px]
            ${toneClasses[tone]}
          `}
        >
          <Icon
            size={16}
            strokeWidth={2}
          />
        </div>
      </div>

      {/* Title */}
      <p
        className="text-[12px] font-[400] leading-[20px] text-[#777f90]"
        style={{
          fontFamily: "'General Sans', sans-serif",
          fontWeight: 400,
        }}
      >
        {title}
      </p>
    </div>
  );
}