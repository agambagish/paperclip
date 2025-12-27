import { Container } from "@/components/container";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <Container
      height="storefront"
      paddingDirection="x"
      className="grid lg:grid-cols-2"
    >
      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm">{children}</div>
      </div>
      <div className="relative hidden overflow-hidden bg-muted lg:block">
        <div className="absolute inset-0 bg-linear-to-br from-background via-muted to-secondary" />
        <div className="-top-24 -left-24 absolute h-130 w-130 rounded-full bg-primary/30 blur-3xl" />
        <div className="-right-32 absolute top-1/3 h-120 w-120 rounded-full bg-chart-2/30 blur-3xl" />
        <div className="-bottom-32 absolute left-1/4 h-105 w-105 rounded-full bg-chart-3/20 blur-3xl" />
        <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent" />
      </div>
    </Container>
  );
}
