import pc from "../../assets/myphotos/profile2.jpg";
import app from "../../App.module.css";
import Typewriter from "typewriter-effect";
import about from "./about.module.css";
import Framer from "./Framer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  return (
    <div
      className="bg-gradient-to-b from-[#104c91] relative w-[100%] mx-auto flex flex-col p-3 py-5 gap-10"
      id="about"
    >
      <h1
        className={`${app.lato} text-4xl font-semibold text-center underline text-white`}
      >
        About
      </h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between w-[85%] mx-auto">
        <div className="overflow-hidden mx-auto w-[300px] md:w-[350px] h-[350px] md:h-[430px]">
          <img
            src={pc}
            className={`${about.img} w-full h-full block rounded-xl shadow-xl`}
          />
        </div>
        <div
          className={`text-lg w-[100%] md:w-[65%] p-2 py-4 md:py-0 md:p-4 font-medium items-center flex flex-col justify-around rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg ${about.shadow} `}
        >
          <div className="flex flex-col gap-5 md:gap-10 ml-2 md:ml-5">
            <p className="text-[15px] md:text-lg text-left text-white">
              Graduated from G. Pulla Reddy Engineering College(Autonomous),
              Kurnool, Andhra Pradesh. Maintained above 85% aggregate from my
              childhood.
            </p>
            <div
              className={` ${app.roboto} flex gap-2 items-center text-center justify-center`}
            >
              <p className="text-lg md:text-3xl text-white">I'm</p>
              <span className="text-[12px] md:text-[20px] text-black bg-white w-fit h-fit px-2 py-0 md:py-1 md:px-1 ">
                <Typewriter
                  options={{
                    loop: true,
                    strings: ["FrontEnd Developer", "React Developer"],
                    autoStart: true,
                  }}
                />
              </span>
            </div>
          </div>
          <Framer />
        </div>
      </div>
    </div>
  );
}
