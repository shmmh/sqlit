// lib/db/items.ts
import { db } from '../db'; // Your Drizzle-ORM instance
import { items } from './../schema'; // Import the items table schema
import { eq } from 'drizzle-orm'; // Import the eq function for querying

// Infer types from the schema
type ItemInsert = typeof items.$inferInsert;
type ItemSelect = typeof items.$inferSelect;

// Create an Item
export async function createItem(data: ItemInsert) {
    const [newItem] = await db.insert(items)
        .values(data)
        .returning(); // Returns the newly created item

    return newItem;
}

// Get All Items
export async function getAllItems() {
    const allItems: ItemSelect[] = await db.select().from(items);
    return allItems;
}

// Get an Item by ID using findFirst
export async function getItemById(itemId: number) {
    const item = await db.select().from(items)
        .where(eq(items.item_id, itemId))

    return item[0];
}

// Update an Item
export async function updateItem(itemId: number, data: Partial<ItemInsert>) {
    const result: ItemSelect[] = await db.update(items)
        .set({
            ...data,
            created_at: new Date(), // Update timestamp to current time
        })
        .where(eq(items.item_id, itemId))
        .returning(); // Returns the updated item(s)

    // Handle the result which is an array of updated records
    const updatedItem: ItemSelect | null = result.length > 0 ? result[0] : null;

    return updatedItem;
}

// Delete an Item
export async function deleteItem(itemId: number) {
    const result: ItemSelect[] = await db.delete(items)
        .where(eq(items.item_id, itemId))
        .returning(); // Returns the deleted item(s)

    // Handle the result which is an array of deleted records
    const deletedItem: ItemSelect | null = result.length > 0 ? result[0] : null;

    return deletedItem;
}
