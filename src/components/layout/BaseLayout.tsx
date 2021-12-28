import type { ReactNode, VFC } from "react";
import { styled } from "src/styles/stitches.config";

import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const BaseLayout: VFC<Props> = (props) => {
  return (
    <Container>
      <Header />
      <SpaceY />
      <Main>{props.children}</Main>
      <SpaceY />
      <Footer />
    </Container>
  );
};

const Container = styled("div", {
  minHeight: "100vh",
  position: "relative",
});

const Main = styled("main", {
  display: "grid",
  gap: "2rem",
  paddingY: "2rem",
  marginX: "auto",
  marginBottm: "2rem",
  maxWidth: "768px",
});

// footerがfixedのため余白を取る
const SpaceY = styled("div", {
  paddingY: "3rem",
});
