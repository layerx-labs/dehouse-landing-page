"use client";

import styled from "styled-components";
import { rem } from "polished";
import { colors, device, layout } from "../../variables";

export const Wrapper = styled.div`
  margin: ${rem("80px")} auto;
  max-width: ${layout.contentMaxWidth};

  > h2 {
    margin-bottom: ${rem("50px")};
    text-align: center;
  }

  @media ${device.m} {
    margin: ${rem("150px")} auto;
  }
`;

export const Packs = styled.div`
  position: relative;
  z-index: 1;

  @media ${device.s} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${rem("25px")};
    grid-row-gap: ${rem("45px")};
  }

  @media ${device.m} {
    grid-column-gap: ${rem("50px")};
    padding-left: ${rem("15px")};
  }

  @media ${device.l} {
    grid-gap: ${rem("90px")};
    padding-left: 0;
  }
`;

export const Pack = styled.div`
  position: relative;
  margin-left: ${rem("20px")};
  border: ${rem("1px")} solid ${colors.white};
  background-color: var(--background-color);
  width: calc(100% - ${rem("30px")});
  padding: ${rem("25px")} ${rem("20px")};

  &:not(:last-child) {
    margin-bottom: ${rem("45px")};
  }

  &:after {
    content: "";
    position: absolute;
    top: ${rem("15px")};
    left: ${rem("-15px")};
    border: ${rem("1px")} solid ${colors.white};
    background-color: var(--background-color);
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  ul {
    margin-top: ${rem("10px")};
    font-size: ${rem("20px")};
    text-transform: uppercase;
    letter-spacing: ${rem("2px")};

    li:not(:last-child) {
      margin-bottom: ${rem("4px")};
    }
  }

  span {
    display: inline-block;
    margin-top: ${rem("30px")};
  }

  @media ${device.s} {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media ${device.m} {
    margin-left: 0;
    width: inherit;
    height: inherit;
  }

  @media ${device.l} {
    padding: ${rem("50px")} ${rem("65px")};
  }
`;

export const Fold = styled.div`
  position: absolute;
  top: ${rem("-1px")};
  right: ${rem("-1px")};
  width: 0;
  height: 0;
  border-width: ${rem("40px")} 0 0 ${rem("40px")};
  border-style: solid;
  border-color: var(--background-color) transparent transparent ${colors.white};
`;
