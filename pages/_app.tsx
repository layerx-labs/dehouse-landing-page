import { ThemeProvider } from "next-themes";

import "../styles/app.css";
import Head from "next/head";
import { space } from "../styles/fonts";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute={"class"}>
      <Head>
        <title>DeHouse - Your Web3 Hub</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="DeHouse is your first crypto hub in Portugal. Join us and lets build web3 together"
        />
      </Head>
      <span className={space.className}>
        <Component {...pageProps} />
      </span>
    </ThemeProvider>
  );
}

export default App;
