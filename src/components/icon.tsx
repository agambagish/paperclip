import type { LucideProps } from "lucide-react";
import { Circle, icons } from "lucide-react";

interface Props extends LucideProps {
  icon: string;
}

export function Icon({ icon, ...props }: Props) {
  const iconName = icon
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  if (!(iconName in icons)) return <Circle {...props} />;

  const Icon = icons[iconName as keyof typeof icons];
  return <Icon {...props} />;
}
