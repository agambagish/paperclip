"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NAV_LINKS = [
  {
    label: "Products",
    slug: "products",
  },
];

export function MainNav() {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <NavigationMenu className="hidden items-center gap-6 md:flex">
      <NavigationMenuList className="flex-wrap">
        {NAV_LINKS.map((link) => (
          <NavigationMenuItem key={link.slug}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={activeSegment === link.slug}
              render={<Link href={`/${link.slug}`}>{link.label}</Link>}
            />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
