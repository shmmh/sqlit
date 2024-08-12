import {DrizzleAdapter} from '@auth/drizzle-adapter';


import NextAuth from 'next-auth';
import GitHub from "next-auth/providers/github";
import { db} from '../lib/db';


export const {
    handlers: {GET, POST},
    auth,signIn, signOut

} = NextAuth({
    adapter: DrizzleAdapter(db),
    providers:[GitHub],
    callbacks: {
        async session({session, user, token}) {
            return session;
        }
    }
})

