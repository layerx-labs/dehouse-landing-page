"use client";

import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.div`
  margin: ${rem("150px")} 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${rem("50px")};
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  &::-webkit-scrollbar {
    display: none;
  }

  &:before,
  &:after {
    content: "";
    width: ${rem("15px")};
  }

  div {
    display: flex;
    align-items: center;

    > div {
      position: relative;
      overflow: hidden;

      &.circle {
        border-radius: 999px;
        min-width: ${rem("300px")};
        height: 100%;
        min-height: ${rem("300px")};
        max-height: ${rem("300px")};
      }

      &.rectangle-h {
        min-width: ${rem("333px")};
        height: 100%;
        min-height: ${rem("250px")};
        max-height: ${rem("250px")};
      }

      &.rectangle-v {
        border-radius: ${rem("30px")};
        min-width: ${rem("250px")};
        height: 100%;
        min-height: ${rem("333px")};
        max-height: ${rem("333px")};
      }

      &.square {
        min-width: ${rem("250px")};
        height: 100%;
        min-height: ${rem("250px")};
        max-height: ${rem("250px")};
      }

      img {
        object-fit: cover;
      }
    }
  }
`;
