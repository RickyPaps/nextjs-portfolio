import AnimatedText from "@/components/util/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Skills from "@/components/About/Skills";
import Experience from "@/components/About/Experience";
import Education from "@/components/About/Education";
import AnimatedNumbers from "@/components/About/Helpers/AnimatedNumbers";
import TransitionEffect from "@/components/util/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>Ricky Portfolio | About Page</title>
        <meta name="description" content="about page description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={"Passionate about Crafting User-Centric Web Solutions!"}
            className="mb-16 text-6xl lg:!text-4xl sm:!text-3xl xs:!text-2xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hello, I’m Riccardo Papini, a seasoned web developer dedicated
                to crafting aesthetically pleasing, practical, and user-centric
                digital solutions. With four years of industry experience, I
                consistently seek fresh and inventive approaches to translate
                clients’ ideas into compelling online experiences.
              </p>
              <p className="font-medium my-4">
                Be it website development or other digital endeavors, I
                consistently uphold a steadfast dedication to web development
                and user-centric principles in every project. I eagerly
                anticipate the chance to contribute my skills and enthusiasm to
                your upcoming venture.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:col-span-8 md:order-1">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={"https://i.ibb.co/WgFWzjW/profile.png"}
                width={500}
                height={500}
                alt="Ricky-about-image"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col  items-end  justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center md:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center md:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center md:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
