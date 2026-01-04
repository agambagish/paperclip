import { Suspense } from "react";
import { cookies } from "next/headers";
import Link from "next/link";

import { Paperclip } from "lucide-react";

import { Container } from "@/components/container";
import { auth } from "@/lib/auth";
import { UserButton } from "@/modules/auth/components/user-button";

import { MainNav } from "./main-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <Container paddingDirection="x">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex aspect-square size-8 items-center justify-center bg-primary text-white">
                <Paperclip className="size-4 text-white dark:text-black" />
              </div>
              <span className="mb-1 font-bold text-[22px] text-primary">
                Paperclip
              </span>
            </Link>
            <MainNav />
          </div>
          {/* TODO: Add Cart Sheet */}
          <Suspense>
            <UserButtonWrapper />
          </Suspense>
        </div>
      </Container>
    </header>
  );
}

async function UserButtonWrapper() {
  const isSignedIn = (await cookies()).has(
    `${auth.options.advanced.cookiePrefix}.session_token`,
  );

  return <UserButton isSignedIn={isSignedIn} />;
}
