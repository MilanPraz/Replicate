"use client";

import { useEffect, useRef, useState } from "react";

const moto1 =
  "https://assets-global.website-files.com/635273ea37c256ef2835d522/6528262a89a92dc434b0df3e_1%254theplanet.svg";

const moto2 =
  "https://assets-global.website-files.com/635273ea37c256ef2835d522/6528262ad0ac4ce82d0ffb93_zero%20hunger.svg";

export default function Temp() {
  const [paragraphIndex, setParagraphIndex] = useState(-1);

  //first i need reference to the main wrapper div
  const wrapperRef = useRef(null);

  //just like a useState
  let mousePosition = useRef({ x: 0, y: 0 });

  //here in dots variable we will store references of all divs having circle classnmae
  const dots = useRef([]);

  //initially on mount select all divs references and make them array and put in dots
  useEffect(() => {
    const circles = wrapperRef.current.querySelectorAll(".solar");
    dots.current = Array.from(circles);
  }, []);

  console.log(dots);
  //now callfunc on mouse move
  function handleMouseEnter(e) {
    let devContainer = wrapperRef.current.getBoundingClientRect();

    mousePosition.current.x = e.clientX;
    mousePosition.current.y = e.clientY;
    animateCircle();
  }

  function animateCircle() {
    //animate the circle by using leeft rught
    dots.current.forEach((circle, index) => {
      const { x, y } = mousePosition.current;
      // circle.style.scale = (dots.current.length - index) / 10;
      circle.style.zIndex = 10 - index;

      circle.style.left = x + "px";
      circle.style.top = y + "px";

      //next circle animate
      let nextCircle = dots.current[index + 1] || dots.current[0];

      //displacement deltax nikaleko like distance diff between  current dot and next dot
      const dx = (nextCircle.offsetLeft - x) * 0.9;
      const dy = (nextCircle.offsetTop - y) * 0.9;

      mousePosition.current.x += dx;
      mousePosition.current.y += dy;
    });
  }

  useEffect(() => {
    function handleScroll() {
      findParaIndex();
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const findParaIndex = () => {
    const paras = document.querySelectorAll(".text-para p");
    const viewport = window.innerHeight;
    const scrollPosition = viewport / 2;

    paras.forEach((para, index) => {
      const { top, bottom } = para.getBoundingClientRect();
      if (top <= scrollPosition && bottom >= scrollPosition) {
        setParagraphIndex(index);
      }
    });
  };

  return (
    <>
      <div
        onMouseMove={handleMouseEnter}
        ref={wrapperRef}
        className="relative bg-green py-[24%]"
      >
        <div className=" text-para text-6xl text-gray font-bold font-bungee leading-[70px] text-center">
          <p
            className={` transition-colors duration-200 ease-in-out ${
              paragraphIndex >= 0 && "text-primary"
            } `}
          >
            DO IT FOR THE PLANET.
          </p>
          <p
            className={` transition-colors duration-200 ease-in-out ${
              paragraphIndex >= 1 && "text-primary"
            } `}
          >
            DO IT FOR YOUR BUSINESS
          </p>
          <p
            className={` transition-colors duration-200 ease-in-out ${
              paragraphIndex >= 2 && "text-primary"
            } `}
          >
            DO IT FOR THE PLANET.
          </p>
          <p
            className={` transition-colors duration-200 ease-in-out ${
              paragraphIndex >= 3 && "text-primary"
            } `}
          >
            DO IT FOR YOUR BUSINESS
          </p>
        </div>
        {/* for the mouseEffect */}
        {/* <div className="circle"> */}

        <img className="solar scale-[0.7] " src="/sun.png" alt="aa" />
        <img className="solar scale-[0.22]" src="/mercury.png" alt="aa" />
        <img className="solar scale-[0.21]" src="/venus.png" alt="aa" />
        <img className="solar scale-[0.3]" src="/earth.png" alt="aa" />
        <img className="solar scale-[0.4]" src="/jupiter.png" alt="aa" />
        <img className="solar scale-[0.2]" src="/neptune.png" alt="aa" />
        {/* </div> */}
      </div>
    </>
  );
}
