"use client";

import { HamburgerIcon } from "@/components/icons/hamburger";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Brand } from "./brand";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuClass = !isMobileMenuOpen
    ? "-translate-x-full"
    : "translate-x-0";

  return (
    <NavigationMenu className="max-w-screen fixed flex h-24 w-screen justify-between border-b border-gray-200 bg-white px-6">
      <Brand />
      <NavigationMenuList
        className={cn(
          "fixed left-0 top-24 z-50 h-svh w-screen flex-col gap-x-6 space-y-2 bg-white px-6 py-10 transition-transform delay-0 duration-200 md:space-x-1",
          mobileMenuClass,
        )}
      >
        <NavigationMenuItem>
          <NavigationMenuLink href="/link-1">Link 1</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/link-2">Link 2</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/link-3">Link 3</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/link-4">Link 4</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button asChild className="mt-2">
            <NavigationMenuLink href="/featured-link">
              Featured link
            </NavigationMenuLink>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMobileMenuOpen((currentState) => !currentState)}
      >
        <HamburgerIcon />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </NavigationMenu>
  );
};

export { Nav };
