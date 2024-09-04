import { db } from '../db'; // Your Drizzle-ORM instance
import { users } from '../.schema'; // Your users table schema
import { and, eq, gt, ilike, like, sql } from 'drizzle-orm'; // Import the eq function for querying
import { expenseParticipants, expenses, items, lower } from '../schema';


// Create a User
export async function createUser(data: { username: string; email: string; password: string }) {
    const [newUser] = await db.insert(users)
        .values({
            username: data.username,
            email: data.email,
            password: data.password,
        })
        .returning(); // Returns the newly created user

    return newUser;
}

// Get All Users
export async function getAllUsers() {
    const allUsers = await db.select().from(users);
    return allUsers;
}

// Get User by ID
export async function getUserById(userId: string) {
    const user = await db.select().from(users).where(eq(users.id, userId));
    return user[0];
}

// Update a User
export async function updateUser(userId: string, data: Partial<{ username: string; email: string; password: string }>) {
    const [updatedUser] = await db.update(users)
        .set({
            ...data, // Spread the updated fields
            updated_at: new Date(), // Update the `updated_at` timestamp
        })
        .where(eq(users.id, userId))
        .returning(); // Returns the updated user

    return updatedUser;
}

// Delete a User
export async function deleteUser(userId: string) {
    const [deletedUser] = await db.delete(users)
        .where(eq(users.id, userId))
        .returning(); // Returns the deleted user

    return deletedUser;
}

// get user balance by calculating all expenses need to paid
// Query to calculate user balances
export async function calculateUserBalances(userId: string) {
    const res = await db
        .select({
            totalOwed: sql<number>`SUM(${expenseParticipants.amount})`,
            totalPaid: sql<number>`SUM(CASE WHEN ${expenseParticipants.paid} = true THEN ${expenseParticipants.amount} ELSE 0 END)`,
        })
        .from(expenseParticipants)
        .where(eq(expenseParticipants.user_id, userId))

    return res
}
// get user recent expenses by userId
export async function getUserExpensesById(userId: string) {

    const userExpenses = await db.query.expenses.findMany({
        where: and(eq(expenses.created_by, userId), gt(expenses.total_amount, 0.00)),
        with: {
            participants: true
        },

    })


    return userExpenses
}
// get user friends
export async function getUserFriendsById(userId: string) {

    const userFriends = await db
        .query.users.findFirst({
            where: eq(users.id, userId),
            with: {
                friendships: {
                    columns: {
                        friendId: true
                    },
                    with: {
                        friend: true
                    }
                }
            }


        })

    console.log(userFriends)
    if (userFriends) {
        return userFriends.friendships
    }

    return []



}
// get user groups
export async function getUserGroupsById(userId: string) {

    const userGroups = await db.query.users.findFirst({
        where: eq(users.id, userId),
        with: {
            createdGroups: {
                with: {
                    members: {
                        with: { user: true }
                    }
                },

            }
        }
    })
    if (userGroups) {
        return userGroups?.createdGroups

    }
    return []
}

//find user items
export async function getUserItems(search: string) {
    const searchTerm = `%${search}%`

    const userItems = await db.query.items.findMany({
        where: ilike(items.name, searchTerm),
        limit: 10

    },)

    return userItems

}
