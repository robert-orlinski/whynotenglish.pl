import { MainBanner } from "@/app/components/main-banner";
import { Container } from "@/components/custom/container";
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
      <Container className="flex justify-between gap-6">
        <article>
          <h2>Lorem ipsum dolor sit</h2>
          <p>
            Amet, consectetur adipiscing elit. Etiam auctor odio nec aliquam
            varius.
          </p>
          <Button asChild>
            <Link href="https://unsplash.com/photos/woman-in-white-coat-sitting-on-pathway-surrounded-by-trees-during-daytime-pgiAmBWBy4Y">
              Image from the right on Unsplash
            </Link>
          </Button>
        </article>
        <figure className="relative">
          <Image src="/images/woman.jpg" alt="Woman" fill />
        </figure>
      </Container>
    </>
  );
}
