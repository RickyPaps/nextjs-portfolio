import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListItem from "./ListItem";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ListItem reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 md:ml-6">
          <Details
            position={"Front-End Engineer"}
            company={"Mr Price"}
            time={"2018-2021"}
            address={"Durban, South Africa"}
            work={
              "Worked in their E-Commerce team responsible for maintaing their non-trading sites as well as being part of the development of their new E-Commerce platform."
            }
            companyLink={"https://www.mrp.com/"}
          />
          <Details
            position={"Freelance Web Developer"}
            company={"Nomadic Freelancing"}
            time={"2019-Present"}
            address={"Worldwide"}
            work={
              "Over the past five years, I have honed my skills as a Freelance Web Developer, specializing in creating, customizing, and maintaining websites on platforms such as WordPress and Shopify. My work encompasses a broad range of tasks and projects. To keep up with the latest trends, I have also Explored new technologies and frameworks through self-initiated side projects. You may see these projects on my Projects Page."
            }
            companyLink={"#"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
