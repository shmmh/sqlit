
import { DrizzleAdapter } from '@auth/drizzle-adapter';


import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import { encode as defaultEncode } from 'next-auth/jwt'
import Credentials from "next-auth/providers/credentials";
import { db, getUserByEmail, createSession, getUserByUsername, createUser } from '../lib/db';
import { compare } from 'bcrypt-ts';
import { redirect } from 'next/navigation';
import { accounts, authenticators, sessions, users } from './schema';


type User = typeof users.$inferSelect
const adapter = DrizzleAdapter(db)

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

export const nextAuthConfig: NextAuthConfig = {

    adapter,
    session: {
        strategy: "jwt"
    },
    basePath: "/api/auth",
    providers: [Credentials(credOptions)],
    secret: process.env.AUTH_SECRET,
    callbacks: {
        async session({ session, token }) {
            if (token?.sub) {
                session.user.id = token?.sub
            }
            return session
        }

    },
    pages: {
        signIn: "/login",
    }
    // jwt: {
    //     encode: async (params) => {
    //         if (params.token?.credentials) {
    //             const sessionToken = crypto.randomUUID()
    //             if (!params.token?.sub) {
    //                 throw new Error("No user found")
    //             }
    //             const createdSession = await adapter?.createSession?.({
    //                 sessionToken: sessionToken,
    //                 userId: params.token.sub,
    //                 expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    //             })

    //             if (!createdSession) {
    //                 throw new Error("Failed to create session")
    //             }

    //             return sessionToken
    //         }
    //         return defaultEncode(params)
    //     }
    // }
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

