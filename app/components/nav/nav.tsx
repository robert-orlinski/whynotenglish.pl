import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Brand } from "./brand";
import { MobileMenu } from "./mobile-menu";
import { NavInner } from "./nav-inner";

const Nav = () => {
  return (
    <NavigationMenu className="max-w-screen fixed flex h-24 w-screen justify-between border-b border-gray-200 bg-white px-6">
      <Brand />
      <NavInner variant="desktop" />
      <MobileMenu />
    </NavigationMenu>
  );
};

export { Nav };
