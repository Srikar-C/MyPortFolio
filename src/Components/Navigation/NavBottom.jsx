import p1 from "../../assets/myphotos/profile1.png";
import app from "../../App.module.css";
import nav from "./Nav.module.css";
import resume from "../../assets/Resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function NavBottom() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="z-[90] mt-[15vh] md:mt-[20vh] h-[65vh] md:h-[60vh] w-[100%] md:w-[90%] mx-auto flex flex-col-reverse md:flex-row justify-around px-10">
      <div
        className={`${app.lato} w-[100%] z-[85] md:w-[50%] break-words text-justify self-center text-[14px] md:text-2xl`}
        data-aos="fade-right"
      >
        With a robust background in programming and software development, I am
        enthusiastic about leveraging my expertise in practical scenarios. I am
        poised to contribute to meaningful projects and engage in collaborative
        efforts with fellow professionals to effect positive change within the
        tech industry.
      </div>
      <div
        className="z-[85] flex flex-col gap-4 md:gap-10 items-center justify-evenly"
        data-aos="fade-left"
      >
        <div className={`${nav.navbtm} md:${nav.navbtmmd} `}>
          <img
            src={p1}
            className={` rounded-full w-[200px] md:w-[300px] h-[200px] md:h-[300px] opacity-80 border-4 border-white p-3`}
          />
        </div>
        <a
          href={resume}
          download
          className={`border-2 border-black md:border-white p-2 md:p-4 m-4 ${app.lato} rounded-xl text-[12px] md:text-xl text-black md:text-white hover:text-black hover:bg-white`}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
