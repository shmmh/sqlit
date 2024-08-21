
import { DrizzleAdapter } from '@auth/drizzle-adapter';


import NextAuth, { NextAuthConfig } from 'next-auth';
import Credentials from "next-auth/providers/credentials";
import { db, getUserByEmail, createSession, getUserByUsername, createUser } from '../lib/db';
import { compare } from 'bcrypt-ts';
import { redirect } from 'next/navigation';
import { users } from './schema/auth-schema';
import credentials from 'next-auth/providers/credentials';

type User = typeof users.$inferSelect

const credOptions = {
    async authorize({ email, password }: any) {
        let user = await getUserByEmail(email as string);
        if (user.length === 0) throw new Error("User not found")
        let passwordMatch = await compare(password as string, user[0].password!);
        if (passwordMatch) return user[0] as any;

    },
    credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
    }
}

const nextAuthConfig: NextAuthConfig = {

    adapter: DrizzleAdapter(db),
    basePath: "/api/auth",
    providers: [Credentials(credOptions)],
    callbacks: {



    }
}
export async function signInWithEmail(formData: FormData) {
    await signIn("credentials", {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        redirectTo: "/dashboard",
    })
}
export async function register(formData: FormData) {
    let email = formData.get("email") as string
    let password = formData.get("password") as string
    let name = formData.get("name") as string
    let username = formData.get("username") as string
    let user = await getUserByEmail(email)
    let user1 = await getUserByUsername(username)

    if (user.length > 0) {
        throw new Error("User with this email already exists")
    } else {
        let success = await createUser(email, password, name, username)
        if (!success) throw new Error("Failed to create user")
        redirect("/login")
    }
}

export const {
    handlers,
    auth, signIn, signOut

} = NextAuth(nextAuthConfig)

