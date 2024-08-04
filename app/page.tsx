import { Container } from "@/components/container";
import { Button } from "@/components/shadcn/button";
import { SmallBlock } from "@/components/small-block";
import { Testimonial } from "@/components/testimonial";
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
      <Container
        variant="v-narrow"
        className="my-16 space-y-8 md:text-center lg:my-24"
      >
        <Text size="lg">
          Jest mnóstwo metod uczenia. <br />A jaka jest moja?
        </Text>
        <H2>Jesteś nią Ty</H2>
        <Text size="lg">
          To Ty mi powiesz czego oczekujesz od zajęć, a ja stanę na wysokości
          zadania, aby Ci z tym pomóc i utworzyć indywidualny tok nauki którego
          potrzebujesz.
        </Text>
      </Container>
      <Container variant="narrow" className="space-y-10">
        <Testimonial
          avatar={{
            src: "/images/marta.jpg",
            alt: "MG",
          }}
          name="Marta Gardeła"
          description={[
            'Julię poznałam w zeszłym roku gdy zapisałam się do szkoły angielskiego. Od tej pory co tydzień mamy razem zajęcia i jest to dla mnie mega produktywny, a zarazem super spędzony czas. Od Julii dostaję bardzo dużo wiedzy, cierpliwości, zaangażowania w prowadzone lekcje, motywacji i wsparcia w uczeniu się języka. Jest to super otwarta, pozytywna osoba z którą od razu poczułam wspólny "vibe" i nie chciałabym za nic zmieniać osoby która pogłębia moją sympatię do tego języka! Dlatego bardzo polecam Julię jako nauczyciela i jako świetną osobę, która posiada szeroką wiedzę z języka, życia w anglojęzycznych krajach oraz doświadczenie w nauczaniu. Jest to odpowiednia osoba na odpowiednim miejscu, zdecydowanie nauczanie jest jej pasją.',
          ]}
        />
        <Testimonial
          avatar={{
            src: "/images/ilona.jpg",
            alt: "IG",
          }}
          name="Ilona Gronowska"
          description={[
            "Serdecznie polecam! Jeżeli dodatkowe zajęcia z języka obcego to tylko u Pani Julii!",
            "Sumienna, odpowiedzialna, konsekwentna, i przede wszystkim z powołaniem do nauki innych osób! Potrafi zainteresować ucznia zajęciami, syn nie może się doczekać każdej kolejnej lekcji angielskiego z Panią Julią.",
          ]}
        />
        <Testimonial
          avatar={{
            src: "/images/anita.jpg",
            alt: "AN",
          }}
          name="Anita Norkiewicz"
          description={[
            "Pani Julia udziela korepetycji mojej córce już 5 lat. Jest bardzo miłą i sympatyczną osobą z bardzo dobrym podejściem do dziecka i młodzieży. Pani Julia jest zawsze gotowa do pomocy. Jestem bardzo zadowolona z nauki jaką Pani przekazuje mojej córce. Z całego serca polecam Panią Julię jako nauczyciel do języka angielskiego.",
            "Moja córka zaczynała naukę z Panią Julką jako dziecko, dziś jest prawie nastolatką i jest bardzo zadowolona z nauki jaką prowadzi z nią Pani Julka i nie wyobraża sobie mieć zajęć z kimś innym!",
          ]}
        />
      </Container>
    </>
  );
}
