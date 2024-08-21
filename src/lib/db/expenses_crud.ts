// lib/db/expenses.ts
import { db } from '../db'; // Your Drizzle-ORM instance
import { expenses } from './../schema'; // Import the expenses table schema
import { eq } from 'drizzle-orm'; // Import the eq function for querying

// Infer types from the schema
type ExpenseInsert = typeof expenses.$inferInsert;
type ExpenseSelect = typeof expenses.$inferSelect;

// Create an Expense
export async function createExpense(data: ExpenseInsert) {
    const [newExpense] = await db.insert(expenses)
        .values(data)
        .returning(); // Returns the newly created expense

    return newExpense;
}

// Get All Expenses
export async function getAllExpenses() {
    const allExpenses: ExpenseSelect[] = await db.select().from(expenses);
    return allExpenses;
}

// Get an Expense by ID using findFirst
export async function getExpenseById(expenseId: number) {
    const expense = await db.select().from(expenses)
        .where(eq(expenses.expense_id, expenseId))

    return expense[0];
}

// Update an Expense
export async function updateExpense(expenseId: number, data: Partial<ExpenseInsert>) {
    const result: ExpenseSelect[] = await db.update(expenses)
        .set({
            ...data,
            created_at: new Date(), // Update timestamp to current time
        })
        .where(eq(expenses.expense_id, expenseId))
        .returning(); // Returns the updated expense(s)

    // Handle the result which is an array of updated records
    const updatedExpense: ExpenseSelect | null = result.length > 0 ? result[0] : null;

    return updatedExpense;
}

// Delete an Expense
export async function deleteExpense(expenseId: number) {
    const result: ExpenseSelect[] = await db.delete(expenses)
        .where(eq(expenses.expense_id, expenseId))
        .returning(); // Returns the deleted expense(s)

    // Handle the result which is an array of deleted records
    const deletedExpense: ExpenseSelect | null = result.length > 0 ? result[0] : null;

    return deletedExpense;
}
