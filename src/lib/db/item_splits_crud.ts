// lib/db/itemSplits.ts
import { db } from '../db'; // Your Drizzle-ORM instance
import { itemSplits } from '../.schema'; // Import the item_splits table schema
import { eq } from 'drizzle-orm'; // Import the eq function for querying

// Infer types from the schema
type ItemSplitInsert = typeof itemSplits.$inferInsert;
type ItemSplitSelect = typeof itemSplits.$inferSelect;

// Create an Item Split
export async function createItemSplit(data: ItemSplitInsert) {
    const [newItemSplit] = await db.insert(itemSplits)
        .values(data)
        .returning(); // Returns the newly created item split

    return newItemSplit;
}

// Get All Item Splits
export async function getAllItemSplits() {
    const allItemSplits: ItemSplitSelect[] = await db.select().from(itemSplits);
    return allItemSplits;
}

// Get an Item Split by ID using findFirst
export async function getItemSplitById(itemSplitId: string) {
    const itemSplit = await db.select().from(itemSplits)
        .where(eq(itemSplits.item_split_id, itemSplitId))

    return itemSplit[0];
}

// Update an Item Split
export async function updateItemSplit(itemSplitId: string, data: Partial<ItemSplitInsert>) {
    const result: ItemSplitSelect[] = await db.update(itemSplits)
        .set({
            ...data,
            created_at: new Date(), // Update timestamp to current time
        })
        .where(eq(itemSplits.item_split_id, itemSplitId))
        .returning(); // Returns the updated item split(s)

    // Handle the result which is an array of updated records
    const updatedItemSplit: ItemSplitSelect | null = result.length > 0 ? result[0] : null;

    return updatedItemSplit;
}

// Delete an Item Split
export async function deleteItemSplit(itemSplitId: string) {
    const result: ItemSplitSelect[] = await db.delete(itemSplits)
        .where(eq(itemSplits.item_split_id, itemSplitId))
        .returning(); // Returns the deleted item split(s)

    // Handle the result which is an array of deleted records
    const deletedItemSplit: ItemSplitSelect | null = result.length > 0 ? result[0] : null;

    return deletedItemSplit;
}
