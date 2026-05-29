import { NextResponse, type NextRequest } from "next/server";

const AUTH_ROUTES = [
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password"
];

const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/to-let",
  "/services",
  "/auth/waiting-approval"
];

const ROLE_DASHBOARD_MAP: Record<string, string> = {
  SUPER_ADMIN: "/dashboard/super-admin",
  ADMIN: "/dashboard/admin",
  CUSTOMER: "/dashboard/customer",
  PROVIDER: "/dashboard/provider"
};

function isPublicRoute(pathname: string) {
  if (PUBLIC_ROUTES.includes(pathname)) {
    return true;
  }

  if (pathname.startsWith("/to-let/")) {
    return true;
  }

  if (pathname.startsWith("/services/")) {
    return true;
  }

  return false;
}

function isAuthRoute(pathname: string) {
  return AUTH_ROUTES.some((route) => pathname.startsWith(route));
}

function getRoleDashboard(role?: string) {
  if (!role) {
    return null;
  }

  return ROLE_DASHBOARD_MAP[role] ?? null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("new_home_access_token")?.value;
  const userRole = request.cookies.get("new_home_user_role")?.value;
  const approvalStatus = request.cookies.get("new_home_approval_status")?.value;

  const isLoggedIn = Boolean(accessToken);

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (isPublicRoute(pathname)) {
    return NextResponse.next();
  }

  if (isAuthRoute(pathname) && isLoggedIn) {
    if (approvalStatus === "PENDING") {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      url.searchParams.set("status", "waiting-approval");
      return NextResponse.redirect(url);
    }

    if (approvalStatus === "REJECTED") {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      url.searchParams.set("status", "rejected");
      return NextResponse.redirect(url);
    }

    if (approvalStatus === "SUSPENDED") {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      url.searchParams.set("status", "suspended");
      return NextResponse.redirect(url);
    }

    const dashboard = getRoleDashboard(userRole);

    if (dashboard) {
      return NextResponse.redirect(new URL(dashboard, request.url));
    }
  }

  if (pathname.startsWith("/dashboard")) {
    if (!isLoggedIn) {
      const url = request.nextUrl.clone();
      url.pathname = "/auth/login";
      url.searchParams.set("redirect", pathname);
      return NextResponse.redirect(url);
    }

    if (approvalStatus === "PENDING") {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      url.searchParams.set("status", "waiting-approval");
      return NextResponse.redirect(url);
    }

    if (approvalStatus === "REJECTED") {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      url.searchParams.set("status", "rejected");
      return NextResponse.redirect(url);
    }

    if (approvalStatus === "SUSPENDED") {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      url.searchParams.set("status", "suspended");
      return NextResponse.redirect(url);
    }

    if (
      pathname.startsWith("/dashboard/super-admin") &&
      userRole !== "SUPER_ADMIN"
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (pathname.startsWith("/dashboard/admin") && userRole !== "ADMIN") {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (pathname.startsWith("/dashboard/customer") && userRole !== "CUSTOMER") {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (pathname.startsWith("/dashboard/provider") && userRole !== "PROVIDER") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo.svg|images|icons).*)"
  ]
};