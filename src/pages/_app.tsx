import "@/styles/globals.css";
import "../assets/styles/carousel.css";
import "../components/widgets/Sidebar.css";
import "../components/widgets/Weaning.css";

import type { AppProps } from "next/app";
import RecoilContextProvider from "@/components/common/RecoilContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilContextProvider>
      <Component {...pageProps} />
    </RecoilContextProvider>
  );
}
