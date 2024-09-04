import { db } from "./db";
import { expenses, users, expenseCategoryEnum, expenseParticipants, expenseParticipantsRelations, items, receipts } from "./schema"


// populate the database with the mock data from the mockData.ts file

import { mockExpenses, mockUsers, mockExpenseParticipants, mockItems, mockReceipts } from "./mockData";

// insert user data
const insertUsers = async () => {
    await db.insert(users).values(mockUsers).execute();
}

type Expenses = typeof expenses.$inferInsert;

const insertExpenses = async () => {
    await db.insert(expenses).values(mockExpenses as Expenses[]).execute();
}

type ExpenseParticipants = typeof expenseParticipants.$inferInsert;
const insertExpenseParticipants = async () => {
    await db.insert(expenseParticipants).values(mockExpenseParticipants as ExpenseParticipants[]).execute();
}


// Insert data
async function insertMockData() {
    try {
        // Insert users
        await db.insert(users).values(mockUsers);

        // Insert expenses
        await db.insert(expenses).values(mockExpenses as Expenses[]);

        // Insert expense participants
        await db.insert(expenseParticipants).values(mockExpenseParticipants);

        // Insert items
        await db.insert(items).values(mockItems);

        // Insert receipts
        await db.insert(receipts).values(mockReceipts);

        //console.log('Mock data inserted successfully');
    } catch (error) {
        console.error('Error inserting mock data:', error);
    }
}

// Run the insertion
insertMockData();


