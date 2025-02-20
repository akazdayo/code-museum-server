//import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/*
export const codeTable = sqliteTable("code_table", {
	id: int().primaryKey({ autoIncrement: true }),
	title: text("title", { length: 30 }).notNull(),
	description: text("description", { length: 255 }).notNull(),
	likes: int().default(0),
	code: text().notNull(),
	lang: text().notNull(),
});
*/

export const codeTable = pgTable("code_table", {
	id: serial().primaryKey(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	likes: integer().default(0),
	code: text().notNull(),
	lang: text().notNull(),
	created_at: timestamp().defaultNow(),
	updated_at: timestamp()
		.defaultNow()
		.notNull()
		.$onUpdate(() => new Date()),
});

export type InsertCode = typeof codeTable.$inferInsert;
export type SelectCode = typeof codeTable.$inferSelect;
