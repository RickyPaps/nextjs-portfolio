import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListItem from "./ListItem";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <ListItem reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type={"High School Qulification"}
            time={"2010-2014"}
            place={"Northwood Boys High, South Africa"}
            info={
              "Relevant courses included Information Technology, English, Mathematics, Physics etc."
            }
          />
          <Details
            type={"Diploma in Software Development"}
            time={"2015-2017"}
            place={"Varsity College, South Africa"}
            info={
              "Relevant courses included Web Development, Programming Logic and Design, Programming, Databases and Systems Analysis and Design"
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
