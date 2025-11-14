import type {AppProps} from 'next/app';
import {memo, ReactElement} from 'react';

import '98.css';
import '../globalStyles.scss';

const MyApp = memo(({Component, pageProps}: AppProps): ReactElement => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
