import { cx } from "class-variance-authority";
import { ElementType, PropsWithChildren } from "react";

type Props = {
  className?: string;
  as?: ElementType;
};

const Container = ({
  children,
  className,
  as: Component = "section",
}: PropsWithChildren<Props>) => {
  return (
    <Component className={cx("w-screen px-6", className)}>{children}</Component>
  );
};

export { Container };
