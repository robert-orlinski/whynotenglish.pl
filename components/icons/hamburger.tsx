import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = {
  size?: number;
};

const HamburgerIcon = ({
  className,
  size = 5,
}: HTMLAttributes<SVGElement> & Props) => {
  return (
    <svg
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(`h-${size} w-${size}`, className)}
    >
      <path
        d="M3 5H11"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M3 12H16"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M3 19H21"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export { HamburgerIcon };
