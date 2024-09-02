import { relations } from "drizzle-orm";
import {
    boolean,
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
    decimal,
    pgEnum,
} from "drizzle-orm/pg-core";
import { AdapterAccountType } from "next-auth/adapters";

// Users table
export const users = pgTable("users", {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    password: text("password").notNull(),
    username: text("username").unique().notNull(),
    email_verified: boolean("email_verified").default(false).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});

// Expense categories enum
export const expenseCategoryEnum = pgEnum('expense_category', [
    'utilities',
    'food',
    'transportation',
    'entertainment',
    'other'
]);

// Expenses table
export const expenses = pgTable("expenses", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    total_amount: decimal("total_amount", { precision: 10, scale: 2 }).notNull().$type<number>(),
    category: expenseCategoryEnum("category").notNull(),
    created_by: text("created_by").references(() => users.id).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});

// Expense participants table
export const expenseParticipants = pgTable("expense_participants", {
    id: text("id").primaryKey(),
    expenses_id: text("expenses_id").references(() => expenses.id).notNull(),
    user_id: text("user_id").references(() => users.id).notNull(),
    expenses_participants_items_id: text("expenses_participants_id").references(() => expenseParticipantsItems.id),
    percentage: decimal("percentage", { precision: 5, scale: 2 }).notNull().$type<number>(),
    amount: decimal("amount", { precision: 10, scale: 2 }).notNull().$type<number>(),
    paid: boolean("paid").default(false).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});

// Expense Participant Items Table
export const expenseParticipantsItems = pgTable("expense_participants_items", {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    expenses_id: text("expenses_id").references(() => expenses.id),
    items_id: text("items_id").references(() => items.id),
    quantity: integer("quantity").notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});


// Items table
export const items = pgTable("items", {
    id: text("id").primaryKey(),
    expense_id: text("expense_id").references(() => expenses.id).notNull(),
    name: text("name").notNull(),
    quantity: integer("quantity").notNull(),
    price: decimal("price", { precision: 10, scale: 2 }).notNull().$type<number>(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});

// Receipts table
export const receipts = pgTable("receipts", {
    id: text("id").primaryKey(),
    expense_id: text("expense_id").references(() => expenses.id).notNull(),
    image_url: text("image_url").notNull(),
    merchant_name: text("merchant_name"),
    location: text("location"),
    date: timestamp("date").notNull(),
    total_amount: decimal("total_amount", { precision: 10, scale: 2 }).notNull().$type<number>(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});


// Relations

export const usersRelations = relations(users, ({ many }) => ({
    createdExpenses: many(expenses),
    expenseParticipations: many(expenseParticipants),
}));

export const expensesRelations = relations(expenses, ({ one, many }) => ({
    creator: one(users, {
        fields: [expenses.created_by],
        references: [users.id],
    }),
    participants: many(expenseParticipants),
    items: many(items),
    receipt: one(receipts),
}));

export const expenseParticipantsRelations = relations(expenseParticipants, ({ one, many }) => ({
    expense: one(expenses, {
        fields: [expenseParticipants.expenses_id],
        references: [expenses.id],
    }),
    user: one(users, {
        fields: [expenseParticipants.user_id],
        references: [users.id],
    }),
    items: many(expenseParticipantsItems)
}));
export const expenseParticipantsItemsRelations = relations(expenseParticipantsItems, ({ one, many }) => ({
    expense: one(expenses, {
        fields: [expenseParticipantsItems.expenses_id],
        references: [expenses.id],
    }),
    participants: many(expenseParticipants)
}));

export const itemsRelations = relations(items, ({ one, many }) => ({
    expense: one(expenses, {
        fields: [items.expense_id],
        references: [expenses.id],
    }),
    participants: many(expenseParticipants)
}));

export const receiptsRelations = relations(receipts, ({ one }) => ({
    expense: one(expenses, {
        fields: [receipts.expense_id],
        references: [expenses.id],
    }),
}));

// Next Auth Additional Schema


export const accounts = pgTable(
    "account",
    {
        userId: text("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        type: text("type").$type<AdapterAccountType>().notNull(),
        provider: text("provider").notNull(),
        providerAccountId: text("providerAccountId").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: text("token_type"),
        scope: text("scope"),
        id_token: text("id_token"),
        session_state: text("session_state"),
    },
    (account) => ({
        compoundKey: primaryKey({
            columns: [account.provider, account.providerAccountId],
        }),
    })
)

export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
})

export const verificationTokens = pgTable(
    "verificationToken",
    {
        identifier: text("identifier").notNull(),
        token: text("token").notNull(),
        expires: timestamp("expires", { mode: "date" }).notNull(),
    },
    (verificationToken) => ({
        compositePk: primaryKey({
            columns: [verificationToken.identifier, verificationToken.token],
        }),
    })
)

export const authenticators = pgTable(
    "authenticator",
    {
        credentialID: text("credentialID").notNull().unique(),
        userId: text("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        providerAccountId: text("providerAccountId").notNull(),
        credentialPublicKey: text("credentialPublicKey").notNull(),
        counter: integer("counter").notNull(),
        credentialDeviceType: text("credentialDeviceType").notNull(),
        credentialBackedUp: boolean("credentialBackedUp").notNull(),
        transports: text("transports"),
    },
    // (authenticator) => ({
    //     compositePK: primaryKey({
    //         columns: [authenticator.userId, authenticator.credentialID],
    //     }),
    // })
)

function uuid(arg0: string) {
    throw new Error("Function not implemented.");
}
