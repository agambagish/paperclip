import z from "zod";

import { signUpSchema } from "./sign-up-schema";

export const signInSchema = z.object({
  email: signUpSchema.shape.email,
  password: z.string().nonempty("Password can't be empty"),
  rememberMe: z.boolean().optional(),
});

export type SignInSchema = z.infer<typeof signInSchema>;
