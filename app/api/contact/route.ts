import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { contactSchema } from "@/lib/validation";
import { sendContactEmails } from "@/lib/email";
import { ZodError } from "zod";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getRateLimitKey(ip: string): string {
  return `contact:${ip}`;
}

function checkRateLimit(ip: string): boolean {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 5;

  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count++;
  return true;
}

function getClientIp(headersList: Awaited<ReturnType<typeof headers>>): string {
  return (
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  try {
    const headersList = await headers();
    const ip = getClientIp(headersList);

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Por favor espera un momento." },
        { status: 429 }
      );
    }

    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Formato de solicitud inválido." },
        { status: 400 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "El cuerpo de la solicitud es inválido." },
        { status: 400 }
      );
    }

    const validatedData = contactSchema.parse(body);

    await sendContactEmails(validatedData);

    return NextResponse.json(
      { success: true, message: "Mensaje enviado exitosamente." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Datos inválidos.",
          details: error.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 422 }
      );
    }

    console.error("[contact/route] Error:", error instanceof Error ? error.message : "Unknown error");

    return NextResponse.json(
      { error: "Error interno. Por favor intenta nuevamente más tarde." },
      { status: 500 }
    );
  }
}
