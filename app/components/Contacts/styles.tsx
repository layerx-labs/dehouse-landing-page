"use client";

import styled from "styled-components";
import { rem } from "polished";
import { layout, colors, global } from "../../variables";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${layout.contentMaxWidth};
  text-align: center;
  text-transform: uppercase;

  > h2 {
    margin-bottom: ${rem("15px")};
  }

  > a {
    background: linear-gradient(
      90deg,
      ${colors.yellow} 0%,
      ${colors.pink} 100%
    );
    padding: 0 ${rem("50px")};
    font-weight: 600;
    font-size: ${rem("46px")};
    color: ${colors.black};
    letter-spacing: ${rem("6.4px")};
    text-transform: uppercase;
    text-decoration: none;
    transition-duration: ${global.hoverTransitionDuration};

    &:hover {
      color: ${colors.white};
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
  a {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      position: absolute;
      width: auto;
      height: ${rem("60px")};
      fill: ${colors.orange};
      transition-duration: ${global.hoverTransitionDuration};
    }

    img {
      width: 100%;
      height: auto;
    }

    &:hover {
      svg {
        --shadow: 0 0 20px rgba(0, 0, 0, 0.9);

        height: ${rem("70px")};
        filter: drop-shadow(var(--shadow));
        -webkit-filter: drop-shadow(var(--shadow));
        -moz-filter: drop-shadow(var(--shadow));
        -ms-filter: drop-shadow(var(--shadow));
        -o-filter: drop-shadow(var(--shadow));
      }
    }
  }
`;
