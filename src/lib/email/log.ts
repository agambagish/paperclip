import chalk from "chalk";

export function logEmail({
  to,
  subject,
  preview,
}: {
  to: string;
  subject: string;
  preview: Record<string, string | undefined>;
}) {
  // biome-ignore lint/suspicious/noConsole: _
  console.log(
    "\n" +
      chalk.bgMagenta.white.bold(" EMAIL (DEV MODE) ") +
      "\n" +
      chalk.gray("To: ") +
      chalk.white(to) +
      "\n" +
      chalk.gray("Subject: ") +
      chalk.white(subject) +
      "\n\n" +
      Object.entries(preview)
        .map(([k, v]) => chalk.cyan(k.padEnd(14)) + chalk.white(v))
        .join("\n") +
      "\n\n" +
      chalk.gray("—".repeat(40)) +
      "\n",
  );
}
