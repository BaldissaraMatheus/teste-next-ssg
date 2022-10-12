import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"></link>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
