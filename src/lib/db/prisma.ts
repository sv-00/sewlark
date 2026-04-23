import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

/**
 * Append MongoDB timeout params to the connection URL if not already present.
 * - connectTimeoutMS=5000: fail fast if MongoDB is unreachable
 * - serverSelectionTimeoutMS=5000: stop waiting for a server after 5s
 */
function buildDbUrl(): string {
  const base = process.env["DATABASE_URL"] || "";
  if (!base) return base;
  const sep = base.includes("?") ? "&" : "?";
  const params: string[] = [];
  if (!base.includes("connectTimeoutMS")) params.push("connectTimeoutMS=5000");
  if (!base.includes("serverSelectionTimeoutMS"))
    params.push("serverSelectionTimeoutMS=5000");
  return params.length > 0 ? `${base}${sep}${params.join("&")}` : base;
}

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env["NODE_ENV"] === "development"
        ? [
            { level: "query", emit: "event" },
            { level: "error", emit: "event" },
            { level: "warn", emit: "event" },
          ]
        : [{ level: "error", emit: "event" }],
    datasources: {
      db: {
        url: buildDbUrl(),
      },
    },
  });

// Log slow queries in development (> 100ms)
if (process.env["NODE_ENV"] === "development") {
  (prisma.$on as any)("query", (e: any) => {
    const duration = e?.duration || 0;
    if (duration >= 4500) return; // Skip connection timeout noise
    if (duration > 100) {
      console.warn(
        `[Prisma] Slow query (${duration}ms): ${e?.query?.substring(0, 100)}...`
      );
    }
  });
}

if (process.env["NODE_ENV"] !== "production") globalForPrisma.prisma = prisma;
