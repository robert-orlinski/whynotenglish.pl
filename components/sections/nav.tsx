import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Nav = () => {
  return (
    <NavigationMenu className="p-6 max-w-screen flex justify-between">
      <h1 className="leading-7 font-bold text-lg">Freelancer Personal Site</h1>
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
