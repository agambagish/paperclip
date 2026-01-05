import { Suspense } from "react";
import { cookies } from "next/headers";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/modules/admin/components/dashboard-header";
import { DashboardSidebar } from "@/modules/admin/components/dashboard-sidebar";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <SidebarProviderWrapper>
        <DashboardSidebar />
        <SidebarInset>
          <div className="h-full w-full flex-1">
            <DashboardHeader />
            {children}
          </div>
        </SidebarInset>
      </SidebarProviderWrapper>
    </Suspense>
  );
}

async function SidebarProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultOpen = (await cookies()).get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>{children}</SidebarProvider>
  );
}
