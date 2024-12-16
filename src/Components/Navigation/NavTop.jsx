import Logo from "./Logo";
import app from "../../App.module.css";
import Hamb from "./Hamburger/Hamb";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NavTop() {
  const [tog, setTog] = useState(false);

  const change = (value) => {
    setTog(value);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="fixed bg-[#f0f8ff] w-full h-[10vh] shadow-md flex items-center px-0 md:px-10 justify-between py-4 font-semibold z-[100] "
      data-aos="fade-bottom"
    >
      <Logo />
      <div
        className={`${app.poppins} hidden md:flex w-[40%] justify-between text-lg`}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex flex-col md:hidden">
        <Hamb toggle={tog} onChecked={change} />
        {tog && (
          <div className="flex flex-col gap-5 absolute top-[10vh] left-0 bg-[#fff] p-3 text-center cursor-pointer w-full">
            <a href="#home" onClick={() => change(false)}>
              Home
            </a>
            <a href="#about" onClick={() => change(false)}>
              About
            </a>
            <a href="#skills" onClick={() => change(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => change(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => change(false)}>
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
