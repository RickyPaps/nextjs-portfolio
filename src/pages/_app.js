import Footer from "@/components/Footer";
import { CustomMouse } from "@/components/util/CustomMouse";
import NavBar from "@/components/Header/NavBar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { LazyMotion, domAnimation } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <NavBar />
        <CustomMouse />
        <LazyMotion features={domAnimation}>
          <Component {...pageProps} />
        </LazyMotion>
        <Footer />
      </main>
    </>
  );
}
