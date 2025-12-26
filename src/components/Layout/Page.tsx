import { NextPage } from 'next';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

const Page: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>'Yamini Coen - Communications, Public Relations and Social Media Strategy'</title>
        <meta content="Yamini Coen - Communications, Public Relations and Social Media Strategy" name="description" />

        <link href="/favicon.ico" rel="icon" />
        <link href="/site.webmanifest" rel="manifest" />

        <meta content="Yamini Coen - Communications, Public Relations and Social Media Strategy" property="og:title" />
        <meta
          content="Yamini Coen - Communications, Public Relations and Social Media Strategy"
          property="og:description"
        />

        <meta content="Yamini Coen - Communications, Public Relations and Social Media Strategy" name="twitter:title" />
        <meta
          content="Yamini Coen - Communications, Public Relations and Social Media Strategy"
          name="twitter:description"
        />
      </Head>
      {children}
    </>
  );
};

Page.displayName = 'Page';
export default Page;
