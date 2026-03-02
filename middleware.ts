import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  // AGAR PATH WEBHOOK HAI, TOH SUPABASE SESSION CHECK MAT KARO
  if (request.nextUrl.pathname.startsWith('/api/webhook')) {
    return NextResponse.next()
  }

  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static, _next/image, favicon.ico, etc.
     */
    '/((?!_next/static|_next/image|favicon.ico|assets/email-templates|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
