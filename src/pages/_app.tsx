import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "../contexts/CartProvider";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "../storage";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
  const CartModalWithNoSSR = dynamic(() => import("../components/CartModal"), {
    ssr: false,
  });

  return (
    <Provider store={store}>
      <GlobalStyles />
      <ToastContainer />
      <CartProvider>
        <Header />
        <CartModalWithNoSSR />
        <Component {...pageProps} />
      </CartProvider>
      <Footer />
    </Provider>
  );
}

export default MyApp;
