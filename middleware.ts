import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const PUBLIC_PRESCRIPTION_PATHS = [
  "/prescription/login",
  "/prescription/signup",
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Build request headers that include x-pathname so server components
  // (layouts/pages) can read the current path via headers().get("x-pathname").
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  // Start with a response that forwards the enriched request headers.
  // The supabase client's setAll may reassign `response` when it needs to
  // set session cookies — we re-apply x-pathname after that happens.
  let response = NextResponse.next({ request: { headers: requestHeaders } });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Apply cookies to the request so they're visible to RSC
          cookiesToSet.forEach(({ name, value }) =>
            requestHeaders.set(`cookie`, `${name}=${value}`),
          );
          // Rebuild response preserving x-pathname AND setting the new cookies
          response = NextResponse.next({ request: { headers: requestHeaders } });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Refresh session — must be called before any auth check
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Allow login/signup through without a session
  if (PUBLIC_PRESCRIPTION_PATHS.some((p) => pathname.startsWith(p))) {
    // Already logged in → send away from login/signup
    if (user) {
      return NextResponse.redirect(new URL("/prescription", request.url));
    }
    return response;
  }

  // All other /prescription/* and /api/prescription/* require a session
  if (!user) {
    if (pathname.startsWith("/api/prescription")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const loginUrl = new URL("/prescription/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: ["/prescription/:path*", "/api/prescription/:path*"],
};
