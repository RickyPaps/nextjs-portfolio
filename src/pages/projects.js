import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import AnimatedText from "../components/util/AnimatedText";
import FeaturedProjects from "@/components/Projects/FeaturedProjects";
import Project from "@/components/Projects/Project";
import TransitionEffect from "@/components/util/TransitionEffect";

const projects = () => {
  return (
    <>
      <Head>
        <title>Ricky Portfolio | Projects Page</title>
        <meta name="description" content="Projects page description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Outshines Knowledge!"
            className="mb-16 xl:!text-7xl lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProjects
                title={"Front-End Developer"}
                summary={`Contributed to the development of a new E-commerce Progressive Web Application (PWA), now live. 
                Utilized Ionic React for the front-end framework, integrated with a back-end powered by GraphQL and Magento 2.
                Employed Bitbucket for version control, with design assets created using Figma.`}
                link={"https://www.mrp.com/home"}
                image={"https://i.ibb.co/8Yzy3JQ/Mr-Price-x-North-Star-feat.jpg"}
                githubLink={""}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Ski Chalet Project"}
                link={"https://alpichalets.com/"}
                image={"https://i.ibb.co/88fNV91/Alpi-Chalets.png"}
                githubLink={""}
                type={"Wordpress Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"AI Summarizer"}
                link={"https://ai-powered-summarizer.vercel.app/"}
                image={"https://i.ibb.co/j6rb84k/DALL-E-2024-05-24-12-47-16-Create-a-modern-sleek-logo-that-represents-the-concept-of-summarizing-art.png"}
                githubLink={"https://github.com/RickyPaps/ai-summarize"}
                type={"Side Project"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title={"CareerHive"}
                summary={`Stay Tuned`}
                link={"#"}
                image={"https://i.ibb.co/KVqDp3f/Coming-Soon.png"}
                githubLink={""}
                type={"Featured Project"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
