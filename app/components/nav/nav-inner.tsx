import { Button } from "@/components/ui/button";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const navInnerVariants = cva("", {
  variants: {
    variant: {
      mobile: "flex-col gap-x-6 space-y-4 px-6 py-10",
      desktop: "hidden lg:flex space-x-6 items-center",
    },
  },
  defaultVariants: {
    variant: "mobile",
  },
});

const buttonVariants = cva("", {
  variants: {
    variant: {
      mobile: "mt-2",
      desktop: "ml-2",
    },
  },
  defaultVariants: {
    variant: "mobile",
  },
});

interface NavInnerProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
    VariantProps<typeof navInnerVariants>,
    VariantProps<typeof buttonVariants> {}

const NavInner = ({ variant, className }: NavInnerProps) => {
  return (
    <NavigationMenuList
      className={cn(navInnerVariants({ variant, className }))}
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
        <Button asChild className={buttonVariants({ variant })} size="lg">
          <NavigationMenuLink href="/featured-link">
            Featured link
          </NavigationMenuLink>
        </Button>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

export { NavInner };
