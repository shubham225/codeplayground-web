"use client";

import * as React from "react";
import Link from "next/link";

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
import { ChevronsLeftRightEllipsis } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Take Exam",
    href: "/exams/join-exam",
    description:
      "Participate in exams to evaluate your skills and track your progress.",
  },
  {
    title: "Create Exam",
    href: "/exams/create-exam",
    description:
      "Build custom exams with selected questions.",
  },
];

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit">Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <ChevronsLeftRightEllipsis className="text-orange-400 w-6 h-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">AppName</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Your personalized hub for coding practice. See your
                      progress, recommended problems.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/contests" title="Contests">
              Join live coding challenges or review past contests.
              </ListItem>
              <ListItem href="/admin/contribute" title="Contribute Question">
                Submit your own coding problems to the platform.
              </ListItem>
              <ListItem href="/about" title="About Us">
                Learn more about this website.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="/problems" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-inherit")}>
              Practice
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/admin/contribute-question" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-inherit")}>
            Contribute
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit">Exam</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
          <div className="text-sm font-medium leading-none flex justify-between">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
