import type { GetStaticProps, NextPage } from "next";
import { BaseLayout } from "src/components/layout/BaseLayout";
import { BlogItem } from "src/components/molecules/BlogItem";
import { AnchorLink } from "src/components/shared/AnchorLink";
import { styled } from "src/styles/stitches.config";
import type { BlogListResponse, BlogResponse } from "src/types/blog";

import { client } from "../libs/client";

export const getStaticProps: GetStaticProps = async () => {
  const data: BlogListResponse = await client.get({
    endpoint: "articles",
  });

  return {
    props: {
      data,
    },
  };
};

const Home: NextPage<{ data: BlogListResponse }> = (props) => {
  const { contents, totalCount } = props.data;

  return (
    <BaseLayout>
      <List>
        <p>{`記事一覧:${totalCount}件`}</p>
        {contents?.map((blog: BlogResponse) => {
          return (
            <li key={blog.id}>
              <AnchorLink href={`/blog/${blog.id}`}>
                <BlogItem blog={blog} />
              </AnchorLink>
            </li>
          );
        })}
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
