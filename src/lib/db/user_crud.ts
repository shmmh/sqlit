import { db } from '../db'; // Your Drizzle-ORM instance
import { users } from './../schema'; // Your users table schema
import { eq } from 'drizzle-orm'; // Import the eq function for querying

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
export async function getUserById(userId: number) {
    const user = await db.select().from(users).where(eq(users.user_id, userId));
    return user[0];
}

// Update a User
export async function updateUser(userId: number, data: Partial<{ username: string; email: string; password: string }>) {
    const [updatedUser] = await db.update(users)
        .set({
            ...data, // Spread the updated fields
            updated_at: new Date(), // Update the `updated_at` timestamp
        })
        .where(eq(users.user_id, userId))
        .returning(); // Returns the updated user

    return updatedUser;
}

// Delete a User
export async function deleteUser(userId: number) {
    const [deletedUser] = await db.delete(users)
        .where(eq(users.user_id, userId))
        .returning(); // Returns the deleted user

    return deletedUser;
}
