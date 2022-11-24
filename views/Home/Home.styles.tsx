import tw from "../../components/tw";
import { breakpoints } from "../../theme";
import styled from "styled-components";

const Title = tw.h2`text-5xl text-c1-l dark:text-c4-l mb-10 mt-10 flex justify-center font-bold leading-tight`;

const SubTitle = tw.h3`text-2xl text-c1-l dark:text-c4-l mb-10 flex justify-center font-bold leading-tight`;

const HomeSection = styled.div<{ height?: number; mHeight?: number }>`
  z-index: 9999;
  min-height: ${({ height }) => `${height ?? 30}rem`};
  @media (min-width: ${breakpoints.m}) {
    min-height: ${({ mHeight }) => `${mHeight ?? 25}rem`};
  }
`;

const BackgroundWrapper = styled(HomeSection)`
  position: relative;
  min-width: 100%;
`;

export { Title, SubTitle, BackgroundWrapper };
