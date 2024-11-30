"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { handleLogout } from "@/lib/api";

const baseRoutes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Web Development",
        href: "/services/web-development",
        description:
          "Custom websites and web applications built with modern technologies",
      },
      {
        title: "Mobile Development",
        href: "/services/mobile-development",
        description:
          "Native and cross-platform mobile apps for iOS and Android",
      },
      {
        title: "API Development",
        href: "/services/api-development",
        description:
          "Robust and scalable API solutions for your business needs",
      },
      {
        title: "UI/UX Design",
        href: "/services/ui-ux-design",
        description:
          "User-centered design solutions that enhance user experience",
      },
    ],
  },
  {
    title: "Clients",
    href: "/clients",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAdmin(JSON.parse(user || "{}").role === "admin");
    setIsLoggedIn(!!user);
  }, []);

  // Filter routes based on user role
  const routes = React.useMemo(() => {
    return baseRoutes.filter((route) => {
      if (!route.href.startsWith("/admin")) {
        return true;
      }
      return isAdmin;
    });
  }, [isAdmin]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block"> Dev Daim</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  {route.children ? (
                    <>
                      <NavigationMenuTrigger>
                        {route.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {route.children.map((child) => (
                            <ListItem
                              key={child.href}
                              title={child.title}
                              href={child.href}
                            >
                              {child.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={route.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {route.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-between md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Your Brand</span>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                {routes.map((route) => (
                  <React.Fragment key={route.href}>
                    {route.children ? (
                      <div className="space-y-3">
                        <div className="font-medium">{route.title}</div>
                        <div className="pl-4 space-y-2">
                          {route.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "block text-muted-foreground hover:text-primary",
                                pathname === child.href &&
                                  "text-primary font-medium"
                              )}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={route.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-lg font-medium hover:text-primary transition-colors",
                          pathname === route.href && "text-primary"
                        )}
                      >
                        {route.title}
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex md:flex-1 md:justify-end">
          {isLoggedIn ? (
            <Button
              onClick={() => handleLogout(setIsLoggedIn)}
              variant="secondary"
            >
              Logout
            </Button>
          ) : (
            <>
              <Button asChild className="mr-4">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
