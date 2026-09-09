import { ScoreBand } from "../types";

interface ScoreDistributionProps {
  bands: ScoreBand[];
}

const barColors = [
  "bg-[#8b7ef0]",
  "bg-[#1f8a4c]",
  "bg-[#151b2b]",
];

export function ScoreDistribution({
  bands,
}: ScoreDistributionProps) {
  const average = bands.length
    ? Math.round(
        bands.reduce(
          (sum, band) => sum + band.count,
          0,
        ) / bands.length,
      )
    : 0;

  return (
    <div className="rounded-xl border border-[#e5e7ec] bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-sm font-semibold text-[#252b3b]">
            Cohort score distribution
          </h2>

          <p className="mt-1 text-xs text-[#8a91a0]">
            Unlocks once payment clears
          </p>
        </div>

        <span className="text-xs text-[#8a91a0]">
          {average} avg
        </span>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        {bands.map((band, index) => (
          <div key={band.label}>
            <p className="text-lg font-semibold text-[#151b2b]">
              {band.count}
            </p>

            <div
              className={`mt-3 h-1 rounded-full ${
                barColors[index % barColors.length]
              }`}
            />

            <p className="mt-3 text-sm font-semibold text-[#252b3b]">
              {band.label}
            </p>

            <p className="mt-0.5 text-xs text-[#8a91a0]">
              {band.range}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-[#8a91a0]">
        Scores refresh nightly. Only students who
        consented to share are counted.
      </p>
    </div>
  );
}
