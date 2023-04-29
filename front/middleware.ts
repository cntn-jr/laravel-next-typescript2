// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const isAuthenticate = request.cookies.get("isAuth");
    if (request.nextUrl.pathname.startsWith("/login") && isAuthenticate) {
        return NextResponse.redirect(new URL("/company/list", request.url));
    }

    if (!request.nextUrl.pathname.startsWith("/login") && !isAuthenticate) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}
