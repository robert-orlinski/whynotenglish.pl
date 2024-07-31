"use client";

import { Button } from "@/components/shadcn/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/sheet";
import { Menu } from "lucide-react";
import { NavInner } from "./nav-inner";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="fit-content">
          <Menu className="h-12 w-12 p-1.5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <nav>
          <SheetTitle className="sr-only">Nawigacja</SheetTitle>
          <NavInner />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export { MobileMenu };
