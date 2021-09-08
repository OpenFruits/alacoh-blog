import { VFC } from "react";
import Image from "next/image";
import { formatDate } from "src/libs/formatDate";
import { styled } from "src/styles/stitches.config";
import { WriterIcon } from "../icon/WriterIcon";
import { TimeIcon } from "../icon/TimeIcon";

type Props = {
  blog: any;
};

export const BlogItem: VFC<Props> = (props) => {
  const { blog } = props;

  return (
    <Container>
      <div>
        <Image src={blog.ogimage.url} alt="Picture" width={340} height={180} />
      </div>
      <div>
        <h2>{blog.title}</h2>

        <Category>{blog.category.name}</Category>

        <Detail>
          <TimeIcon />
          <span>{formatDate(blog.publishedAt)}</span>
        </Detail>

        <SpaceY />

        <Detail>
          <WriterIcon />
          <span>{blog.writer.name}</span>
        </Detail>
      </div>
    </Container>
  );
};

const Container = styled("div", {
  paddingY: "1rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  display: "flex",

  "&:hover": {
    backgroundColor: "$gray4",
  },

  "& div:last-child": {
    marginLeft: "2rem",
  },
});

const Category = styled("p", {
  color: "blue",
  border: "1px solid blue",
  borderRadius: "0.2rem",
  display: "inline-block",
  padding: "0.2rem 0.5rem",
  margin: "1rem 0",
});

const Detail = styled("p", {
  "& svg": {
    verticalAlign: "text-bottom",
  },
  "& span": {
    fontSize: "16px",
    paddingLeft: "0.5rem",
  },
});

const SpaceY = styled("div", {
  paddingY: "0.2rem",
});
