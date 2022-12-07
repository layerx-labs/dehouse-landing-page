import tw from "../../../../components/tw";
import { BackgroundWrapper } from "../../Home.styles";

const AboutContent = tw.div`about-content text-justify leading-tight`;

const AboutTitle = tw.h3`about-title flex justify-center font-bold leading-tight text-2xl mb-8`;

const AboutInner = tw.div`about-inner lightable light-hoverable p-[5%] my-[15%] mx-[10%] max-w-[65rem] bg-c1 rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-lg`;

const AboutWrapper = tw(
  BackgroundWrapper
)`about flex flex-col align-center items-center justify-center grow`;

export { AboutContent, AboutInner, AboutTitle, AboutWrapper };
