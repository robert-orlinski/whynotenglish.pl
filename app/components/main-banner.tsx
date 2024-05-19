import { Container } from "@/components/custom/container";
import { H1, P } from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
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
}

const MainBanner = ({ title, subtitle, buttons }: Props) => {
  return (
    <Container className="flex justify-center py-24" as="header">
      <div className="flex flex-col gap-6 md:items-center md:text-center lg:max-w-[650px]">
        <H1>{title}</H1>
        {subtitle && (
          <P className="md:w-8/12" size="xl">
            {subtitle}
          </P>
        )}
        {buttons && (
          <footer className="flex gap-6">
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
