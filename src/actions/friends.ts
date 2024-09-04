"use server"
import { eq, or } from 'drizzle-orm';
import { db } from "@/lib/db"
import { friendships, groupMembers, groups, users } from "@/lib/schema"
import { revalidatePath } from 'next/cache';

// create-expense
type Friend = typeof friendships.$inferInsert
export const createFriend = async (prevState: any, formdata: FormData) => {
  console.log(formdata)
  const identifier = formdata.get("identifier") as string
  const userId = formdata.get("userId") as string
  try {
    if (!userId) throw new Error("UserId is null")
    if (!identifier) throw new Error("Please provide an identifier")
    const user = await db.query.users.findFirst({
      where: or(
        eq(users?.username, identifier),
        eq(users?.email, identifier)
      ),
    })
    if (!user) throw new Error("user not found")
    let friend = await db
      .insert(friendships)
      .values({ userId: userId, friendId: user.id })
    return revalidatePath("/")
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return { message: "Something went wrong. Details: " + error.message }

    }
  }
}

export const userExist = async (identifier: string) => {
  return (await db.query.users.findFirst({ where: or(eq(users.username, identifier), eq(users.email, identifier)) }))
}


export const createGroup = async (prev: any, formdata: FormData) => {
  console.log(formdata)
  const friends = formdata.get("friends") as string
  const parsedFriendsIds = JSON.parse(friends)
  const name = formdata.get("name") as string
  const userId = formdata.get("userId") as string
  const description = formdata.get("description") as string

  try {
    // create a group first
    const group = await db.insert(groups).values({ name, description, createdBy: userId }).returning({ id: groups.id })
    if (!group) throw new Error("Group cannot be created.")
    const groupId = group[0].id
    for (const memberId of parsedFriendsIds) {
      await db.insert(groupMembers).values({ groupId, userId: memberId })

    }
    revalidatePath("/")
  } catch (error) {
    if (error instanceof Error) {

      return { message: "Cannot create a group at this time. Details: " + error.message }
    }

  }
}

// update-expense


// delte-expense