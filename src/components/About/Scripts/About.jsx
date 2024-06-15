import * as React from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TimelineCard from "./TimelineCard";
import eduList from "./../Lists/eduList";
import expList from "./../Lists/expList";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  function handleScroll() {
    document.getElementById("about").classList.toggle("abouttoggle");
  }
  return (
    <div
      className="about h-fit md:h-[110vh] flex flex-col bg-gradient-to-r from-black via-gray-500 to-black text-white relative mt-[0vh] md:mt-[110vh] pb-[50px] items-center "
      id="about"
      onClick={handleScroll}
    >
      <h1 className="text-center text-white text-4xl my-9 font-semibold">
        <u>About Me</u>
      </h1>
      <div className="flex flex-col md:flex-row justify-between px-4 m-5 gap-10">
        <div
          className="education w-[100%] md:w-[45%] border-2 border-white shadow-lg shadow-white"
          data-aos="fade-right"
        >
          <div className="flex flex-row items-center mx-8 justify-start">
            <RiGraduationCapFill className="text-5xl" />
            <h2 className="text-2xl md:text-4xl ml-10 my-7 font-normal">
              Education
            </h2>
          </div>
          <TimelineCard items={eduList} />
        </div>
        <div
          className="experience w-[100%] md:w-[45%] border-2 border-white shadow-lg shadow-white"
          data-aos="fade-left"
        >
          <div className="flex flex-row items-center mx-8">
            <MdWorkHistory className="text-5xl" />
            <h2 className="text-2xl md:text-4xl ml-10 my-7 font-normal">
              Experience
            </h2>
          </div>
          <TimelineCard items={expList} />
        </div>
      </div>
    </div>
  );
}
