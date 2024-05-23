import { useEffect } from "react";

export const CustomMouse = () => {
  const mouse = {
    x: 0,
    y: 0,
  };

  var dots = [];

  const initalDraw = () => {
    var Dot = function () {
      this.x = 0;
      this.y = 0;
      this.node = (function () {
        var n = document.createElement("div");
        n.className = "circle";
        document.querySelector(".circle-wrapper").appendChild(n);
        return n;
      })();
    };

    Dot.prototype.draw = function () {
      this.node.style.left = this.x - 12 + "px";
      this.node.style.top = this.y - 12 + "px";
    };

    for (var i = 0; i < 10; i++) {
      var d = new Dot();
      dots.push(d);
    }
  };

  const draw = () => {
    var x = mouse.x,
      y = mouse.y;

    dots.forEach(function (dot, index, dots) {
      var nextDot = dots[index + 1] || dots[0];

      dot.x = x;
      dot.y = y;
      dot.node.style.scale = (dots.length - index) / dots.length;
      dot.draw();
      x += (nextDot.x - dot.x) * 0.8;
      y += (nextDot.y - dot.y) * 0.8;
    });
  };

  const animate = () => {
    draw();
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    function handler(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    initalDraw();

    requestAnimationFrame(animate);

    addEventListener("mousemove", handler);

    return () => {
      window.removeEventListener("mousemove", handler);
    };
  }, []);

  return <div className="circle-wrapper sm:hidden"></div>;
};
