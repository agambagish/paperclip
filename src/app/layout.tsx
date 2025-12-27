import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import { Providers } from "@/providers";

import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Paperclip",
    default: "Paperclip",
  },
};

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={notoSans.variable} suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
