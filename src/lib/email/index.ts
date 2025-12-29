import { Resend } from "resend";

import { env } from "@/env";

import { logEmail } from "./log";
import { renderEmail } from "./render";
import type { EmailIntent } from "./schema";
import { emailIntentSchema } from "./schema";

const resend =
  env.APP_ENV === "production" ? new Resend(env.RESEND_API_KEY) : null;

export async function sendEmail(input: EmailIntent) {
  const intent = emailIntentSchema.parse(input);

  const { subject, html, preview } = renderEmail(intent);

  if (env.APP_ENV !== "production") {
    logEmail({
      to: intent.to,
      subject,
      preview,
    });
    return;
  }

  return await resend!.emails.send({
    from: env.EMAIL_FROM,
    to: intent.to,
    subject,
    html,
  });
}
