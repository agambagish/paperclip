import z from "zod";

export const verifyEmailSchema = z.object({
  type: z.literal("verify-account"),
  to: z.email(),
  verifyUrl: z.url(),
});

export const resetPasswordSchema = z.object({
  type: z.literal("reset-password"),
  to: z.email(),
  resetUrl: z.url(),
});

export const emailIntentSchema = z.discriminatedUnion("type", [
  verifyEmailSchema,
  resetPasswordSchema,
]);

export type EmailIntent = z.infer<typeof emailIntentSchema>;
