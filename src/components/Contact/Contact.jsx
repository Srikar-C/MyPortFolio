import { GrLinkedin } from "react-icons/gr";
import { LuGithub } from "react-icons/lu";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
export default function Contact() {
  return (
    <div
      id="contact"
      className="mt-10 py-10 w-[100%] text-white h-[50vh] md:h-[65vh] bg-black"
    >
      <h1 className="text-center text-white text-4xl my-9  font-semibold">
        <u>Contact Me</u>
      </h1>
      <div className=" flex flex-col w-[100%] md:w-[50%] mx-auto justify-center gap-20">
        <div className="cont-top flex flex-col justify-center w-fit mx-auto gap-7">
          <div className="flex items-center gap-4">
            <BiLogoGmail className="text-4xl" />
            <p>csrikar2003@gmail.com</p>
          </div>
          <div className="flex items-center w-fit gap-4">
            <MdOutlinePermPhoneMsg className="text-4xl" />
            <p>+91 9030585689</p>
          </div>
        </div>
        <div className="cont-btm flex w-[50%] md:w-[60%] justify-between mx-auto">
          <a
            href="https://www.linkedin.com/in/srikar-challa-5a22b9250/"
            target="_blank"
          >
            <GrLinkedin className="text-3xl md:text-4xl" />
          </a>
          <a href="https://github.com/Srikar-C" target="_blank">
            <LuGithub className="text-3xl md:text-4xl" />
          </a>
          <a href="https://www.instagram.com/_c_srikar/" target="_blank">
            <BsInstagram className="text-3xl md:text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
