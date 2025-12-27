import type { Metadata } from "next";

import { SignUpForm } from "@/modules/auth/components/sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function () {
  return <SignUpForm />;
}
