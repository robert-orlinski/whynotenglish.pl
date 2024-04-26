import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Nav = () => {
  return (
    <NavigationMenu className="max-w-screen fixed flex w-screen justify-between border-b border-gray-200 bg-white  p-6">
      <span className="text-lg font-bold leading-7">
        Freelancer Personal Site
      </span>
      <NavigationMenuList className="gap-x-6">
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
          <Button asChild>
            <NavigationMenuLink href="/featured-link">
              Featured link
            </NavigationMenuLink>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export { Nav };
