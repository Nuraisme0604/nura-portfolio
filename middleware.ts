import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Lấy IP người dùng
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwardedFor?.split(",")[0].trim() || realIp || "unknown";

  // Lấy thêm thông tin hữu ích
  const userAgent = request.headers.get("user-agent") || "unknown";
  const country = request.geo?.country || "unknown";
  const city = request.geo?.city || "unknown";
  const referer = request.headers.get("referer") || "direct";

  // Log chi tiết - CHỈ HIỂN THỊ TRONG VERCEL LOGS
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    ip,
    country,
    city,
    path: request.nextUrl.pathname,
    method: request.method,
    userAgent: userAgent.substring(0, 100), // Cắt ngắn để dễ đọc
    referer
  }));

  // Return response bình thường - KHÔNG gửi IP cho client
  return NextResponse.next();
}

// Config: chỉ chạy middleware cho các route cần thiết
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
