import "server-only";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

type SessionPayload = { userId: string; expiresAt: Date };

export async function encrypt(payload: SessionPayload) {
  // Request to Auth Server for auth token
  const jwtToken = "JWTtOkEn";
  return jwtToken;
}

export async function decrypt(session: string | undefined = "") {
  try {
  // Request to Auth Server for token verification
    const { payload } = JSON.parse(session);
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
