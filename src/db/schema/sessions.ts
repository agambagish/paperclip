import { relations } from "drizzle-orm";
import { index, pgTable, text, timestamp } from "drizzle-orm/pg-core";

import { users } from "./users";

export const sessions = pgTable(
  "sessions",
  {
    id: text().primaryKey(),
    expiresAt: timestamp().notNull(),
    token: text().notNull().unique(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp()
      .$onUpdate(() => new Date())
      .notNull(),
    ipAddress: text(),
    userAgent: text(),
    userId: text()
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
  },
  (table) => [index().on(table.userId)],
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));
