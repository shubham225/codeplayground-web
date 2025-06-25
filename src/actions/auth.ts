"use server";

import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

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
