import "../styles/global.css";
import "../styles/fontawesome";

import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
