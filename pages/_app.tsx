import React from "react";
import type { AppProps } from "next/app";
import { Provider as ReduxStoreProvider } from "react-redux";
import store from "src/redux/store";
import "styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ReduxStoreProvider store={store}>
        <Component {...pageProps} />
      </ReduxStoreProvider>
    </React.Fragment>
  );
}

export default MyApp;
