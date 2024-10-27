import { AppProps } from "next/app";
import "../styles/globals.css";
import 'katex/dist/katex.min.css';
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { Lato } from "next/font/google";


const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  <Head>
    <link rel="icon" href="/favicon.ico" />
    <title>Amir Atoufi Portfolio</title>
  </Head>;
  <Navbar />;
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  );
}
