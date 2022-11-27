"use client";

import styled from "styled-components";
import { rem } from "polished";
import { global, colors, layout } from "../../variables";

export const Wrapper = styled.footer`
  margin: 0 auto;
  margin: ${rem("150px")} auto ${rem("100px")} auto;
  max-width: ${layout.contentMaxWidth};
  display: flex;
  justify-content: space-between;

  ul {
    --size: ${rem("30px")};
    margin-top: ${rem("30px")};
    display: flex;

    li {
      width: var(--size);
      height: var(--size);

      &:not(:last-child) {
        margin-right: ${rem("15px")};
      }

      a {
        width: var(--size);
        height: var(--size);

        svg {
          width: auto;
          height: var(--size);
          fill: ${colors.white};
          transition-duration: ${global.hoverTransitionDuration};
        }
      }
    }
  }

  span {
    font-size: ${rem("14px")};
    color: ${colors.white};
    transition-duration: ${global.hoverTransitionDuration};
  }

  a,
  button {
    &:hover {
      span {
        color: ${colors.orange};
      }

      svg {
        fill: ${colors.orange};
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      text-transform: uppercase;
      letter-spacing: ${rem("1px")};
    }

    svg {
      margin-left: ${rem("20px")};
      width: auto;
      height: ${rem("20px")};
      fill: ${colors.white};
      transition-duration: ${global.hoverTransitionDuration};
    }
  }
`;
