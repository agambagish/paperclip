"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormEmail } from "@/components/form/form-email";
import { FormPassword } from "@/components/form/form-password";
import { LoadingButton } from "@/components/loading-button";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { authClient } from "@/lib/auth/client";

import type { SignInSchema } from "../validators/sign-in-schema";
import { signInSchema } from "../validators/sign-in-schema";

export function SignInForm() {
  const router = useRouter();

  const form = useForm<SignInSchema>({
    resolver: standardSchemaResolver(signInSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function handleSubmit(values: SignInSchema) {
    await authClient.signIn.email(values, {
      onError: (ctx) => {
        toast.error(ctx.error.message);
        if (ctx.error.status === 403) {
          // TODO: Trigger Verification
        }
      },
      onSuccess: () => {
        form.reset();
        toast.success("You have signed in.");
        router.push("/");
      },
    });
  }

  const { isSubmitting, isValid } = form.formState;

  // TODO: Render Verification

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <FieldGroup>
        <FormEmail
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@example.com"
          disabled={isSubmitting}
          autoFocus
        />
        <FormPassword
          control={form.control}
          name="password"
          label="Password"
          placeholder="*****"
          disabled={isSubmitting}
          forgotPassword
        />
        <Field>
          <LoadingButton
            type="submit"
            disabled={isSubmitting || !isValid}
            loading={isSubmitting}
          >
            Sign In
          </LoadingButton>
          <FieldDescription className="text-center">
            Don&apos;t have an account? <Link href="/sign-up">Sign Up</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
