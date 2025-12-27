import z from "zod/v3";

import { PASSWORD_REGEX } from "../lib/constants";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, "Must be at least 3 characters long.")
      .max(48, "Must be at most 48 characters long."),
    email: z.string().email("Must be a valid email."),
    password: z
      .string()
      .regex(
        PASSWORD_REGEX,
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and symbol. (e.g., Hello#12)",
      ),
    confirmPassword: z.string().nonempty("Please confirm password."),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Make sure both passwords match.",
    path: ["confirmPassword"],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
