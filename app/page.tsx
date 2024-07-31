import { MainBanner } from "@/app/components/main-banner";
import { Container } from "@/components/custom/container";
import { H2, P } from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MainBanner
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        subtitle="Etiam auctor odio nec aliquam varius. Aenean accumsan non arcu et posuere. In ultricies tincidunt eros, sit amet viverra diam fermentum at."
        buttons={{
          primary: {
            label: "Button 1",
            href: "/",
          },
          secondary: {
            label: "Button 2",
            href: "/",
          },
        }}
      />
      <Container
        variant="narrow"
        className="flex flex-col gap-8 lg:flex-row lg:items-center"
      >
        <article className="lg:basis-1/2">
          <H2>Lorem ipsum dolor sit</H2>
          <P className="mt-4" size="lg">
            Amet, consectetur adipiscing elit. Etiam auctor odio nec aliquam
            varius.
          </P>
          <Button asChild className="mt-4">
            <Link
              href="https://unsplash.com/photos/woman-in-white-coat-sitting-on-pathway-surrounded-by-trees-during-daytime-pgiAmBWBy4Y"
              target="_blank"
            >
              Image from the right on Unsplash
            </Link>
          </Button>
        </article>
        <figure className="relative h-[80vw] w-full lg:h-[40vw] lg:basis-1/2">
          <Image
            src="/images/woman.jpg"
            alt="Woman in a forest"
            fill
            className="rounded-2xl object-cover object-center"
            priority
          />
        </figure>
      </Container>
    </>
  );
}
