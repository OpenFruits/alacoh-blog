import { VFC } from "react";
import Link from "next/link";
import { client } from "src/libs/client";
import { formatDate } from "src/libs/formatDate";
import { BaseLayout } from "src/components/layout/BaseLayout";

const BlogId: VFC<any> = ({ blog }) => {
  return (
    <BaseLayout>
      <h1>{blog.title}</h1>
      <p>{formatDate(blog.publishedAt)}</p>
      <p>{blog.category.name}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
      <p>{blog.writer.name}</p>
      <Link href="/">
        <a>記事一覧へ</a>
      </Link>
    </BaseLayout>
  );
};

export default BlogId;

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data: any = await client.get({ endpoint: "articles" });

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
