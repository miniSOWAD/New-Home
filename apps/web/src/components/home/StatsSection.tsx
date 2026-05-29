const stats = [
  {
    label: "User Roles",
    value: "4"
  },
  {
    label: "Main Modules",
    value: "2"
  },
  {
    label: "Dashboard Types",
    value: "4"
  },
  {
    label: "Approval Required",
    value: "100%"
  }
];

export function StatsSection() {
  return (
    <section className="bg-primary py-14 text-primary-foreground">
      <div className="container-main grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-black md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-primary-foreground/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}