import Footer from "@/components/Footer";
import { CustomMouse } from "@/components/util/CustomMouse";
import NavBar from "@/components/Header/NavBar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="App Page" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <NavBar />
        {isDesktopOrLaptop && <CustomMouse />}
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </LazyMotion>
        <Footer />
      </main>
    </>
  );
}
