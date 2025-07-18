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
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const result = await dummyCredentialLogin(username, password);

  if (result.success) {
    await createSession(username);
    redirect("/");
  } else {
    return result;
  }
}

export async function isUserLoggedIn() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_ID);

  return !!token;
}

async function dummyCredentialLogin(username: string, password: string) {
  if (!username) {
    return { error: "username is required", success: false };
  }

  if (username === "shubhamshinde225@gmail.com" && password === "qwerty@123")
    return { error: "", success: true };

  return { error: "wrong credentials", success: false };
}
