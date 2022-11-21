import HeroBackground from "../../../../components/Assets/svg/Hero";
import { HeroBadge, HeroWrapper } from "./Hero.styles";

const Hero = () => (
  <HeroWrapper>
    <HeroBackground />
    <HeroBadge>DeHouse</HeroBadge>
  </HeroWrapper>
);

export { Hero };
