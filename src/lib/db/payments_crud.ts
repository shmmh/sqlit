// lib/db/payments.ts
import { db } from '../db'; // Your Drizzle-ORM instance
import { payments } from './../schema'; // Import the payments table schema
import { eq } from 'drizzle-orm'; // Import the eq function for querying

// Infer types from the schema
type PaymentInsert = typeof payments.$inferInsert;
type PaymentSelect = typeof payments.$inferSelect;

// Create a Payment
export async function createPayment(data: PaymentInsert) {
    const [newPayment] = await db.insert(payments)
        .values(data)
        .returning(); // Returns the newly created payment

    return newPayment;
}

// Get All Payments
export async function getAllPayments() {
    const allPayments: PaymentSelect[] = await db.select().from(payments);
    return allPayments;
}

// Get a Payment by ID using findFirst
export async function getPaymentById(paymentId: number) {
    const payment = await db.select().from(payments)
        .where(eq(payments.payment_id, paymentId))

    return payment[0];
}

// Update a Payment
export async function updatePayment(paymentId: number, data: Partial<PaymentInsert>) {
    const result: PaymentSelect[] = await db.update(payments)
        .set({
            ...data,
            paid_at: new Date(), // Update timestamp to current time
        })
        .where(eq(payments.payment_id, paymentId))
        .returning(); // Returns the updated payment(s)

    // Handle the result which is an array of updated records
    const updatedPayment: PaymentSelect | null = result.length > 0 ? result[0] : null;

    return updatedPayment;
}

// Delete a Payment
export async function deletePayment(paymentId: number) {
    const result: PaymentSelect[] = await db.delete(payments)
        .where(eq(payments.payment_id, paymentId))
        .returning(); // Returns the deleted payment(s)

    // Handle the result which is an array of deleted records
    const deletedPayment: PaymentSelect | null = result.length > 0 ? result[0] : null;

    return deletedPayment;
}
