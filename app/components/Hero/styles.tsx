"use client";

import styled from "styled-components";
import { rem } from "polished";
import { colors, layout, typography } from "../../variables";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${layout.contentMaxWidth};
  padding-top: ${rem("80px")};

  > svg {
    margin-left: -6.5%;
    width: 113%;
    height: auto;
  }

  h1 {
    margin-top: ${rem("-55px")};
    text-align: center;
  }

  p {
    font-size: ${rem("36px")};
    letter-spacing: ${rem("1px")};
    line-height: 1.35;
  }
`;

export const PoweredBy = styled.div`
  margin: ${rem("110px")} 0;
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
`;
