import { VFC } from "react";
import Link from "next/link";
import { client } from "src/libs/client";
import { formatDate } from "src/libs/formatDate";

const BlogId: VFC<any> = ({ blog }) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{formatDate(blog.publishedAt)}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
      <Link href="/">
        <a>ホーム</a>
      </Link>
    </main>
  );
};

export default BlogId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data: any = await client.get({ endpoint: "articles" });

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
