import React, { useState } from "react";
import Logo from "../Logo";
import { GithubIcon, LinkedInIcon } from "../util/Icons";
import CustomLink from "./CustomLink";
import CustomMobileLink from "./CustomMobileLink";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 pb-8 pt-12 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleMenuToggle}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title={"Home"} className="mr-4" />
          <CustomLink href="/about" title={"About"} className="mx-4" />
          <CustomLink href="/projects" title={"Projects"} className="mx-4" />
        </nav>

        <nav className="flex justify-center items-center">
          <motion.a
            href="https://github.com/RickyPaps"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ricky-papini-427ba0146/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
            x: "-50%",
            y: "-50%",
            backdropFilter: "blur(5px)",
          }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90  rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex justify-center items-center flex-col">
            <CustomMobileLink
              href="/"
              title={"Home"}
              toggle={handleMenuToggle}
            />
            <CustomMobileLink
              href="/about"
              title={"About"}
              toggle={handleMenuToggle}
            />
            <CustomMobileLink
              href="/projects"
              title={"Projects"}
              toggle={handleMenuToggle}
            />
          </nav>

          <nav className="flex justify-center items-center flex-wrap mt-2">
            <motion.a
              href="https://google.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mr-2 bg-light rounded-full"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://google.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <LinkedInIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
