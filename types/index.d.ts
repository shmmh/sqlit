import { expenses } from "@/lib/schema"
import { SelectProps } from "@nextui-org/react"
import { items, expenseParticipants, expenses } from "@/lib/schema"

type Expense = typeof expenses.$inferInsert

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      NEXT_PUBLIC_API_URL: string
      DATABASE_URL: string
      POSTGRES_URL: string
      AUTH_DRIZZLE_URL: string
      AUTH_SECRET: string
      BASE_URL: string
    }
  }

  interface ExtendedSelectProps extends Omit<SelectProps, "children"> {
    categories: string[]
  }

  type UserFriends = {
    friendId: string;
    friend: {
      id: string;
      name: string;
      email: string;
      password: string;
      username: string;
      email_verified: boolean;
      created_at: Date;
      updated_at: Date;
    };
  }
  type ItemCategory = typeof expenses.$inferInsert.category

  type Items = typeof items.$inferSelect
  type itemParticipants = (typeof expenseParticipants.$inferSelect)[]
}