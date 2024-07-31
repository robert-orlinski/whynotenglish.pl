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
          <H1>Jedyna szkoła języka angielskiego, jakiej potrzebujesz!</H1>
          <P className="md:w-8/12" size="lg">
            Dam Ci wartościową wiedzę i pokażę jak się uczyć - wszystko to w
            sympatycznej atmosferze!
          </P>
          <footer className="flex gap-6">
            <Button asChild>
              <Link href="/cennik">Cennik</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/zapisz-sie">Zapisz się!</Link>
            </Button>
          </footer>
        </div>
      </Container>
      <Container
        variant="narrow"
        className="flex flex-col gap-10 lg:flex-row lg:items-center"
      >
        <article className="lg:basis-1/2">
          <H2>Cześć! Jestem Julia!</H2>
          <P className="mt-4" size="lg">
            W mojej szkole językowej przede wszystkim patrzę na Ciebie.
          </P>
        </article>
        <figure className="relative h-[80vw] w-full lg:h-[40vw] lg:basis-1/2">
          <Image
            src="/images/julia.jpg"
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
          title="Chcę poznać Twój cel"
          description="Patrzę na to, czego konkretnie potrzebujesz w danym momencie oraz długoterminowo"
        />
        <SmallBlock
          image={{
            src: "/images/brain.jpg",
            alt: "",
          }}
          title="Dostosowuję się do Ciebie"
          description="Widzę w jaki sposób się uczysz i Ci z tym pomagam podczas zajęć, jak i poza nimi"
        />
        <SmallBlock
          image={{
            src: "/images/brain.jpg",
            alt: "",
          }}
          title="Korzystam z różnorodnych materiałów"
          description="Autorskich, stworzonych przez innych nauczycieli, a nawet uczniów"
        />
      </Container>
    </>
  );
}
