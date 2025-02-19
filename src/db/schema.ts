import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const codeTable = sqliteTable("code_table", {
	id: int().primaryKey({ autoIncrement: true }),
	title: text("title", { length: 30 }).notNull(),
	description: text("description", { length: 255 }).notNull(),
	likes: int().default(0),
	code: text().notNull(),
	lang: text().notNull(),
});
