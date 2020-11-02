import "../styles/reset.css";
import "../styles/globals.css";
import SiteLayout from "../layouts/site-layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Head>
        <title>The Innov Bros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </SiteLayout>
  );
}

export default MyApp;
