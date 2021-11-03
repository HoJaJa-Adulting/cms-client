import { NextRequest, NextResponse } from "next/server";

const authRoutes = [
  "/signin",
  "/signup",
  "https://hojaja-cms-client.herokuapp.com/signin",
  "https://hojaja-cms-client.herokuapp.com/signup",
];

export function middleware(req: NextRequest) {
  console.log("Req:", req.url);
  const isAuthRoute = authRoutes.includes(req.url);
  const authToken = req.cookies.token;

  if (authToken && isAuthRoute) {
    return NextResponse.redirect("/");
  }

  if (!authToken && !isAuthRoute) {
    return NextResponse.redirect("/signin");
  }

  return NextResponse.next();
}
