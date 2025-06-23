import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "./lib/session";

// 1. Specify protected and public routes
// const protectedRoutes = ["/admin", "/contribute-question", "/problems"];
const publicRoutes = ["/login", "/signup", "/", "/about"];

export default async function middleware(request: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = request.nextUrl.pathname;
  // const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  // 4. Redirect to /login if the user is not authenticated
  if (!isPublicRoute && !session) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // 5. Redirect to / if the user is authenticated
  if (isPublicRoute && session && !request.nextUrl.pathname.startsWith("/")) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
