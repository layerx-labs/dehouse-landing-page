"use client";

import styled from "styled-components";
import { rem } from "polished";
import { global, colors, layout, device } from "../../variables";

export const Wrapper = styled.footer`
  margin: 0 auto;
  margin: ${rem("80px")} auto ${rem("50px")} auto;
  max-width: ${layout.contentMaxWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${layout.sidePadding};

  div {
    &.social {
      order: 2;
    }

    &.back {
      order: 1;
      margin-bottom: ${rem("30px")};
    }
  }

  ul {
    --size: ${rem("30px")};
    margin-bottom: ${rem("15px")};
    display: flex;
    justify-content: center;

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
      margin-left: ${rem("5px")};
      width: auto;
      height: ${rem("20px")};
      fill: ${colors.white};
      transition-duration: ${global.hoverTransitionDuration};
    }
  }

  @media ${device.s} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    div {
      &.social {
        order: 1;

        span a {
          border-bottom: 1px solid ${colors.white};
          color: ${colors.white};
          text-decoration: none;
          transition-duration: ${global.hoverTransitionDuration};

          &:hover {
            border-color: ${colors.orange};
            color: ${colors.orange};
          }
        }
      }

      &.back {
        order: 2;
        margin-bottom: 0;
      }
    }

    ul {
      margin-bottom: ${rem("30px")};
      justify-content: left;
    }

    button {
      svg {
        margin-left: ${rem("20px")};
      }
    }
  }

  @media ${device.m} {
    margin: ${rem("150px")} auto ${rem("100px")} auto;
  }
`;
