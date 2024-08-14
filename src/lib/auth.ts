
import {DrizzleAdapter} from '@auth/drizzle-adapter';


import NextAuth, { NextAuthConfig } from 'next-auth';
import Credentials from "next-auth/providers/credentials";
import { db, getUserByEmail, createSession} from '../lib/db';
import { compare } from 'bcrypt-ts';



const options = {
    async authorize({email,password}: any) {
        let user  = await getUserByEmail(email as string);
        if(user.length === 0) return null
        let passwordMatch = await compare(password, user[0].password!);
        if (passwordMatch) return user[0] as any;

    }
}

export const {
    handlers,
    auth,signIn, signOut

} = NextAuth({
    session:{
        strategy: "jwt",
    },
    adapter: DrizzleAdapter(db),
    providers:[Credentials(options)],
    callbacks: {
        async session({session, token}) {
            return session;
        },
    }
})

