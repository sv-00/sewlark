/**
 * Structured Logger
 *
 * Level-aware logging with PII safety.
 * Production: info/warn/error only.
 * Development: debug logs also shown.
 *
 * Usage:
 *   import { log } from "@/lib/logger";
 *   log.info("[Products] Fetched catalog", { count: 42 });
 *   log.error("[Orders] Payment failed", error);
 */

const IS_PRODUCTION = process.env.NODE_ENV === "production";

type LogLevel = "debug" | "info" | "warn" | "error";

interface LogMeta {
  [key: string]: unknown;
}

function formatMessage(
  level: LogLevel,
  message: string,
  meta?: LogMeta | Error
): void {
  const timestamp = new Date().toISOString();

  if (meta instanceof Error) {
    const errorMeta = IS_PRODUCTION
      ? { error: meta.message }
      : { error: meta.message, stack: meta.stack };
    console[level](
      `${timestamp} [${level.toUpperCase()}] ${message}`,
      JSON.stringify(errorMeta)
    );
    return;
  }

  if (meta && Object.keys(meta).length > 0) {
    console[level](
      `${timestamp} [${level.toUpperCase()}] ${message}`,
      JSON.stringify(meta)
    );
  } else {
    console[level](`${timestamp} [${level.toUpperCase()}] ${message}`);
  }
}

export const log = {
  debug(message: string, meta?: LogMeta): void {
    if (!IS_PRODUCTION) {
      formatMessage("debug", message, meta);
    }
  },

  info(message: string, meta?: LogMeta): void {
    formatMessage("info", message, meta);
  },

  warn(message: string, meta?: LogMeta | Error): void {
    formatMessage("warn", message, meta);
  },

  error(message: string, meta?: LogMeta | Error): void {
    formatMessage("error", message, meta);
  },
};
