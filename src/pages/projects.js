import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, image, link, githubLink }) => {
  const FramerImage = motion(Image);

  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={image}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between p-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 font-semibold text-light bg-dark px-6 p-2 rounded-lg"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, image, link, githubLink }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={image} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="font-semibold text-lg underline"
          >
            Visit
          </Link>
          <Link href={githubLink} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Ricky Portfolio | Projects Page</title>
        <meta name="description" content="Projects page description" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Outshines Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title={"Fron-End Developer"}
                summary={`Contributed to the development of a new E-commerce Progressive Web Application (PWA), now live. 
                Utilized Ionic React for the front-end framework, integrated with a back-end powered by GraphQL and Magento 2.
                Employed Bitbucket for version control, with design assets created using Figma.`}
                link={"https://www.mrp.com/home"}
                image={project1}
                githubLink={"#"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Fron-End Developer"}
                link={"https://www.mrp.com/home"}
                image={project1}
                githubLink={"#"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Fron-End Developer"}
                link={"https://www.mrp.com/home"}
                image={project1}
                githubLink={"#"}
                type={"Featured Project"}
              />
            </div>
            {/* <div className="col-span-12">Featured Project</div>
            <div className="col-span-6">Project 3</div>
            <div className="col-span-6">Project 4</div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;