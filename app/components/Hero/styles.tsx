"use client";

import styled from "styled-components";
import { rem } from "polished";
import { colors, device, layout, typography } from "../../variables";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${layout.contentMaxWidth};
  padding: ${rem("40px")} ${layout.sidePadding} 0 ${layout.sidePadding};
  text-align: center;

  > svg {
    width: 85%;
    height: auto;
  }

  p {
    font-size: ${rem("26px")};
    letter-spacing: ${rem("1px")};
    line-height: 1.35;
  }

  @media ${device.s} {
    h1 {
      margin-top: -3vw;
    }
  }

  @media ${device.m} {
    padding-top: ${rem("80px")};

    p {
      font-size: ${rem("36px")};
    }
  }

  @media ${device.l} {
    > svg {
      margin-left: -6.5%;
      width: 113%;
    }

    h1 {
      font-size: ${rem("45.8px")};
    }
  }
`;

export const PoweredBy = styled.div`
  margin: ${rem("50px")} 0;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin: 0 ${rem("20px")};
    color: ${colors.orange};
    font-size: ${rem("20px")};
    font-weight: ${typography.fontWeigthSemiBold};
    line-height: 1;
  }

  svg {
    &.taikai {
      width: auto;
      height: ${rem("30px")};
    }

    &.work-in {
      width: auto;
      height: ${rem("50px")};
    }
  }

  @media ${device.m} {
    margin: ${rem("110px")} 0;
  }
`;
