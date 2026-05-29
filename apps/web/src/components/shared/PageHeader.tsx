import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  badge?: string;
  children?: React.ReactNode;
  className?: string;
};

export function PageHeader({
  title,
  description,
  badge,
  children,
  className
}: PageHeaderProps) {
  return (
    <section className={cn("border-b bg-hero-gradient py-14", className)}>
      <div className="container-main">
        {badge ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {badge}
          </p>
        ) : null}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
              {title}
            </h1>

            {description ? (
              <p className="mt-4 max-w-2xl text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>

          {children ? <div>{children}</div> : null}
        </div>
      </div>
    </section>
  );
}