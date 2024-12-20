import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>GilliozDreamLabs | Where your vision  becomes reality </title>
        <meta name="description" content="Tired of juggling multiple tools and missing opportunities? Quantboost's custom Notion solutions centralize your workflow, boost productivity, and drive growth. Say goodbye to scattered information and hello to a unified workspace." />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
        <div className="min-h-screen flex flex-col bg-[#FAF8FF]">
          <Component {...pageProps} />
        </div>
    </Fragment>
  );
}

export default MyApp;