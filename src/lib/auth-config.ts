import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "./server-actions/auth";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("creds: ", credentials);
        const res = await login(
          credentials?.email as string,
          credentials?.password as string
        );
        
        console.log("creds: ", credentials, "res", res);
        return res;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.NEXT_AUTH_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXT_AUTH_GITHUB_CLIENT_SECRET as string,
    }),
  ],

  session: {
    strategy: "jwt",
  },
};
