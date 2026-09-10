import { PortalShell } from "@/components/layout/portal-shell";

export default function EmployerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PortalShell portal="employer">
      {children}
    </PortalShell>
  );
}