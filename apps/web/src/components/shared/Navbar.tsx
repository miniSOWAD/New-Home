"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "To-let",
    href: "/to-let"
  },
  {
    label: "Services",
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
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-xl">
      <div className="container-main flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-glow">
            <Home className="size-6" />
          </div>

          <div>
            <p className="text-xl font-black tracking-tight">New Home</p>
            <p className="-mt-1 text-xs text-muted-foreground">
              Find your place
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                isActive(link.href) && "bg-accent text-accent-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost">
            <Link href="/auth/login">Login</Link>
          </Button>

          <Button asChild>
            <Link href="/auth/register">Register</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-xl border lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t bg-background lg:hidden">
          <div className="container-main space-y-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                  isActive(link.href) && "bg-accent text-accent-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-3">
              <Button asChild variant="outline">
                <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </Button>

              <Button asChild>
                <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                  Register
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}