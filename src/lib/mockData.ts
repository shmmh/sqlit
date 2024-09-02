import { users, expenses, expenseParticipants, items, receipts } from './schema';


export const mockUsers = [
    {
        id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        username: "alice",
        email_verified: true,
        password: 'hashed_password_1',
        created_at: new Date('2024-01-01T10:00:00Z'),
        updated_at: new Date('2024-01-01T10:00:00Z'),
    },
    {
        id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
        name: 'Bob Smith',
        email: 'bob@example.com',
        username: "bobsmith",
        email_verified: false,
        password: 'hashed_password_2',
        created_at: new Date('2024-01-02T11:00:00Z'),
        updated_at: new Date('2024-01-02T11:00:00Z'),
    },
    {
        id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r',
        name: 'Charlie Brown',
        email: 'charlie@example.com',
        username: "charlie",
        email_verified: false,
        password: 'hashed_password_3',
        created_at: new Date('2024-01-03T12:00:00Z'),
        updated_at: new Date('2024-01-03T12:00:00Z'),
    },
];

export const mockExpenses = [
    {
        id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s',
        name: 'Dinner at Italian Restaurant',
        description: 'Group dinner at Bella Italia',
        total_amount: 120.50,
        category: 'food',
        created_by: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p', // Alice
        created_at: new Date('2024-08-15T19:30:00Z'),
        updated_at: new Date('2024-08-15T19:30:00Z'),
    },
    {
        id: '5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t',
        name: 'Monthly Utilities',
        description: 'Electricity and water bill for August',
        total_amount: 150.00,
        category: 'utilities',
        created_by: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q', // Bob
        created_at: new Date('2024-08-20T14:00:00Z'),
        updated_at: new Date('2024-08-20T14:00:00Z'),
    },
];

type ExpenseParticipants = typeof expenseParticipants.$inferInsert;

export const mockExpenseParticipants = [
    {
        id: '6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u',
        expense_id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s', // Dinner expense
        user_id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p', // Alice
        percentage: 33.33,
        amount: 40.17,
        paid: true,
        created_at: new Date('2024-08-15T19:35:00Z'),
        updated_at: new Date('2024-08-15T19:35:00Z'),
    },
    {
        id: '7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v',
        expense_id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s', // Dinner expense
        user_id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q', // Bob
        percentage: 33.33,
        amount: 40.17,
        paid: false,
        created_at: new Date('2024-08-15T19:35:00Z'),
        updated_at: new Date('2024-08-15T19:35:00Z'),
    },
    {
        id: '8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w',
        expense_id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s', // Dinner expense
        user_id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r', // Charlie
        percentage: 33.34,
        amount: 40.16,
        paid: false,
        created_at: new Date('2024-08-15T19:35:00Z'),
        updated_at: new Date('2024-08-15T19:35:00Z'),
    },
    {
        id: '9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x',
        expense_id: '5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t', // Utilities expense
        user_id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p', // Alice
        percentage: 50,
        amount: 75.00,
        paid: true,
        created_at: new Date('2024-08-20T14:05:00Z'),
        updated_at: new Date('2024-08-20T14:05:00Z'),
    },
    {
        id: '0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y',
        expense_id: '5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t', // Utilities expense
        user_id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q', // Bob
        percentage: 50,
        amount: 75.00,
        paid: true,
        created_at: new Date('2024-08-20T14:05:00Z'),
        updated_at: new Date('2024-08-20T14:05:00Z'),
    },
];

export const mockItems = [
    {
        id: '1k2l3m4n-5o6p-7q8r-9s0t-1u2v3w4x5y6z',
        expense_id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s', // Dinner expense
        name: 'Margherita Pizza',
        quantity: 2,
        price: 30.00,
        created_at: new Date('2024-08-15T19:31:00Z'),
        updated_at: new Date('2024-08-15T19:31:00Z'),
    },
    {
        id: '2l3m4n5o-6p7q-8r9s-0t1u-2v3w4x5y6z7a',
        expense_id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s', // Dinner expense
        name: 'Pasta Carbonara',
        quantity: 1,
        price: 25.50,
        created_at: new Date('2024-08-15T19:31:00Z'),
        updated_at: new Date('2024-08-15T19:31:00Z'),
    },
    {
        id: '3m4n5o6p-7q8r-9s0t-1u2v-3w4x5y6z7a8b',
        expense_id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s', // Dinner expense
        name: 'Tiramisu',
        quantity: 3,
        price: 35.00,
        created_at: new Date('2024-08-15T19:31:00Z'),
        updated_at: new Date('2024-08-15T19:31:00Z'),
    },
];

export const mockReceipts = [
    {
        id: '4n5o6p7q-8r9s-0t1u-2v3w-4x5y6z7a8b9c',
        expense_id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s', // Dinner expense
        image_url: 'https://example.com/receipts/dinner_20240815.jpg',
        merchant_name: 'Bella Italia',
        location: '123 Main St, Anytown, AN 12345',
        date: new Date('2024-08-15T19:45:00Z'),
        total_amount: 120.50,
        created_at: new Date('2024-08-15T19:50:00Z'),
        updated_at: new Date('2024-08-15T19:50:00Z'),
    },
];