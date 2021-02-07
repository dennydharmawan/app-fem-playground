import "../styles/global.css";

import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import { useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import MediaQueryHelper from "../components/MediaQueryHelper";
import theme from "../constants/theme";
import SEO from "../next-seo.config";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        {process.env.NODE_ENV === 'development' && <MediaQueryHelper />}
        <NextNprogress
          color="#fff"
          options={{ minimum: 0.3, easing: 'ease', speed: 800 }}
        />
      </ThemeProvider>
    </>
  );
};

export default App;
