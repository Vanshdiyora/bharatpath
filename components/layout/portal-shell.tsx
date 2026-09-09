"use client";

import { ReactNode, useState } from "react";
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

  return (
    <HeaderProvider>
      <div className="flex min-h-screen bg-[#f8f9fb]">
        <PortalSidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed((value) => !value)}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <PortalHeader />

          <PortalMobileNav />

          <main className="flex-1 overflow-x-hidden p-4 sm:p-5 lg:p-7">
            {children}
          </main>
        </div>
      </div>
    </HeaderProvider>
  );
}