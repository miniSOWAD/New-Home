import Link from "next/link";
import { Home, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Platform",
    links: [
      {
        label: "To-let Hub",
        href: "/to-let"
      },
      {
        label: "Service Pro",
        href: "/services"
      },
      {
        label: "About Us",
        href: "/about"
      },
      {
        label: "Contact Us",
        href: "/contact"
      }
    ]
  },
  {
    title: "Account",
    links: [
      {
        label: "Login",
        href: "/auth/login"
      },
      {
        label: "Register",
        href: "/auth/register"
      },
      {
        label: "Waiting Approval",
        href: "/auth/waiting-approval"
      }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container-main grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Home className="size-6" />
            </div>

            <div>
              <p className="text-xl font-black tracking-tight">New Home</p>
              <p className="-mt-1 text-xs text-muted-foreground">
                Find your place. Find trusted help.
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
            New Home connects people with trusted rental listings and reliable
            home service providers through a secure approval-based platform.
          </p>

          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-3">
              <MapPin className="size-4 text-primary" />
              Bangladesh
            </p>

            <p className="flex items-center gap-3">
              <Mail className="size-4 text-primary" />
              support@newhome.com
            </p>

            <p className="flex items-center gap-3">
              <Phone className="size-4 text-primary" />
              +880 1000-000000
            </p>
          </div>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3 className="font-semibold">{group.title}</h3>

            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t">
        <div className="container-main flex flex-col items-center justify-between gap-3 py-5 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} New Home. All rights reserved.</p>

          <p>Built by Md Mahruf Alam</p>
        </div>
      </div>
    </footer>
  );
}