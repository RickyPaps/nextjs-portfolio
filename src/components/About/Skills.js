import React from "react";
import { m } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <m.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent 
      xs:text-dark xs:font-bold
      "
      whileHover={{ scale: 1.2 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </m.div>
  );
};

const Skills = () => {
  return (
    <div className="my-52 md:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-xl md:mb-16">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg
        md:bg-circularLightMd
        sm:bg-circularLightSm
      "
      >
        <m.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer 
           lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </m.div>
        <Skill name="HTML" x="-19vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-11vw" />
        <Skill name="Javascript" x="23vw" y="7vw" />
        <Skill name="React" x="0vw" y="11vw" />
        <Skill name="Nextjs" x="-20vw" y="-15vw" />
        <Skill name="Shopify" x="31vw" y="-5vw" />
        <Skill name="Wordpress" x="0vw" y="-19vw" />
        <Skill name="Tailwind CSS" x="14vw" y="-13vw" />
      </div>
    </div>
  );
};

export default Skills;
