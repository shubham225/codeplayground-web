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
        const res = await login(
          credentials?.email as string,
          credentials?.password as string
        );

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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.login = user.login;
      }
      return token;
    },
    async session({ session, token }) {
      // This fields will be added in token
      session.user.id = token.id as string;
      session.user.role = token.role as string;
      session.user.login = token.login as string;
      return session;
    },
  },
};
