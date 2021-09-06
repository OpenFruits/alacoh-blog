import { VFC, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const BaseLayout: VFC<Props> = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
