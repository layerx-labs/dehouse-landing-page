"use client";

import styled from "styled-components";
import { rem } from "polished";
import { colors, device, layout } from "../../variables";

export const Wrapper = styled.div`
  max-width: ${layout.contentMaxWidth};

  > h2 {
    margin-bottom: ${rem("50px")};
    text-align: center;
  }
`;

export const Benefits = styled.div`
  position: relative;

  > div {
    background-color: ${colors.white};
    padding: ${rem("20px")};
    color: ${colors.black};

    &:not(:last-child) {
      margin-bottom: ${rem("15px")};
    }

    span {
      font-size: ${rem("20px")};
    }

    h3 {
      margin: ${rem("5px")} 0 ${rem("30px")} 0;
    }
  }

  @media ${device.s} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: ${rem("5px")};

    > div {
      &:not(:last-child) {
        margin-bottom: 0;
      }

      &:first-child {
        grid-column: 1 / 4;
        grid-row: 1 / 2;
      }

      &:nth-child(2) {
        grid-column: 4 / 7;
        grid-row: 1 / 2;
      }

      &:nth-child(3) {
        grid-column: 1 / 7;
        grid-row: 2 / 3;
      }

      &:nth-child(4) {
        grid-column: 1 / 4;
        grid-row: 3 / 4;
      }

      &:last-child {
        grid-column: 4 / 7;
        grid-row: 3 / 4;
      }
    }
  }

  @media ${device.m} {
    > div {
      &:first-child {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
      }

      &:nth-child(2) {
        grid-column: 3 / 5;
        grid-row: 1 / 2;
      }

      &:nth-child(3) {
        grid-column: 5 / 7;
        grid-row: 1 / 2;
      }

      &:nth-child(4) {
        grid-column: 1 / 4;
        grid-row: 2 / 3;
      }

      &:last-child {
        grid-column: 4 / 7;
        grid-row: 2 / 3;
      }
    }
  }
  @media ${device.l} {
    > div {
      padding: ${rem("50px")};
    }
  }
`;
