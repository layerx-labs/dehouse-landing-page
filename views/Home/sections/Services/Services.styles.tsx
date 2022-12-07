import styled from "styled-components";
import tw from "../../../../components/tw";
import { BackgroundWrapper, SubTitle, Title } from "../../Home.styles";

const ServicesTitle = tw(Title)`services-title`;

const ServicesSubtitle = tw(SubTitle)`services-subtitle font-light`;

const ServicesInner = tw.div`services-inner min-w-full flex flex-wrap align-center items-stretch justify-center grow basis-0`;

const ServicesWrapperStyled = styled(BackgroundWrapper)`
  background: linear-gradient(
    0deg,
    var(--colors-background) 50%,
    var(--colors-c2-l) 100%
  );
`;

const ServicesWrapper = tw(
  ServicesWrapperStyled
)`services flex flex-col bg-c1 flex items-center justify-between`;

export { ServicesSubtitle, ServicesWrapper, ServicesInner, ServicesTitle };
