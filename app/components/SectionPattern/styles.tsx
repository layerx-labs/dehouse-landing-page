"use client";

import styled from "styled-components";
import { rem } from "polished";
import { layout, colors } from "../../variables";

export const Wrapper = styled.div`
  margin-bottom: ${rem("150px")};
  border: 0;
  border-top-width: ${rem("1px")};
  border-bottom-width: ${rem("1px")};
  border-style: solid;
  border-color: ${colors.grey};
  background-image: url("/pattern.svg");
  background-repeat: repeat;
  background-size: ${rem("800px")};
  background-position: center;
  padding: ${rem("150px")} 0;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${layout.contentMaxWidth};
`;
