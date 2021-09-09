import { VFC } from "react";
import { WriterIcon } from "../icon/WriterIcon";
import { TimeIcon } from "../icon/TimeIcon";
import { styled } from "src/styles/stitches.config";

type Props = {
  title: string;
  category: string;
  publishedAt: string;
  author: string;
};

export const TitleArea: VFC<Props> = (props) => {
  return (
    <div>
      <Title>{props.title}</Title>
      <Category>{props.category}</Category>
      <br />

      <Detail>
        <TimeIcon />
        <span>{props.publishedAt}</span>
      </Detail>

      <Detail>
        <WriterIcon />
        <span>{props.author}</span>
      </Detail>
    </div>
  );
};

const Title = styled("h1", {
  fontSize: "2rem",
});

const Category = styled("p", {
  color: "blue",
  fontSize: "20px",
  border: "1px solid blue",
  borderRadius: "0.2rem",
  display: "inline-block",
  padding: "0.2rem 0.5rem",
  margin: "1rem 0",
});

const Detail = styled("span", {
  "& svg": {
    verticalAlign: "text-bottom",
  },
  "& span": {
    fontSize: "20px",
    paddingLeft: "0.5rem",
  },
  "&:last-child": {
    paddingLeft: "1rem",
  },
});
