import { VERIFY_ACCOUNT_EMAIL } from "@/modules/auth/emails/verify-account-email";

import type { EmailIntent } from "./schema";

export function renderEmail(intent: EmailIntent) {
  switch (intent.type) {
    case "verify-account":
      return {
        subject: "Verify Your Account",
        html: VERIFY_ACCOUNT_EMAIL.replace(
          /\{\{VERIFY_URL\}\}/g,
          intent.verifyUrl,
        ),
        preview: {
          VERIFY_URL: intent.verifyUrl,
        },
      };

    case "reset-password":
      return {
        subject: "Reset your password",
        html: `
          <p>Reset your password:</p>
          <a href="${intent.resetUrl}">Reset Password</a>
        `,
        preview: {
          RESET_URL: intent.resetUrl,
        },
      };
  }
}
