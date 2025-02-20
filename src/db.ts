import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config();

const sql = neon(import.meta.env.DATABASE_URL!);
export const db = drizzle({ client: sql });
