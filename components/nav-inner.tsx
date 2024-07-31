import { Button } from "@/components/shadcn/button";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/shadcn/navigation-menu";
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
        <NavigationMenuLink href="/zajecia">
          Jak wyglądają zajęcia?
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/cennik">Cennik</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/o-mnie-i-o-szkole">
          O mnie i o szkole
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/kontakt">Kontakt</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Button asChild className={buttonVariants({ variant })} size="lg">
          <NavigationMenuLink href="/zapisz-sie">Zapisz się</NavigationMenuLink>
        </Button>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

export { NavInner };
