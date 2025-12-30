import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

import { db } from "@/db";
import { env } from "@/env";

import { sendEmail } from "../email";

export const auth = betterAuth({
  baseURL: env.NEXT_PUBLIC_BASE_URL,
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    autoSignInAfterVerification: true,
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmail({
        type: "verify-account",
        to: user.email,
        verifyUrl: url,
      });
    },
  },
  rateLimit: {
    enabled: false,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 1,
    },
  },
  plugins: [nextCookies()],
  logger: {
    disabled: true,
  },
  advanced: {
    cookiePrefix: "paperclip",
  },
});
