"use client";

import styled from "styled-components";
import { rem } from "polished";
import { device } from "../../variables";

export const Wrapper = styled.div`
  margin: ${rem("80px")} 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${rem("20px")};
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
    width: ${rem("20px")};
  }

  div {
    display: flex;
    align-items: center;

    > div {
      position: relative;
      overflow: hidden;

      &.circle {
        border-radius: 999px;
        min-width: ${rem("200px")};
        height: 100%;
        min-height: ${rem("200px")};
        max-height: ${rem("200px")};
      }

      &.rectangle-h {
        min-width: ${rem("233px")};
        height: 100%;
        min-height: ${rem("150px")};
        max-height: ${rem("150px")};
      }

      &.rectangle-v {
        border-radius: ${rem("20px")};
        min-width: ${rem("150px")};
        height: 100%;
        min-height: ${rem("233px")};
        max-height: ${rem("233px")};
      }

      &.square {
        min-width: ${rem("150px")};
        height: 100%;
        min-height: ${rem("150px")};
        max-height: ${rem("150px")};
      }

      img {
        object-fit: cover;
      }
    }
  }

  @media ${device.m} {
    margin: ${rem("150px")} 0;
    grid-gap: ${rem("50px")};

    div > div {
      &.circle {
        min-width: ${rem("300px")};
        min-height: ${rem("300px")};
        max-height: ${rem("300px")};
      }

      &.rectangle-h {
        min-width: ${rem("333px")};
        min-height: ${rem("250px")};
        max-height: ${rem("250px")};
      }

      &.rectangle-v {
        border-radius: ${rem("30px")};
        min-width: ${rem("250px")};
        min-height: ${rem("333px")};
        max-height: ${rem("333px")};
      }

      &.square {
        min-width: ${rem("250px")};
        min-height: ${rem("250px")};
        max-height: ${rem("250px")};
      }
    }
  }
`;
