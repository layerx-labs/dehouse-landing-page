import tw from "../../../../components/tw";
import { BackgroundWrapper, SubTitle, Title } from "../../Home.styles";

const SpaceTitle = tw(Title)`space-title`;

const SpaceSubtitle = tw(SubTitle)`space-subtitle font-light`;

const SpaceDescription = tw.div`space-description text-c1-l dark:text-c4-l p-[5%] max-w-[65rem] text-justify leading-tight`;

const SpaceDescriptionInit = tw.b`text-c4 text-font`;

const SpaceInner = tw.div`space-inner min-w-full flex flex-wrap align-center items-center justify-center`;

const SpaceWrapperStyled = tw(BackgroundWrapper)`bg-c2`;

const SpaceWrapper = tw(
  SpaceWrapperStyled
)`space flex flex-col p-[5%] flex items-center justify-between`;

export {
  SpaceTitle,
  SpaceDescription,
  SpaceDescriptionInit,
  SpaceWrapper,
  SpaceInner,
  SpaceSubtitle,
};
