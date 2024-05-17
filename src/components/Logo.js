import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        initial={{ backgroundColor: "#000" }}
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#00FF00",
            "rgb(68 180 58)",
            "rgb(214 228 213)",
            "rgb(188 128 128)",
            "rgb(235 0 0)",
            "#00FF00",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        RP
      </MotionLink>
    </div>
  );
};

export default Logo;
