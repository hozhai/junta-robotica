import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { Pool } from "@neondatabase/serverless";
import PostgresAdapter from "@auth/pg-adapter"

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        host: process.env.DATABASE_HOST
    })
    return {
        adapter: PostgresAdapter(pool),
        providers: [
            Github,
            Google({
                authorization: {
                    params: {
                        prompt: "consent",
                        access_type: "offline",
                        response_type: "code",
                    },
                },
            }),
        ],
        pages: {
            signIn: "/login"
        },
        debug: true,
    }
});
