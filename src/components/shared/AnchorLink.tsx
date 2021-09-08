import React, { VFC } from "react";
import Link from "next/link";

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
