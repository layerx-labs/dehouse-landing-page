import Link from "next/link";
import { ThemeToggle } from "../../components/ThemeToggle";
import { HeaderLink, HeaderLogo, HeaderWrapper } from "./Header.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href={"/"}>
        <HeaderLogo>DeHouse</HeaderLogo>
      </Link>
      <div className="flex-1 flex justify-center">
        <div className="w-[100%] max-w-[35rem] bg-c1 flex justify-evenly">
          <HeaderLink aria-label="about" href={"/#about"}>
            About
          </HeaderLink>
          <HeaderLink aria-label="services" href={"/#services"}>
            Services
          </HeaderLink>
          <HeaderLink aria-label="space" href={"/#space"}>
            Space
          </HeaderLink>
          <HeaderLink aria-label="packs" href={"/#packs"}>
            Packs
          </HeaderLink>
        </div>
      </div>
      <ThemeToggle />
    </HeaderWrapper>
  );
};

export { Header };
