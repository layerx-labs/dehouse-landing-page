import type { PropsWithChildren } from "react";
import { BodyWrapper } from "./Body.styles";

const Body = ({ children }: PropsWithChildren<{}>) => (
  <BodyWrapper>{children}</BodyWrapper>
);

export { Body };
