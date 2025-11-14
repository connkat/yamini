import type {AppProps} from 'next/app';
import {memo} from 'react';

import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
