/** biome-ignore-all lint/style/noProcessEnv: _ */

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    NODE_ENV: z.enum(["development", "production"]).default("development"),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
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
