"use client";

import Link from "next/link";

import { LogOut, UserPen } from "lucide-react";
import { toast } from "sonner";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth/client";
import { generateAvatarURL } from "@/lib/utils";

interface Props {
  isSignedIn?: boolean;
}

export function UserButton({ isSignedIn }: Props) {
  const { isPending, data: ctx } = authClient.useSession();

  if (isPending)
    return isSignedIn ? (
      <Skeleton className="size-7 rounded-full" />
    ) : (
      <Skeleton className="h-8 w-15" />
    );

  if (!ctx) {
    return (
      <Link href="/sign-in" className={buttonVariants()}>
        Sign In
      </Link>
    );
  }

  async function handleSignOut() {
    await authClient.signOut(
      {},
      {
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("You have been signed out.");
        },
      },
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-7 cursor-pointer border-none">
          <AvatarImage
            src={generateAvatarURL(ctx.user.name)}
            alt={ctx.user.name}
            className=""
          />
          <AvatarFallback>
            {ctx.user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className="space-y-1">
              <p className="font-medium text-accent-foreground text-sm leading-none">
                {ctx.user.name}
              </p>
              <p className="text-muted-foreground text-xs leading-none">
                {ctx.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            render={
              <Link href="/account">
                <UserPen />
                Account
              </Link>
            }
          />
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onClick={handleSignOut}>
            <LogOut />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
