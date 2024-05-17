import React, { useState, useEffect } from "react";

const MouseCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const animateCircles = () => {
    const circles = document.querySelectorAll(`.circle`);
    debugger;

    let x = position.x;
    let y = position.y;

    circles.forEach(function (circle, index) {
      circle.style.left = `${x - 12}px`;
      circle.style.top = `${y - 12}px`;

      debugger;

      circle.style.scale = (circles.length - index) / circles.length;

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.5;
      y += (nextCircle.y - y) * 0.5;
    });
  };

  useEffect(() => {
    const circles = document.querySelectorAll(`.circle`);

    circles.forEach(function (circle) {
      circle.x = 0;
      circle.y = 0;
    });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(animateCircles);
  }, [position]);

  return (
    <div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default MouseCircle;
