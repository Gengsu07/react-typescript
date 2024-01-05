import { ReactNode } from "react";

type HeaderProps = {
  img: { src: string; alt: string };
  children: ReactNode;
};

const Header = ({ img, children }: HeaderProps) => {
  return (
    <header className="flex flex-col justify-center items-center">
      <img
        src={img.src}
        alt={img.alt}
        width={75}
        height={100}
        className="rounded-full border-2 border-white mb-5"
      />
      {children}
    </header>
  );
};
export default Header;
