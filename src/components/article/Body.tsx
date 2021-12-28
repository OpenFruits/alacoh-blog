import type { VFC } from "react";

type Props = {
  html: string;
};

export const Body: VFC<Props> = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        // eslint-disable-next-line @typescript-eslint/naming-convention
        __html: `${props.html}`,
      }}
    />
  );
};
