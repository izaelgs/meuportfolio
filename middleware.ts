import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse, type MiddlewareConfig } from "next/server"

const publicRoutes = [
  { path: "/", whenAuthenticated: 'next' },
  { path: "/sign-in", whenAuthenticated: 'redirect' },
  { path: "/sign-up", whenAuthenticated: 'redirect' },
  { path: "/sign-out", whenAuthenticated: 'next' },
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/sign-in"

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  const publicRoute = publicRoutes.find(route => route.path === path);

  const authToken = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  console.log(authToken)

  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  if(!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname = '/dashboard';

    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && !publicRoute) {
    const currentTime = Math.floor(Date.now() / 1000);
    if (typeof authToken.exp === 'number' && authToken.exp < currentTime) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
      return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  /**
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon)
   */
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

