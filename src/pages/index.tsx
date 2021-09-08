import type { GetStaticProps, NextPage } from "next";
import { BaseLayout } from "src/components/layout/BaseLayout";
import { BlogItem } from "src/components/molecules/BlogItem";
import { AnchorLink } from "src/components/shared/AnchorLink";
import { styled } from "src/styles/stitches.config";
import { client } from "../libs/client";

export const getStaticProps: GetStaticProps = async () => {
  const data: any = await client.get({
    endpoint: "articles",
  });

  return {
    props: {
      data,
    },
  };
};

const Home: NextPage<any> = (props) => {
  return (
    <BaseLayout>
      <List>
        {props.data.contents.map((blog: any) => (
          <li key={blog.id}>
            <AnchorLink href={`/blog/${blog.id}`}>
              <BlogItem blog={blog} />
            </AnchorLink>
          </li>
        ))}
      </List>
    </BaseLayout>
  );
};

export default Home;

const List = styled("ul", {
  "& li + li": {
    marginTop: "1rem",
  },
});
