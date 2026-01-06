import Link from "next/link";

import { Container } from "@/components/container";
import { Icon } from "@/components/icon";

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
              <Icon
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
