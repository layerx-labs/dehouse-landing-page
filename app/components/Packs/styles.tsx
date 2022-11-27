"use client";

import styled from "styled-components";
import { rem } from "polished";
import { colors, layout } from "../../variables";

export const Wrapper = styled.div`
  margin: ${rem("150px")} auto;
  max-width: ${layout.contentMaxWidth};

  > h2 {
    margin-bottom: ${rem("50px")};
    text-align: center;
  }
`;

export const Packs = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${rem("90px")};
  z-index: 1;
`;

export const Pack = styled.div`
  position: relative;
  border: ${rem("1px")} solid ${colors.white};
  background-color: var(--background-color);
  padding: ${rem("50px")} ${rem("65px")};

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
