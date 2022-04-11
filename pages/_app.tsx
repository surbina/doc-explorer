import { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import Fonts from 'src/styled/Fonts';
import Reset from 'src/styled/Reset';

function DocumentExplorer({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Document explorer</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css"
        />
      </Head>
      <Reset />
      <Fonts />
      <a
        className="github-fork-ribbon left-bottom fixed"
        href="https://github.com/surbina/resto-explorer"
        data-ribbon="Fork me on GitHub"
        title="Fork me on GitHub"
        target="_blank"
        rel="noreferrer">
        Fork me on GitHub
      </a>
      <Component {...pageProps} />
    </>
  );
}

export default DocumentExplorer;
