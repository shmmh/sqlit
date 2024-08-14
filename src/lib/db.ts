import { eq } from "drizzle-orm"
import config from "./config"
import { drizzle } from "drizzle-orm/node-postgres"
import {Pool} from "pg"
import { users ,sessions} from "./schema"
import { genSaltSync, hashSync } from "bcrypt-ts"

export type NewUser = typeof users.$inferInsert
export type Session = typeof sessions.$inferInsert

let sslMode = ""
if (process.env.APP_ENV === "prod") {
  sslMode = "?sslmode=require"
}
const connectionString = process.env.POSTGRES_URL + sslMode
export const pool = new Pool(
  {connectionString: config.POSTGRES_URL + sslMode}
)

export const db = drizzle(pool)


export async function getUserByEmail(email: string) {
  try{
    let user = await db.select().from(users).where(eq(users.email, email));
    if(!user) throw new Error("User with the email not found")
      return user

  }catch(e){
    throw new Error("Internal Server Error")
  }
}
export async function getUserByUsername(username: string) {
  try{
    let user = await db.select().from(users).where(eq(users.username, username));
    if(!user) throw new Error("User with username not found")
      return user
  }catch(e){
    throw new Error("Internal Server Error")
  }
}

export async function createUser(email: string, password: string, name: string, username: string) {
  let salt = genSaltSync(10);
  let hash = hashSync(password, salt);
  let newUser= { email, password: hash, name ,username} as NewUser

  return await db.insert(users).values(newUser)
}

export async function createSession(session: Session) {
  return await db.insert(sessions).values(session)
}

export * from "drizzle-orm"