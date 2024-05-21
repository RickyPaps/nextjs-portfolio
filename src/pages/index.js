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
        <meta name="description" content="Home Page for Next Portfolio" />
      </Head>
      <div className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePicture}
                alt="Ricky"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm">
                I strive to craft innovative web applications, transforming
                ideas into reality as a dedicated Front-End developer. Feel free
                to explore my recent projects and articles, where I share my
                journey and expertise in React.js and web development
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                {/* PUT CV IN PUBLIC FOLDER */}
                <Link
                  href={"/.pdf"}
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
                  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent 
                  hover:border-dark transition-all duration-300
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light 
                  
                  md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href={"mailto:rickypapini@gmail.com"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Email Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 w-24 inline-block md:hidden">
          <Image src={lightBulb} alt="light-bulb" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
}
