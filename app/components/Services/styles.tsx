"use client";

import styled from "styled-components";
import { rem } from "polished";
import { layout } from "../../variables";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${layout.contentMaxWidth};

  h2 {
    margin-bottom: ${rem("50px")};
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${rem("35px")};

    li {
      h3 {
        --width: ${rem("26px")};

        position: relative;
        margin-bottom: ${rem("20px")};
        padding-left: var(--width);

        &:before {
          position: absolute;
          top: ${rem("-2px")};
          left: 0;
          width: var(--width);
          content: "//";
        }
      }
    }
  }
`;
