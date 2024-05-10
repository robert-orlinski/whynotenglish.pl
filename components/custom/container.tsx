import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ElementType, PropsWithChildren } from "react";

const containerVariants = cva("mx-auto", {
  variants: {
    variant: {
      default: "w-screen px-6",
      narrow: "w-8/12",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface Props extends VariantProps<typeof containerVariants> {
  className?: string;
  as?: ElementType;
}

const Container = ({
  children,
  variant,
  className,
  as: Component = "section",
}: PropsWithChildren<Props>) => {
  return (
    <Component className={cn(containerVariants({ variant, className }))}>
      {children}
    </Component>
  );
};

export { Container };
