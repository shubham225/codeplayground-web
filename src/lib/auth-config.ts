import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "./server-actions/auth";

export const authConfig: NextAuthOptions = {
  providers: [
    // CredentialsProvider({
    //   name:"Sign In",
    //   credentials: {
    //   username: { label: "Username", type: "text", placeholder: "jsmith" },
    //   password: { label: "Password", type: "password" }
    // },
    // async authorize(credentials, req) {
    //   const res = await login(credentials?.username as string, credentials?.password as string);
    //   // const res = await fetch("/your/endpoint", {
    //   //   method: 'POST',
    //   //   body: JSON.stringify(credentials),
    //   //   headers: { "Content-Type": "application/json" }
    //   // }

    //   // If no error and we have user data, return it
    //   if (res.success && res.data) {
    //     return res.data
    //   }
    //   // Return null if user data could not be retrieved
    //   return null
    // }
    // }),
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.NEXT_AUTH_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXT_AUTH_GITHUB_CLIENT_SECRET as string,
    }),
  ],
};
