import Typewriter from "typewriter-effect";
import photo from "../../assets/Photo.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function NavBottom() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="nav-btm md:mt-[10vh] absolute w-[100%] h-[100vh] md:h-[100vh] justify-center items-center flex flex-col md:flex-row bg-black ">
      <div className="intro w-[100%] md:w-1/2" data-aos="fade-right">
        <h1 className="text-white text-2xl md:text-7xl m-4 text-center md:text-left">
          Hi✋! I'm Challa Srikar
        </h1>
        <div className="flex items-center mx-auto md:m-0 w-fit">
          <p className="iam text-white text-3xl md:text-4xl m-4">I'm</p>
          <span className="texts bg-[#eed756] w-fit mx-1 p-1 text-xl md:text-4xl m-4 font-extrabold text-black">
            <Typewriter
              className="text-white"
              options={{
                loop: true,
                strings: ["FrontEnd Developer", "React Developer"],
                autoStart: true,
              }}
            />
          </span>
        </div>
        <div className="content w-[90%] md:w-100% mx-auto md:mx-0 my-3 md:my-2">
          <p className="text-white mx-2 md:ml-5 text-sm md:text-xl text-justify ">
            With a robust background in programming and software development, I
            am enthusiastic about leveraging my expertise in practical
            scenarios. I am poised to contribute to meaningful projects and
            engage in collaborative efforts with fellow professionals to effect
            positive change within the tech industry.
          </p>
        </div>
      </div>
      <div className="photo" data-aos="fade-left">
        <img
          src={photo}
          alt="MyPhoto"
          className=" w-[100%] md:w-[400px] h-[240px] md:h-[450px] rounded-[50%]"
        />
      </div>
    </div>
  );
}
