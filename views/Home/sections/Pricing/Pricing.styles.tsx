import styled from "styled-components";
import tw from "../../../../components/tw";
import { BackgroundWrapper, SubTitle, Title } from "../../Home.styles";

const PricingTitle = tw(Title)`pricing-title`;

const PricingSubtitle = tw(SubTitle)`pricing-subtitle font-light`;

const PricingDaily = tw.p`pricing-daily mt-4 mb-4`;

const PricingInner = tw.div`pricing-inner min-w-full flex flex-wrap align-center items-center justify-center`;

const PricingWrapperStyled = styled(BackgroundWrapper)`
  background: linear-gradient(
    180deg,
    var(--colors-background) 50%,
    var(--colors-c2-l) 100%
  );
`;

const PricingWrapper = tw(
  PricingWrapperStyled
)`pricing flex flex-col p-[5%] py-2 bg-c1 flex items-center justify-between`;

export {
  PricingTitle,
  PricingSubtitle,
  PricingInner,
  PricingDaily,
  PricingWrapper,
};
