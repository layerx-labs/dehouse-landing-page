import tw from "../../../../components/tw";
import { BackgroundWrapper } from "../../Home.styles";
const HeroBadge = tw.span`lightable light-hoverable inline-block p-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-c2 text-white rounded z-[999999] font-bold text-8xl md-max:text-5xl text-c1-l dark:text-c4-l leading-tight`;

const HeroWrapper = tw(
  BackgroundWrapper
)`about flex flex-col align-center items-center justify-center grow`;

export { HeroBadge, HeroWrapper };
