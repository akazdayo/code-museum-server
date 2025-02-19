CREATE TABLE `code_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text(30) NOT NULL,
	`description` text(255) NOT NULL,
	`likes` integer DEFAULT 0,
	`code` text NOT NULL,
	`lang` text NOT NULL
);
