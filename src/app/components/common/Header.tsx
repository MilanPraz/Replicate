"use client";
import Link from "next/link";
import { useRef } from "react";

export default function Header() {
  const myElementReferenceParent = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { title: "HOW IT WORKS", url: "/how-it-works" },
    { title: "PRICING", url: "/pricing" },
    { title: "BLOG", url: "/blog" },
  ];
  return (
    <header className=" py-[30px] bg-green">
      <nav className="   bg-green fixed  top-0 left-0 z-10 py-[18px] px-[20px]  w-full box-border  ">
        {/* comnpany logo */}
        <div className=" w-full flex flex-wrap flex-grow items-center justify-between container  box-border mx-auto  ">
          <Link
            href={"/"}
            className="  text-off-white text-3xl flex w-[240px] items-center font-bungee "
          >
            kikin
          </Link>
          {/* sidebar */}
          <div
            className=" flex  flex-grow items-center justify-center text-center "
            ref={myElementReferenceParent}
          >
            <ul className=" text-center flex flex-grow gap-[10px] items-center justify-center text-off-white capitalize   flex-col md:flex-row">
              {navLinks?.map((el, index) => {
                return (
                  <li
                    className=" mx-[5px] leading-7 text-[14px]  font-semibold"
                    key={index}
                  >
                    <Link href={el.url}>{el.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" flex  gap-4 ">
            <Link className=" btn-secondary" href={"/login"}>
              LOG IN
            </Link>
            <Link className=" btn-primary" href={"/login"}>
              GET FUNDING
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
