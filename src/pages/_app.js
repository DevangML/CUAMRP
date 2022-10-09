import { SessionProvider } from 'next-auth/react';
import { Provider } from "react-redux";
import { store } from '../app/store';
import "react-toastify/dist/ReactToastify.css";
import "../../styles/custom.css";

import StorageService from "../services/StorageService";
import { ToastContainer, Zoom } from "react-toastify";
import { hydrate } from "../slices/basketSlice";
import Header from './components/common/Header';
import LeftNavbar from './components/common/LeftNavbar';
import { ThemeProvider, CssBaseline } from '@mui/material';
import lightTheme from '../../styles/theme/lightTheme';
import '../../styles/globals.css';
import '../../styles/chatbox.css';

store.subscribe(() => {
  StorageService.set("basket", JSON.stringify(store.getState().basket));
});

let basket = StorageService.get("basket");
basket = basket ? JSON.parse(basket) : { items: [] };
store.dispatch(hydrate(basket));

function MyApp(props) {
  const { Component, pageProps: { session, ...pageProps } } = props;
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <SessionProvider session={session}>
        <Provider store={store}>
          <Header />
          <LeftNavbar />
          <Component {...pageProps} />
          <ToastContainer transition={Zoom} />
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
