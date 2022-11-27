"use client";

import styled from "styled-components";
import { rem } from "polished";
import { layout, colors } from "../../variables";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${layout.contentMaxWidth};
  text-align: center;
  text-transform: uppercase;

  > h2 {
    margin-bottom: ${rem("15px")};
  }

  button {
    background: linear-gradient(
      90.69deg,
      ${colors.yellow} 0%,
      ${colors.pink} 100%
    );
    padding: ${rem("10px")} ${rem("50px")};
    text-transform: uppercase;

    span {
      font-weight: 600;
      font-size: ${rem("46px")};
      color: ${colors.black};
      letter-spacing: ${rem("6.4px")};
    }
  }

  address {
    margin: ${rem("150px")} 0 ${rem("30px")} 0;
    font-size: ${rem("20px")};
    font-style: normal;

    ul {
      li:not(:last-child) {
        margin-bottom: ${rem("5px")};
      }
    }
  }
`;

export const Map = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    width: auto;
    height: ${rem("60px")};
  }

  img {
    width: 100%;
    height: auto;
  }
`;
