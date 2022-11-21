import { Header } from "../Header";
import { Body } from "../Body";
import type { PropsWithChildren } from "react";
import { Footer } from "../Footer";
import { LayoutWrapper } from "./Layout.styles";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <LayoutWrapper>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </LayoutWrapper>
  );
};

export { Layout };
