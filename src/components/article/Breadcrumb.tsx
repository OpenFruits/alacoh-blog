import type { VFC } from "react";
import { AnchorLink } from "src/components/shared/AnchorLink";

type Props = {
  category: string;
};

export const Breadcrumb: VFC<Props> = (props) => {
  return (
    <p>
      <AnchorLink href="/">記事一覧</AnchorLink>
      <span>{` > `}</span>
      <AnchorLink href="/">{props.category}</AnchorLink>
    </p>
  );
};
