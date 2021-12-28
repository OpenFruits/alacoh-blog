import Link from "next/link";
import type { VFC } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const AnchorLink: VFC<Props> = (props) => {
  return (
    <Link href={props.href}>
      <a>{props.children}</a>
    </Link>
  );
};
