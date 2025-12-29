"use client";

import Link from "next/link";

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormEmail } from "@/components/form/form-email";
import { FormInput } from "@/components/form/form-input";
import { FormPassword } from "@/components/form/form-password";
import { LoadingButton } from "@/components/loading-button";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { useVerifyEmail } from "@/hooks/use-verify-email";
import { authClient } from "@/lib/auth/client";

import type { SignUpSchema } from "../validators/sign-up-schema";
import { signUpSchema } from "../validators/sign-up-schema";

export function SignUpForm() {
  const {
    showVerifyEmailComponent,
    triggerVerification,
    renderVerificationComponentIfNeeded,
  } = useVerifyEmail("sign-up");

  const form = useForm<SignUpSchema>({
    resolver: standardSchemaResolver(signUpSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function handleSubmit(values: SignUpSchema) {
    await authClient.signUp.email(values, {
      onError: (ctx) => {
        toast.error(ctx.error.message);
      },
      onSuccess: () => {
        form.reset();
        toast.success("You have signed up.");
        triggerVerification(values.email);
      },
    });
  }

  const { isSubmitting, isValid } = form.formState;

  if (showVerifyEmailComponent) {
    return renderVerificationComponentIfNeeded();
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="font-bold text-2xl">Create your account</h1>
          <p className="text-balance text-muted-foreground text-sm">
            Fill in the form below to create your account
          </p>
        </div>
        <FormInput
          control={form.control}
          name="name"
          label="Name"
          placeholder="John Doe"
          disabled={isSubmitting}
          autoFocus
        />
        <FormEmail
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@example.com"
          disabled={isSubmitting}
        />
        <FormPassword
          control={form.control}
          name="password"
          label="Password"
          placeholder="*****"
          disabled={isSubmitting}
        />
        <FormPassword
          control={form.control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="*****"
          disabled={isSubmitting}
        />
        <Field>
          <LoadingButton
            type="submit"
            disabled={isSubmitting || !isValid}
            loading={isSubmitting}
          >
            Create Account
          </LoadingButton>
          <FieldDescription className="text-center">
            Already have an account? <Link href="/sign-in">Sign In</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
