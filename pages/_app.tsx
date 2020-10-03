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
      </Head>
      <Reset />
      <Fonts />
      <Component {...pageProps} />
    </>
  );
}

export default DocumentExplorer;
