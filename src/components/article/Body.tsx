import React, { VFC } from "react";

type Props = {
  html: string;
};

export const Body: VFC<Props> = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `${props.html}`,
      }}
    />
  );
};
