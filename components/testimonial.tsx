import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import { ImageBase } from "@/types/image-base";
import { H2, Text } from "./typography";

interface Props {
  avatar: ImageBase;
  name: string;
  description: string[];
}

const Testimonial = ({ avatar, name, description }: Props) => {
  return (
    <figure className="rounded-2xl px-6 py-8 shadow-2xl lg:px-8 lg:py-10">
      <header className="flex items-center">
        <Avatar className="mr-3">
          <AvatarImage src={avatar.src} />
          <AvatarFallback>{avatar.alt}</AvatarFallback>
        </Avatar>
        <H2 className="text-xl font-semibold md:text-xl lg:text-xl">{name}</H2>
      </header>
      <article className="prose mt-4 max-w-full leading-normal">
        {description.map((p) => (
          <Text size="sm" key={p.slice(0, 20)}>
            {p}
          </Text>
        ))}
      </article>
    </figure>
  );
};

export { Testimonial };
