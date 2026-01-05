"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { ChartColumnStacked, LayoutDashboard, Shield } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const SIDEBAR_LINKS = [
  {
    label: "Overview",
    slug: "",
    icon: LayoutDashboard,
  },
  {
    label: "Categories",
    slug: "categories",
    icon: ChartColumnStacked,
  },
];

export function DashboardSidebar() {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <Link href="/admin" className="flex items-center gap-2">
                <div className="flex aspect-square size-7 items-center justify-center bg-foreground">
                  <Shield className="size-4 text-white dark:text-black" />
                </div>
                <span className="font-bold text-[20px]">Admin</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SIDEBAR_LINKS.map((link) => (
                <SidebarMenuItem key={link.slug}>
                  <SidebarMenuButton
                    isActive={
                      activeSegment === link.slug ||
                      (link.slug === "" && activeSegment === null)
                    }
                    render={
                      <Link
                        href={link.slug ? `/admin/${link.slug}` : "/admin"}
                        className={
                          activeSegment === link.slug
                            ? "opacity-100"
                            : "opacity-80"
                        }
                      >
                        <link.icon />
                        {link.label}
                      </Link>
                    }
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
