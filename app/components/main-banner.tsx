import { Container } from "@/components/custom/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  buttons?: {
    primary?: {
      label: string;
      href: string;
    };
    secondary?: {
      label: string;
      href: string;
    };
  };
};

const MainBanner = ({ title, subtitle, buttons }: Props) => {
  return (
    <Container className="flex justify-center py-24" as="header">
      <div className="flex flex-col gap-6 text-center lg:max-w-[650px]">
        <h1 className="text-3xl font-bold tracking-tight lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto w-8/12 text-2xl text-gray-600">{subtitle}</p>
        )}
        {buttons && (
          <footer className="flex justify-center gap-6">
            {buttons.primary && (
              <Button asChild>
                <Link href={buttons.primary.href}>{buttons.primary.label}</Link>
              </Button>
            )}
            {buttons.secondary && (
              <Button variant="secondary" asChild>
                <Link href={buttons.secondary.href}>
                  {buttons.secondary.label}
                </Link>
              </Button>
            )}
          </footer>
        )}
      </div>
    </Container>
  );
};

export { MainBanner };
