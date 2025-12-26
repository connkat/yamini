import { NextPage } from 'next';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

import { HomepageMeta } from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        <link href="/favicon.ico" rel="icon" />
        <link href="/site.webmanifest" rel="manifest" />

        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />

        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      {children}
    </>
  );
};

Page.displayName = 'Page';
export default Page;
