import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

interface Props {
  title: string;
  description?: string;
  backButtonHref?: string;
}

export function DashboardPageTitle({
  title,
  description,
  backButtonHref,
}: Props) {
  return (
    <div className="flex items-center space-x-4">
      {backButtonHref && (
        <Link
          href={backButtonHref}
          className={buttonVariants({
            size: "icon",
            variant: "outline",
          })}
        >
          <ArrowLeft />
        </Link>
      )}
      <div>
        <h2 className="font-bold text-2xl">{title}</h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
    </div>
  );
}
