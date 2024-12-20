import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import app from "../../App.module.css";
import con from "./contact.module.css";
import { useState, useEffect, useRef } from "react";
export default function Contact() {
  const [value, setValue] = useState("");
  const [click, setClick] = useState(false);

  return (
    <div
      className={`${con.shadow} z-[100] w-[90%] md:w-[100%] relative mx-auto flex flex-col p-3 gap-5 h-fit bg-gradient-to-b from-[#fff] to-[#cfcfcf]`}
      id="contact"
    >
      <div
        className="absolute h-full w-full z-[100]"
        onClick={() => setClick(false)}
      ></div>
      <h1
        className={`${app.lato} z-[100] text-4xl font-semibold text-center underline`}
      >
        Contact
      </h1>
      {click && (
        <div
          className={`${app.roboto} z-[100] rounded-xl mx-auto border-2 border-black p-3 bg-black text-white`}
        >
          {value}
        </div>
      )}
      <div
        className={`${con.contact_card} z-[100] w-[220px] rounded-3xl md:w-[350px] mx-auto h-[10vh] `}
      >
        <span>contact via</span>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/srikar-challa-5a22b9250/"
          target="_blank"
        >
          <p className="border-l-2 border-r-2 border-gray-300 h-full">
            <FaLinkedin />
          </p>
        </a>
        <a
          className="social-link"
          href="https://github.com/srikar-c"
          target="_blank"
        >
          <p className="border-l-2 border-r-2 border-gray-300 h-full">
            <FaGithub />
          </p>
        </a>
        <a
          className="social-link"
          href="https://www.instagram.com/_c_srikar/"
          target="_blank"
        >
          <p className="border-l-2 border-r-2 border-gray-300 h-full">
            <FaInstagram />
          </p>
        </a>
        <a
          className="social-link"
          onClick={() => {
            setClick(true);
            setValue("9030585689");
          }}
        >
          <p className="border-l-2 border-r-2 border-gray-300 h-full">
            <FaPhoneAlt />
          </p>
        </a>
        <a
          className="social-link"
          onClick={() => {
            setClick(true);
            setValue("csrikar2003@gmail.com");
          }}
        >
          <p className="border-l-2 border-r-2 border-gray-300 h-full">
            <MdAlternateEmail />
          </p>
        </a>
      </div>
    </div>
  );
}
