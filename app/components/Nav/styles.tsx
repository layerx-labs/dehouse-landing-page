"use client";

import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.nav`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: ${rem("50px")};

  > div {
    height: ${rem("30px")};

    &.logo {
      height: 0;
      overflow: hidden;

      svg {
        width: auto;
        height: ${rem("30px")};
      }
    }

    &.actions {
      button {
        margin-top: ${rem("3px")};
        height: ${rem("24px")};
        opacity: 0.3;

        &:hover {
          opacity: 1;
        }

        svg {
          width: auto;
          height: ${rem("24px")};
        }
      }
    }
  }
`;
