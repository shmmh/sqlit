import {
    boolean,
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
    decimal
} from "drizzle-orm/pg-core"

import type { AdapterAccountType } from "next-auth/adapters"

export const users = pgTable("user", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").unique(),
    password: text("password").notNull(),
    username: text("username").unique().notNull(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
})

// Friends table
export const friends = pgTable("friends", {
    friendship_id: text("friendship_id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    userId: text("userId").references(() => users.id).notNull(),
    friend_id: text("friend_id").references(() => users.id).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
});

// Bills table
export const bills = pgTable("bills", {
    bill_id: text("bill_id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    created_by: text("created_by").references(() => users.id).notNull(),
    total_amount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
    title: text("title"),
    created_at: timestamp("created_at").defaultNow().notNull(),
});

// Expenses table
export const expenses = pgTable("expenses", {
    expense_id: text("expense_id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    userId: text("userId").references(() => users.id).notNull(),
    amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
    paid: boolean("paid").default(false).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
});

// Items table
export const items = pgTable("items", {
    item_id: text("item_id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    bill_id: text("bill_id").references(() => bills.bill_id).notNull(),
    name: text("name").notNull(),
    cost: decimal("cost", { precision: 10, scale: 2 }).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
});

// Item Splits table
export const itemSplits = pgTable("item_splits", {
    item_split_id: text("item_split_id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    item_id: text("item_id").references(() => items.item_id).notNull(),
    userId: text("userId").references(() => users.id).notNull(),
    amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
});

// Payments table
export const payments = pgTable("payments", {
    payment_id: text("payment_id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    expense_id: text("expense_id").references(() => expenses.expense_id).notNull(),
    userId: text("userId").references(() => users.id).notNull(),
    amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
    paid_at: timestamp("paid_at").defaultNow().notNull(),
    payment_method: text("payment_method").notNull(),
});

// // Relations (optional, for easier querying)
// export const usersRelations = relations(users, ({ many }) => ({
//     friends: many(friends),
//     createdBills: many(bills),
//     expenses: many(expenses),
//     itemSplits: many(itemSplits),
//     payments: many(payments),
// }));

// export const friendsRelations = relations(friends, ({ one }) => ({
//     user: one(users, { fields: [friends.userId], references: [users.id], relationName: "userRelation" }),
//     friend: one(users, { fields: [friends.friend_id], references: [users.id], relationName: "friendRelation" }),
// }));

// export const billsRelations = relations(bills, ({ one, many }) => ({
//     createdBy: one(users, { fields: [bills.created_by], references: [users.id] }),
//     expenses: many(expenses),
//     items: many(items),
// }));

// export const expensesRelations = relations(expenses, ({ one, many }) => ({
//     bill: one(bills, { fields: [expenses.bill_id], references: [bills.bill_id] }),
//     user: one(users, { fields: [expenses.userId], references: [users.id] }),
//     payments: many(payments),
// }));

// export const itemsRelations = relations(items, ({ one, many }) => ({
//     bill: one(bills, { fields: [items.bill_id], references: [bills.bill_id] }),
//     itemSplits: many(itemSplits),
// }));

// export const itemSplitsRelations = relations(itemSplits, ({ one }) => ({
//     item: one(items, { fields: [itemSplits.item_id], references: [items.item_id] }),
//     user: one(users, { fields: [itemSplits.userId], references: [users.id] }),
// }));

// export const paymentsRelations = relations(payments, ({ one }) => ({
//     expense: one(expenses, { fields: [payments.expense_id], references: [expenses.expense_id] }),
//     user: one(users, { fields: [payments.userId], references: [users.id] }),
// }));




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