import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
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
  console.log(props.data.contents);

  return (
    <div>
      <main>
        <ul>
          {props.data.contents.map((blog: any) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
