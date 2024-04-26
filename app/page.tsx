import { MainBanner } from "@/app/components/main-banner";

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
    </>
  );
}
