"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

import { PortalSidebar } from "./portal-sidebar";
import { PortalHeader } from "./portal-header";
import { PortalMobileNav } from "./portal-mobile-nav";
import { HeaderProvider } from "./header-context";

interface PortalShellProps {
  children: ReactNode;
  portal: "college";
}

export function PortalShell({
  children,
}: PortalShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const isSettingsPage = pathname.startsWith(
    "/college/settings",
  );

  return (
    <HeaderProvider>
      <div className="flex h-screen w-full overflow-hidden bg-[#f8f9fb]">
        <PortalSidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed((value) => !value)}
        />

        <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden">
          <PortalHeader />

          <PortalMobileNav />

          <main
            className={[
              "flex-1 overflow-y-auto overflow-x-hidden bp-scrollbar",
              isSettingsPage ? "py-0 px-4" : "p-4",
            ].join(" ")}
          >
            {children}
          </main>
        </div>
      </div>
    </HeaderProvider>
  );
}