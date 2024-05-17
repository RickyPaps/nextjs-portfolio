import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePicture from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Riccardo Papini Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePicture}
                alt="Ricky"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl text-left"
              />
              <p className="my-4 text-base font-medium">
                I strive to craft innovative web applications, transforming
                ideas into reality as a dedicated Front-End developer. Feel free
                to explore my recent projects and articles, where I share my
                journey and expertise in React.js and web development
              </p>
              <div className="flex items-center self-start mt-2">
                {/* PUT CV IN PUBLIC FOLDER */}
                <Link
                  href={"/.pdf"}
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
                  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent 
                  hover:border-dark transition-all duration-300"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href={"mailto:rickypapini@gmail.com"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline "
                >
                  Email Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 w-24 inline-block">
          <Image
            src={lightBulb}
            alt="light-bulb"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
