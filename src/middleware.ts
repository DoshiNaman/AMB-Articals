import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Check for an authentication cookie

  const isAuthenticatedState = req.cookies.get("auth-storage");

  console.log("Authentication state:", isAuthenticatedState); // Added logging

  let isAuthenticated = false;
  if (isAuthenticatedState != undefined) {
    isAuthenticated = isAuthenticatedState.value === "true" ? true : false;
  }

  // Check the current URL to prevent redirect loops
  const currentUrl = req.nextUrl.pathname;

  // Bypass middleware for static assets
  if (
    currentUrl.startsWith("/_next/") ||
    currentUrl.startsWith("/api/") ||
    currentUrl.endsWith(".css")
  ) {
    return NextResponse.next();
  }

  if (!isAuthenticated && currentUrl !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (isAuthenticated) {
    if (currentUrl === "/articals") {
      return NextResponse.next();
    } else if (currentUrl.includes("/artical")) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/articals", req.url));
  }

  // Allow the request to proceed if already on the correct page
  return NextResponse.next();
}
