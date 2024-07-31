import { Container } from "@/components/container";
import { Button } from "@/components/shadcn/button";
import { SmallBlock } from "@/components/small-block";
import { H1, H2, P } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container className="my-24 flex justify-center" as="header">
        <div className="flex flex-col gap-6 md:items-center md:text-center lg:max-w-[650px]">
          <H1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</H1>
          <P className="md:w-8/12" size="lg">
            Etiam auctor odio nec aliquam varius. Aenean accumsan non arcu et
            posuere. In ultricies tincidunt eros, sit amet viverra diam
            fermentum at.
          </P>
          <footer className="flex gap-6">
            <Button asChild>
              <Link href="/">Button 1</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/">Button 2</Link>
            </Button>
          </footer>
        </div>
      </Container>
      <Container
        variant="narrow"
        className="flex flex-col gap-10 lg:flex-row lg:items-center"
      >
        <article className="lg:basis-1/2">
          <H2>Lorem ipsum dolor sit</H2>
          <P className="mt-4" size="lg">
            Amet, consectetur adipiscing elit. Etiam auctor odio nec aliquam
            varius.
          </P>
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
      <Container variant="v-narrow" className="my-20 space-y-16">
        <SmallBlock
          image={{
            src: "/images/brain.jpg",
            alt: "",
          }}
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SmallBlock
          image={{
            src: "/images/brain.jpg",
            alt: "",
          }}
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SmallBlock
          image={{
            src: "/images/brain.jpg",
            alt: "",
          }}
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Container>
    </>
  );
}
