import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/session";

// 1. Specify public routes
const publicRoutes = ["/login", "/signup", "/", "/about"];

export default async function middleware(request: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = request.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const session = await getSession();

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
