/** biome-ignore-all lint/style/noProcessEnv: _ */

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    APP_ENV: z.enum(["development", "production"]).default("development"),
    BETTER_AUTH_SECRET: z.string(),
    RESEND_API_KEY: z.string(),
    EMAIL_FROM: z.string(),
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.url(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    APP_ENV: process.env.APP_ENV,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
  },
  emptyStringAsUndefined: true,
  onValidationError: (issues) => {
    // biome-ignore lint/suspicious/noConsole: _
    console.error(z.prettifyError({ issues }));
    process.exit(1);
  },
  onInvalidAccess: () => {
    throw new Error(
      "Attempted to access a server-side environment variable on the client",
    );
  },
});
