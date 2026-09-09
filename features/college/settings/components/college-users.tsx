import { CollegeUser } from "../types";

export function CollegeUsers({
  users,
}: {
  users: CollegeUser[];
}) {
  return (
    <div className="rounded-xl border border-[#e5e7ec] bg-white">
      <div className="flex items-center justify-between border-b border-[#e7e9ee] p-5">
        <div>
          <h2 className="text-sm font-semibold text-[#252b3b]">
            Users
          </h2>

          <p className="mt-1 text-xs text-[#8a91a0]">
            Manage access to your college portal.
          </p>
        </div>

        <button className="rounded-lg bg-[#151b2b] px-3 py-2 text-xs font-semibold text-white">
          Invite user
        </button>
      </div>

      <div className="divide-y divide-[#f0f1f4]">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between gap-4 p-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef0ff] text-xs font-semibold text-[#5b4fcf]">
                {user.name
                  .split(" ")
                  .map(
                    (part) => part[0],
                  )
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </div>

              <div>
                <p className="text-sm font-semibold text-[#252b3b]">
                  {user.name}
                </p>

                <p className="text-xs text-[#8a91a0]">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold text-[#4f5666]">
                {user.role}
              </p>

              <p className="mt-1 text-[11px] text-[#287a4d]">
                {user.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}