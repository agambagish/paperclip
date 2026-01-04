import Link from "next/link";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  FileText,
  Music,
  Package,
  Palette,
  Paperclip,
  TrendingUp,
  Users,
} from "lucide-react";

import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const stats = [
  {
    icon: Package,
    label: "Products",
    stat: "10k+",
  },
  {
    icon: Users,
    label: "Creators",
    stat: "5k+",
  },
  {
    icon: TrendingUp,
    label: "Rating",
    stat: "4.9/5",
  },
] satisfies StatsProps[];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b bg-linear-to-br from-background via-muted/30 to-background">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="secondary" className="mb-6">
              <TrendingUp className="size-3" />
              10,000+ Premium Assets Available
            </Badge>
            <h1 className="mb-6 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text font-bold text-4xl md:text-6xl lg:text-7xl">
              Premium Digital Assets for Creators
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Discover thousands of high-quality design resources from talented
              creators worldwide
            </p>
            <div className="mb-12 flex flex-wrap gap-4">
              <Link href="/products" className={buttonVariants({ size: "lg" })}>
                Browse Products
                <ArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 border-border/50 border-t pt-8 md:gap-8">
              {stats.map((stat, i) => (
                <Stats key={i} {...stat} />
              ))}
            </div>
          </div>
          <AbstractDesign />
        </div>
      </Container>
    </section>
  );
}

interface StatsProps {
  icon: LucideIcon;
  label: string;
  stat: string;
}

function Stats(props: StatsProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-primary/10 p-2">
        <props.icon className="size-5 text-primary" />
      </div>
      <div>
        <div className="font-bold text-2xl">{props.stat}</div>
        <div className="text-muted-foreground text-xs">{props.label}</div>
      </div>
    </div>
  );
}

function AbstractDesign() {
  return (
    <div className="relative hidden h-100 animate-fade-in lg:block">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-muted to-secondary/20" />
        <div className="absolute top-8 right-12 h-32 w-32 rounded-full bg-primary/20 blur-xl" />
        <div className="absolute bottom-16 left-8 h-24 w-24 rounded-full bg-accent/30 blur-lg" />
        <div className="absolute top-1/2 right-1/4 h-16 w-16 rounded-full bg-secondary blur-md" />
        <div className="absolute top-12 left-12 h-20 w-20 rotate-12 rounded-2xl border-2 border-primary/30" />
        <div className="-rotate-6 absolute top-24 right-20 h-16 w-16 rounded-xl border-2 border-foreground/10" />
        <div className="absolute right-16 bottom-20 h-28 w-28 rotate-45 rounded-3xl border border-primary/20" />
        <div className="absolute bottom-32 left-20 h-12 w-12 rotate-12 rounded-lg bg-primary/10" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-40 w-40 rounded-full border border-primary/10" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-32 w-32 rounded-full border border-primary/20" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-24 w-24 rounded-full bg-linear-to-br from-primary/5 to-transparent" />
        <Paperclip className="absolute top-16 right-1/4 h-10 w-10 rotate-45 text-primary/30" />
        <Paperclip className="-rotate-12 absolute bottom-24 left-1/4 h-8 w-8 text-foreground/20" />
        <Palette className="absolute top-12 left-1/3 h-9 w-9 rotate-12 text-primary/25" />
        <FileText className="-rotate-6 absolute right-1/3 bottom-16 h-8 w-8 text-foreground/15" />
        <Music className="absolute top-1/3 right-12 h-7 w-7 rotate-6 text-primary/20" />
      </div>
    </div>
  );
}
