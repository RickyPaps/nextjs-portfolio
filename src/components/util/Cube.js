import React from "react";
import {
  CssIcon,
  GitIcon,
  HtmlIcon,
  ReactIcon,
  ShopifyIcon,
  TailwindIcon,
} from "./Icons";

const Cube = () => {
  return (
    <div className="w-1/2 h-[200px] lg:w-1/4 sm:w-1/2">
      <div className="animate-spinCube">
        <div className="face1 spin-div">
          <HtmlIcon />
        </div>
        <div className="face2 spin-div">
          <CssIcon />
        </div>
        <div className="face3 spin-div">
          <ReactIcon />
        </div>
        <div className="face4 spin-div">
          <TailwindIcon />
        </div>
        <div className="face5 spin-div">
          <GitIcon />
        </div>
        <div className="face6 spin-div">
          <ShopifyIcon />
        </div>
      </div>
    </div>
  );
};

export default Cube;
