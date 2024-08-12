import config from "./config"
import { drizzle } from "drizzle-orm/node-postgres"
import {Pool} from "pg"

let sslMode = ""
if (process.env.APP_ENV === "prod") {
  sslMode = "?sslmode=require"
}
const connectionString = process.env.POSTGRES_URL + sslMode
export const pool = new Pool(
  {connectionString: config.POSTGRES_URL + sslMode}
)

export const db = drizzle(pool, { logger: true })

export * from "drizzle-orm"