import Link from "next/link";

import { Github } from "lucide-react";

import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-background/95 backdrop-blur">
      <Container paddingDirection="x">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2 space-y-0.5">
            <h3 className="font-semibold text-primary">Storewise</h3>
            <p className="text-muted-foreground text-xs">
              ~✨ Cool marketplace for premium digital assets
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/agambagish/paperclip"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
              })}
            >
              <Github className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
