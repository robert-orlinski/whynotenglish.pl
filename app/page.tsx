import { Container } from "@/components/container";
import { Button } from "@/components/shadcn/button";
import { SmallBlock } from "@/components/small-block";
import { H1, H2, Text } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container className="my-24 flex justify-center" as="header">
        <div className="flex flex-col gap-6 md:items-center md:text-center lg:max-w-[650px]">
          <H1>Jedyna szkoła języka angielskiego, jakiej potrzebujesz!</H1>
          <Text className="md:w-8/12" size="lg">
            Dam Ci wartościową wiedzę i pokażę jak się uczyć - wszystko to w
            sympatycznej atmosferze!
          </Text>
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
      <section>
        <Container
          variant="narrow"
          className="flex flex-col gap-10 lg:flex-row lg:items-center"
          as="div"
        >
          <article className="lg:basis-1/2">
            <H2>Cześć! Jestem Julia!</H2>
            <Text className="mt-4" size="lg">
              W mojej szkole językowej przede wszystkim patrzę na Ciebie.
            </Text>
          </article>
          <figure className="relative h-[80vw] w-full lg:h-[550px] lg:basis-1/2">
            <Image
              src="/images/julia.jpg"
              alt="Woman in a forest"
              fill
              className="rounded-2xl object-cover object-center"
              priority
            />
          </figure>
        </Container>
        <Container variant="v-narrow" className="my-20 space-y-20" as="div">
          <SmallBlock
            image={{
              src: "/images/brain.jpg",
              alt: "",
            }}
            title="Chcę poznać Twój cel"
            description="Textatrzę na to, czego konkretnie potrzebujesz w danym momencie oraz długoterminowo"
          />
          <SmallBlock
            image={{
              src: "/images/work.jpg",
              alt: "",
            }}
            title="Dostosowuję się do Ciebie"
            description="Widzę w jaki sposób się uczysz i Ci z tym pomagam podczas zajęć, jak i poza nimi"
          />
          <SmallBlock
            image={{
              src: "/images/books.jpg",
              alt: "",
            }}
            title="Korzystam z różnorodnych materiałów"
            description="Autorskich, stworzonych przez innych nauczycieli, a nawet uczniów"
          />
        </Container>
      </section>
      <Container variant="narrow" className="mt-28">
        <H2 className="md:text-center">
          Moje zasoby nie ograniczają się tylko do tradycyjnych. W{" "}
          <i>Why Not English</i> uzyskasz takie materiały jak:
        </H2>
        <ul className="mt-8 grid grid-cols-1 gap-y-5 text-2xl md:mt-12 md:grid-cols-3 md:text-center">
          <Text as="li" size="lg">
            Artykuły
          </Text>
          <Text as="li" size="lg">
            Gry
          </Text>
          <Text as="li" size="lg">
            Karty pracy
          </Text>
          <Text as="li" size="lg">
            Filmy i seriale
          </Text>
          <Text as="li" size="lg">
            Filmy na YouTube
          </Text>
          <Text as="li" size="lg">
            Radio i podcasty
          </Text>
          <Text as="li" size="lg">
            Książki i e-booki
          </Text>
          <Text as="li" size="lg">
            Tradycyjne podręczniki
          </Text>
          <Text as="li" size="lg">
            I wiele, wiele innych…
          </Text>
        </ul>
      </Container>
    </>
  );
}
