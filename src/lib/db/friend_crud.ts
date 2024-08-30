import { db } from '../db'; // Your Drizzle-ORM instance
import { friends } from './../schema'; // Your friends table schema
import { eq, or } from 'drizzle-orm'; // Import the eq function for querying

// Create a Friendship
type NewFriend = typeof friends.$inferInsert
export async function createFriendship(userId: string, friendId: string) {
    const [newFriendship] = await db.insert(friends)
        .values({
            userId: userId,
            friend_id: friendId
        })
        .returning(); // Returns the newly created friendship

    return newFriendship;
}

// Get All Friendships of a User
export async function getFriendshipsByUserId(userId: string) {
    const friendships = await db.select().from(friends)
        .where(or(eq(friends.userId, userId), eq(friends.friend_id, userId)))

    return friendships;
}

// Get a Friendship by ID
export async function getFriendshipById(friendshipId: string) {
    const friendship = await db.select().from(friends)
        .where(eq(friends.friendship_id, friendshipId))

    return friendship[0];
}

// Delete a Friendship
export async function deleteFriendship(friendshipId: string) {
    const [deletedFriendship] = await db.delete(friends)
        .where(eq(friends.friendship_id, friendshipId))
        .returning(); // Returns the deleted friendship

    return deletedFriendship;
}
