import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

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

const paragraphVariants = cva("text-primary/70", {
  variants: {
    size: {
      lg: "text-xl lg:text-2xl",
      default: "text-lg lg:text-xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const P = ({ size, className, ...props }: ParagraphProps) => {
  return (
    <p className={cn(paragraphVariants({ size, className }))} {...props} />
  );
};

export { H1, H2, H3, P };
