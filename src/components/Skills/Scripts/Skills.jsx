import { useEffect, useState } from "react";
import program from "../Lists/program";
import Template from "./Template";
import front from "../Lists/front";
import database from "../Lists/database";
import fam from "../Lists/familiar";
import Soft from "./Soft";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [right, setRight] = useState(
    <Template heading="Programming" list={program} data-aos="fade-left" />
  );

  return (
    <div
      className="skills bg-gradient-to-r from-gray-900 via-black to-gray-900 text-black relative h-[180vh] md:h-[90vh] items-center flex flex-col py-[30px]"
      id="skills"
    >
      <h1 className="text-center text-white text-4xl font-semibold mt-10 mb-5">
        <u>Skills</u>
      </h1>
      <div className="flex flex-row md:flex-col mx-auto md:mx-0">
        <div
          className="skill-left relative md:absolute self-center md:self-auto w-[100%] md:w-[40%] p-7 left-0 ml-0 md:ml-10 mt-10 h-[230px] flex flex-row flex-wrap gap-5 items-center justify-center"
          data-aos="fade-right"
        >
          <div
            onClick={(e) => {
              setRight(<Template heading="Programming" list={program} />);
            }}
            className="program bg-gradient-to-l from-blue-500 to-blue-900 w-fit md:w-[200px] focus:border-white focus:shadow-lg focus:shadow-white active:border-white active:shadow-lg active:shadow-white text-white p-[10px] rounded-[10px] cursor-pointer"
          >
            <h3 className="text-center w-fit md:w-[100%] ">Programming</h3>
          </div>
          <div
            onClick={(e) => {
              setRight(
                <Template heading="Front End Technologies" list={front} />
              );
            }}
            className="front bg-gradient-to-l from-blue-500 to-blue-900 w-fit md:w-[200px] focus:border-white focus:shadow-lg focus:shadow-white active:border-white active:shadow-lg active:shadow-white text-white p-[10px] rounded-[10px] cursor-pointer"
          >
            <h3 className="text-center w-fit md:w-[100%]">
              Front End Technologies
            </h3>
          </div>
          <div
            onClick={(e) => {
              setRight(<Template heading="Databases" list={database} />);
            }}
            className="data bg-gradient-to-l from-blue-500 to-blue-900 w-fit md:w-[200px] focus:border-white focus:shadow-lg focus:shadow-white active:border-white active:shadow-lg active:shadow-white text-white p-[10px] rounded-[10px] cursor-pointer"
          >
            <h3 className="text-center w-fit md:w-[100%]">Databases</h3>
          </div>
          <div
            onClick={(e) => {
              setRight(<Template heading="Familiar Skills" list={fam} />);
            }}
            className="tech bg-gradient-to-l from-blue-500 to-blue-900 w-fit md:w-[200px] focus:border-white focus:shadow-lg focus:shadow-white active:border-white active:shadow-lg active:shadow-white text-white p-[10px] rounded-[10px] cursor-pointer"
          >
            <h3 className="text-center w-fit md:w-[100%]">Familiar Skills</h3>
          </div>
          <div
            onClick={(e) => {
              setRight(<Soft />);
            }}
            className="soft bg-gradient-to-l from-blue-500 to-blue-900 w-fit md:w-[200px] focus:border-white focus:shadow-lg focus:shadow-white active:border-white active:shadow-lg active:shadow-white text-white p-[10px] rounded-[10px] cursor-pointer"
          >
            <h3 className="text-center w-fit md:w-[100%]">Soft Skills</h3>
          </div>
        </div>

        <div
          className="skill-right absolute right-0 p-7 w-[100%] md:w-[40%] mr-0 md:mr-10 mt-[60vh] md:mt-10 h-fit"
          data-aos="fade-left"
        >
          {right}
        </div>
      </div>
    </div>
  );
}
