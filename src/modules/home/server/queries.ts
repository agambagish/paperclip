"use cache";

import { cacheTag } from "next/cache";

import { db } from "@/db";

export async function getCategories() {
  cacheTag("home:categories");

  try {
    return await db.query.categories.findMany({
      columns: { id: false },
      limit: 6,
    });
  } catch {
    return [];
  }
}
