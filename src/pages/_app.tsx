import Head from "next/head";
import "../../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Project HeartCode is a community service project organised by Singapore Management University, School of Computing and Information Systems. Project HeartCode serves to provide less privileged youths the opportunity to explore their interest in IT through solving real world problems with IT innovations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
