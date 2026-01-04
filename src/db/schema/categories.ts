import { relations } from "drizzle-orm";
import { integer, pgTable, text } from "drizzle-orm/pg-core";

import { subcategories } from "./subcategories";

export const categories = pgTable("categories", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  label: text().notNull().unique(),
  slug: text().notNull().unique(),
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  // TODO: Add products many
  subcategories: many(subcategories),
}));

export type Category = typeof categories.$inferSelect;
