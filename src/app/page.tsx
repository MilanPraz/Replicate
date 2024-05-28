import Image from "next/image";
import Header from "./components/common/Header";
import { useRef } from "react";
import Hero from "./components/home/Hero";
import Moto from "./components/home/Moto";
import Temp from "./components/home/Temp";

export default function Home() {
  return (
    <main className=" ">
      <Header />
      <Hero />
      <Moto />
      <Temp />
      {/* <h2>Hello</h2> */}
    </main>
  );
}
