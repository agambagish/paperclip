import { relations } from "drizzle-orm";
import { index, integer, pgTable, text } from "drizzle-orm/pg-core";

import { categories } from "./categories";

export const subcategories = pgTable(
  "subcategories",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    label: text().notNull().unique(),
    slug: text().notNull().unique(),
    categoryId: integer()
      .notNull()
      .references(() => categories.id, { onDelete: "cascade" }),
  },
  (t) => ({
    categoryIdIdx: index().on(t.categoryId),
  }),
);

export const subcategoriesRelations = relations(subcategories, ({ one }) => ({
  category: one(categories, {
    fields: [subcategories.categoryId],
    references: [categories.id],
  }),
}));

export type Subcategory = typeof subcategories.$inferSelect;
