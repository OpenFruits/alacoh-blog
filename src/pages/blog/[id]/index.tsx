import Image from "next/image";
import { client } from "src/libs/client";
import { formatDate } from "src/libs/formatDate";
import { BaseLayout } from "src/components/layout/BaseLayout";
import { TitleArea } from "src/components/article/TitleArea";
import { Body } from "src/components/article/Body";
import { Breadcrumb } from "src/components/article/Breadcrumb";
import { BlogListResponse, BlogResponse } from "src/types/blog";
import { GetStaticPropsContext, NextPage } from "next";

const BlogId: NextPage<{ blog: BlogResponse }> = ({ blog }) => {
  return (
    <BaseLayout>
      <Image src={blog.ogimage.url} alt="Picture" width={768} height={400} />

      <Breadcrumb category={blog.category.name} />

      <TitleArea
        title={blog.title}
        category={blog.category.name}
        publishedAt={formatDate(blog.publishedAt)}
        author={blog.writer.name}
      />

      <Body html={blog.body} />
    </BaseLayout>
  );
};

export default BlogId;

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data: BlogListResponse = await client.get({ endpoint: "articles" });

  const paths = data.contents.map(
    (content: BlogResponse) => `/blog/${content.id}`
  );
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id as string;
  const data: BlogResponse = await client.get({
    endpoint: "articles",
    contentId: id,
  });

  return {
    props: {
      blog: data,
    },
  };
};
