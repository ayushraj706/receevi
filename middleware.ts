import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api/webhook (ISSE EXCLUDE KIYA HAI TAKI META CONNECT HO SAKE)
     * - _next/static, _next/image, favicon.ico, etc.
     */
    '/((?!api/webhook|_next/static|_next/image|favicon.ico|assets/email-templates|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
