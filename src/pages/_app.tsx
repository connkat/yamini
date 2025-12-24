import type { AppProps } from 'next/app';
import { ReactElement } from 'react';

import '98.css';
import '../globalStyles.scss';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
