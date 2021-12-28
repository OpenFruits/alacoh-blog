import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp = (props: AppProps) => {
  return (
    <>
      <Head>
        <title>Alacoh Blog</title>
        <meta name="description" content="Alacoh Blog" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <props.Component {...props.pageProps} />
    </>
  );
};
export default MyApp;
