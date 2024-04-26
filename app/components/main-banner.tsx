type Props = {
  title: {};
  subtitle: string;
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
};

const MainBanner = ({ title, subtitle, buttons }: Props) => {
  return (
    <header className="flex justify-center py-0">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
      </div>
    </header>
  );
};

export { MainBanner };
