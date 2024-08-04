import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ElementType, HTMLAttributes } from "react";

const H1 = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-6xl",
        className,
      )}
      {...props}
    />
  );
};

const H2 = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-5xl",
        className,
      )}
      {...props}
    />
  );
};

const H3 = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl",
        className,
      )}
      {...props}
    />
  );
};

const textVariants = cva("text-primary/75", {
  variants: {
    size: {
      lg: "text-xl lg:text-2xl",
      default: "text-lg lg:text-xl",
      sm: "",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: ElementType;
}

const Text = ({
  size,
  className,
  as: Component = "p",
  ...props
}: TextProps) => {
  return (
    <Component className={cn(textVariants({ size, className }))} {...props} />
  );
};

export { H1, H2, H3, Text };
