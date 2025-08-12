// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET = process.env.JWT_SECRET || "my-secret";
const encoder = new TextEncoder();

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    await jwtVerify(token, encoder.encode(SECRET));
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/premium/:path*", "/premium"],
};
