"use client";

import styled from "styled-components";
import { rem } from "polished";
import { device, layout } from "../../variables";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${layout.contentMaxWidth};
  text-align: center;

  h2 {
    margin-bottom: ${rem("25px")};
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: ${rem("15px")};

    li {
      h4 {
        --width: ${rem("26px")};

        position: relative;
        margin-bottom: ${rem("20px")};
        text-transform: uppercase;
      }

      span {
        line-height: 1.5;
      }
    }
  }

  @media ${device.s} {
    text-align: left;

    ul {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: ${rem("35px")};

      li {
        h4 {
          padding-left: var(--width);

          &:before {
            position: absolute;
            top: ${rem("-2px")};
            left: 0;
            width: var(--width);
            content: "//";
          }
        }
      }
    }
  }

  @media ${device.m} {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
