import { NextResponse, NextRequest } from 'next/server'
export {default} from "next-auth/middleware"
import  { getToken } from "next-auth/jwt"

export const config = {
  matcher: ['/sign-in', '/sign-up', '/'],
};
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  const token = getToken({ req: request })
  const url = request.nextUrl

  if (await token && (
    url.pathname.startsWith('/sign-in') ||
    url.pathname.startsWith('/sign-up') ||
    url.pathname === '/')
  ) { 
    return NextResponse.redirect(new URL('/u/[username]', request.url))
  }

  if (!token && url.pathname.startsWith('/u/[username]')) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}