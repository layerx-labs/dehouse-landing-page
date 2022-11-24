import HeroBackground from "../../../../components/Backgrounds/Hero";
import { HeroBadge, HeroMotto, HeroTitle, HeroWrapper } from "./Hero.styles";

const Hero = () => (
  <HeroWrapper>
    <HeroBackground />
    <HeroBadge>
      <HeroTitle>DeHouse</HeroTitle>
      <HeroMotto>Your web3 hub</HeroMotto>
    </HeroBadge>
  </HeroWrapper>
);

export { Hero };
