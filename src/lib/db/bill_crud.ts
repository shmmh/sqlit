// lib/db/bills.ts
import { db } from '../db'; // Your Drizzle-ORM instance
import { bills } from './../schema'; // Import the bills table schema
import { eq } from 'drizzle-orm'; // Import the eq function for querying

// Create a Bill
export async function createBill(data: typeof bills.$inferInsert) {
    const [newBill] = await db.insert(bills)
        .values({
            created_by: data.created_by,
            total_amount: data.total_amount,
            title: data.title || null, // Optional field
        })
        .returning(); // Returns the newly created bill

    return newBill;
}

// Get All Bills
export async function getAllBills() {
    const allBills = await db.select().from(bills);
    return allBills;
}

// Get a Bill by ID using findFirst
export async function getBillById(billId: number) {
    const bill = await db.select().from(bills)
        .where(eq(bills.bill_id, billId))


    return bill[0];
}

// Update a Bill
export async function updateBill(billId: number, data: Partial<typeof bills.$inferInsert>) {
    const [updatedBill] = await db.update(bills)
        .set({
            ...data,
            created_at: new Date(), // Update timestamp to current time
        })
        .where(eq(bills.bill_id, billId))
        .returning(); // Returns the updated bill

    return updatedBill;
}

// Delete a Bill
export async function deleteBill(billId: number) {
    const [deletedBill] = await db.delete(bills)
        .where(eq(bills.bill_id, billId))
        .returning(); // Returns the deleted bill

    return deletedBill;
}
