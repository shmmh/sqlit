"use server"
import { db } from "@/lib/db"
import { expenses } from "@/lib/schema"

// create-expense
type Expense = typeof expenses.$inferInsert
export const createExpense = async (formData: FormData) => {
    const newExpense: Expense = {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        total_amount: parseInt(formData.get("total_amount") as string),
        created_by: formData.get("created_by") as string,
        category: "entertainment",
    }
    await db.insert(expenses).values(newExpense).returning()
}


// update-expense


// delte-expense