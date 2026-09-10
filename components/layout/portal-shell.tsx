"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

import { PortalSidebar } from "./portal-sidebar";
import { PortalHeader } from "./portal-header";
import { PortalMobileNav } from "./portal-mobile-nav";
import { HeaderProvider } from "./header-context";

interface PortalShellProps {
  children: ReactNode;
  portal: "college" | "employer" | "student" | "admin";
}

export function PortalShell({
  children,
  portal,
}: PortalShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const isSettingsPage = pathname.startsWith(
    `/${portal}/settings`,
  );

  const isCandidatesPage = pathname.startsWith(
    `/${portal}/candidates`,
  );

  const isQueuePage = pathname.startsWith(
    `/${portal}/queue`,
  );

  const isUsersPage = pathname.startsWith(
    `/${portal}/users`,
  );

  const isDisputesPage = pathname.startsWith(
    `/${portal}/disputes`,
  );
  return (
    <HeaderProvider>
      <div className="flex h-screen w-full overflow-hidden bg-[#f8f9fb]">

        {/* =================================================
            SIDEBAR
            ================================================= */}
        <PortalSidebar
          portal={portal}
          collapsed={collapsed}
          onToggle={() =>
            setCollapsed((value) => !value)
          }
        />

        {/* =================================================
            MAIN CONTENT AREA
            ================================================= */}
        <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden">

          {/* Header */}
          <PortalHeader portal={portal} />

          {/* Mobile Navigation */}
          <PortalMobileNav portal={portal} />

          {/* =================================================
              PAGE CONTENT
              ================================================= */}
          <main
            className={[
              "min-h-0 min-w-0 flex-1 overflow-hidden overflow-x-hidden bp-scrollbar",

              isCandidatesPage
                ? "p-0"
                : isSettingsPage || isQueuePage || isUsersPage || isDisputesPage
                  ? "px-4 py-0 overflow-y-auto"
                  : "p-4 overflow-y-auto",
            ].join(" ")}
          >
            {children}
          </main>
        </div>
      </div>
    </HeaderProvider>
  );
}