// import { NextRequest, NextResponse } from "next/server";
// import { getSession } from "./lib/session";

// // 1. Specify public routes
// const publicRoutes = ["/", "/about"];
// const authRoutes = ["/login", "/signup"];

// export default async function middleware(request: NextRequest) {
//   // 2. Check if the current route is protected or public
//   const path = request.nextUrl.pathname;
//   const isAuthRoute = authRoutes.includes(path);
//   const isPublicRoute = publicRoutes.includes(path) || isAuthRoute;

//   // 3. Decrypt the session from the cookie
//   const session = await getSession();

//   // 4. Redirect to /login if the user is not authenticated
//   if (!isPublicRoute && !session) {
//     return NextResponse.redirect(new URL("/login", request.nextUrl));
//   }

//   // 5. Redirect to / if the user is authenticated
//   if (isAuthRoute && session) {
//     return NextResponse.redirect(new URL("/", request.nextUrl));
//   }

//   return NextResponse.next();
// }

// // Routes Middleware should not run on
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Run middleware only on protected routes
export default withAuth(
  function middleware(req: NextRequest) {
    // Optional: You can add extra logic here (e.g. roles, redirects)
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Require authentication
    },
  }
);

// Define which routes the middleware should apply to
export const config = {
  matcher: [
    /**
     * Match all routes except:
     * - root ("/")
     * - /about
     * - /login
     * - /signup
     * - static files (/_next, /favicon.ico, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|about|login|signup$).*)",
  ],
};