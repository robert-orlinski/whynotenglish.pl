import { ImageBase } from "@/types/image-base";
import Image from "next/image";
import { H3, Text } from "./typography";

interface Props {
  image: ImageBase;
  title: string;
  description: string;
}

const SmallBlock = ({ image, title, description }: Props) => {
  return (
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
      <div className="hidden md:block">
        <Image
          width={320}
          height={240}
          src={image.src}
          alt={image.alt}
          className="h-[240px] rounded-2xl object-cover"
        />
      </div>
      <div className="space-y-4">
        <H3>{title}</H3>
        <Text size="lg">{description}</Text>
      </div>
    </div>
  );
};
export { SmallBlock };
