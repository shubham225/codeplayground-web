"use server";

import {
  createSession,
  decrypt,
  deleteSession,
  SESSION_ID,
} from "@/lib/session";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

type FormState = { id: string; user: string };

export async function signup(state: FormState, formData: FormData) {
  // TODO: Implementation
  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}

export async function login(username: string, password: string) {
  console.log("received: ", username, password);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const result = await dummyCredentialLogin(username, password);

  return result;
}

export async function isUserLoggedIn() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_ID);

  return !!token;
}

async function dummyCredentialLogin(username: string, password: string) {
  const user = {
    id: "1236432793",
    name: "Shubham Shinde",
    email: "shubhamshinde225@gmail.com",
    role: "user",
    login: "@shubhamshinde225",
    password: "qwerty123", 
    image: "https://pbs.twimg.com/profile_images/874661809139073025/X8yzIhNy_400x400.jpg"
  };

  if (username === user.email && password === user.password) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  return null;
}
