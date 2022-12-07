import tw from "../../../../components/tw";
import { BackgroundWrapper } from "../../Home.styles";

const HeroMotto = tw.span`font-regular mt-2 text-5xl md-max:text-2xl text-c2-l dark:text-c3-l leading-tight`;
const HeroTitle = tw.div`font-bold text-8xl md-max:text-5xl text-c1-l dark:text-c4-l leading-tight`;
const HeroBadge = tw.div`lightable light-hoverable inline-block p-[1.5rem] leading-none text-center whitespace-nowrap align-baseline bg-c2 rounded z-[999999]`;

const HeroWrapper = tw(
  BackgroundWrapper
)`about flex flex-col align-center items-center justify-center grow`;

export { HeroBadge, HeroWrapper, HeroMotto, HeroTitle };
