"use server";

import { createSession, decrypt, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

type FormState = { id: string; user: string };

export async function signup(state: FormState, formData: FormData) {
  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}

export async function login() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  createSession("testUser");
  redirect("/");
}

export async function isLoggedIn() {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  return session ? true : false;
}
