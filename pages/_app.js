import React from 'react';
import Head from 'next/head';
import '../src/app/globals.css';

// Import the CSS files for the Google Fonts
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-rajdhani';

function App({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>bitbox</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
  
export default App;