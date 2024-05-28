"use client";
import { useEffect, useRef, useState } from "react";

let moto1 =
  "https://assets-global.website-files.com/635273ea37c256ef2835d522/6528262a89a92dc434b0df3e_1%254theplanet.svg";

let moto2 =
  "https://assets-global.website-files.com/635273ea37c256ef2835d522/6528262ad0ac4ce82d0ffb93_zero%20hunger.svg";
export default function Moto() {
  const [paragraphIndex, setParagraphIndex] = useState(-1);
  // const [coordinates, setCoordinates] = useState({
  //   x: 0,
  //   y: 0,
  // });

  const wrapperRef = useRef(null);
  console.log(wrapperRef);

  let coordinates = {
    x: 0,
    y: 0,
  };

  let mousePosition = useRef({ x: 0, y: 0 });

  function handleMouseEnter(e) {
    let devContainer = wrapperRef.current.getBoundingClientRect();

    mousePosition.current.x = e.clientX;
    mousePosition.current.y = e.clientY - devContainer.top; // to make the circle just below the cursor

    animateCircle();
  }

  const dots = useRef([]);
  useEffect(() => {
    const circles = wrapperRef.current.querySelectorAll(".circle");
    console.log(circles);
    dots.current = Array.from(circles);
  }, []);
  console.log(dots);

  //animate circle
  function animateCircle() {
    let devContainer = wrapperRef.current.getBoundingClientRect();

    // let x = coordinates.x;
    // let y = coordinates.y;

    dots.current.forEach((dot, index) => {
      const { x, y } = mousePosition.current;
      console.log(x);
      console.log(y);
      console.log(index);
      dot.style.scale = (dots.current.length - index) / dots.current.length;
      dot.style.left = x + "px";
      dot.style.top = y + "px";

      //next circle
      let nextDot = dots.current[index + 1] || dots.current[0];

      const dx = (nextDot.offsetLeft - x) * 0.3;
      const dy = (nextDot.offsetTop - y) * 0.3;

      mousePosition.current.x += dx;
      mousePosition.current.y += dy;
    });
    // circles.forEach((circle, index) => {
    //   circle.style.left = x - 12 + "px";
    //   circle.style.top = y - devContainer.top - 12 + "px";

    //   //next circle

    //   const nextcircle = circles[index + 1] || circles[0];
    //   console.log(nextcircle);
    //   console.log(nextcircle.offsetLeft);
    //   console.log(x);
    //   x += (nextcircle.offsetLeft - x) * 0.5;
    //   y += (nextcircle.offsetLeft - y) * 0.2;
    //   console.log(x);
    //   console.log(y);
    // });
  }
  useEffect(() => {
    //for the scroll-text-effect
    function handleScroll() {
      findParaIndex();
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function findParaIndex() {
    let paras = document.querySelectorAll(".text-para p");
    // console.log(paras);
    const viewport = window.innerHeight;
    const scrollPosition = viewport / 2;
    // console.log("viewpoort", viewport);
    // console.log("viewpoort", scrollPosition);
    // console.log(scrollPosition);

    // console.log(window.scrollY);
    paras.forEach((para, index) => {
      const { top, bottom } = para.getBoundingClientRect();
      //here the top gives: It returns the distance from the top of the viewport to the top edge of the element.
      // console.log(top);
      // console.log(bottom);
      if (top <= scrollPosition && bottom >= scrollPosition) {
        setParagraphIndex(index);
      }
    });
  }

  let scrollpos = window.scrollY + window.innerHeight / 2;

  return (
    <>
      <div
        onMouseMove={(e) => handleMouseEnter(e)}
        ref={wrapperRef}
        className="relative bg-green py-[24%]"
      >
        <div className=" text-para text-6xl text-gray font-bold font-bungee leading-[70px] text-center">
          <p
            className={`   transition-colors duration-200 ease-in-out ${
              paragraphIndex >= 0 && "text-primary"
            } `}
          >
            DO IT FOR THE PLANET.
          </p>
          <p
            className={`   transition-colors duration-200 ease-in-out ${
              paragraphIndex >= 1 && "text-primary"
            } `}
          >
            DO IT FOR YOUR BUSINESS
          </p>
          <p
            className={`   transition-colors duration-200 ease-in-out ${
              paragraphIndex >= 2 && "text-primary"
            } `}
          >
            DO IT FOR THE PLANET.
          </p>
          <p
            className={`   transition-colors duration-200 ease-in-out ${
              paragraphIndex >= 3 && "text-primary"
            } `}
          >
            DO IT FOR YOUR BUSINESS
          </p>
        </div>
        {/* for the mouseEffect */}
        <div className="circle  "></div>
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
    </>
  );
}
