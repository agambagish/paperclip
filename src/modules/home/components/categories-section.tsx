import Link from "next/link";

import type { LucideProps } from "lucide-react";
import { icons, Palette } from "lucide-react";

import { Container } from "@/components/container";

import { getCategories } from "../server/queries";

export async function CategoriesSection() {
  const categories = await getCategories();

  return (
    <Container>
      <h2 className="mb-8 font-bold text-2xl">Browse by Category</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((category, i) => (
          <Link
            key={i}
            href={`/products/${category.slug}`}
            className="group rounded-lg border p-6 text-center transition-all hover:shadow-md"
          >
            <div className="mb-2 flex justify-center">
              <DynamicLucideIcon
                icon={category.icon}
                className="size-8 transition-colors group-hover:text-primary"
              />
            </div>
            <h3 className="font-medium transition-colors group-hover:text-primary">
              {category.label}
            </h3>
          </Link>
        ))}
      </div>
    </Container>
  );
}

interface DynamicLucideIconProps extends LucideProps {
  icon: string;
}

function DynamicLucideIcon({ icon, ...props }: DynamicLucideIconProps) {
  const iconName = icon
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  if (!(iconName in icons)) return <Palette {...props} />;

  const Icon = icons[iconName as keyof typeof icons];
  return <Icon {...props} />;
}
