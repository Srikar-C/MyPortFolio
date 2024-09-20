import c from "../../assets/skills/c.png";
import mat from "../../assets/skills/matui.png";
import { FaJava } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { DiPostgresql } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import pro from "../../assets/skills/pro.jpeg";
import web from "../../assets/skills/web.jpeg";
import vc from "../../assets/skills/vc.jpeg";
import db from "../../assets/skills/db.jpeg";

const items = [
  {
    id: 1,
    heading: "Programming Languages",
    photo: pro,
    known: [
      {
        sid: 1,
        name: "C Programming",
        icon: (
          <span>
            <img src={c} className="w-[20px] h-[20px]" />
          </span>
        ),
      },
      {
        sid: 2,
        name: "Java",
        icon: (
          <span>
            <FaJava className="text-2xl" />
          </span>
        ),
      },
    ],
  },
  {
    id: 2,
    heading: "Web Development",
    photo: web,
    known: [
      {
        sid: 1,
        name: "HTML",
        icon: (
          <span>
            <FaHtml5 className="text-2xl text-[#DD4B25]" />
          </span>
        ),
      },
      {
        sid: 2,
        name: "CSS",
        icon: (
          <span>
            <FaCss3Alt className="text-2xl text-[#254BDD]" />
          </span>
        ),
      },
      {
        sid: 3,
        name: "React",
        icon: (
          <span>
            <FaReact className="text-2xl text-[#5ED3F3]" />
          </span>
        ),
      },
      {
        sid: 4,
        name: "TailwindCSS",
        icon: (
          <span>
            <RiTailwindCssFill className="text-2xl text-[#36B7F0]" />
          </span>
        ),
      },
      {
        sid: 5,
        name: "Material UI",
        icon: (
          <span>
            <img src={mat} className="w-[20px] h-[25px]" />
          </span>
        ),
      },
    ],
  },
  {
    id: 3,
    heading: "Version Control",
    photo: vc,

    known: [
      {
        sid: 1,
        name: "Git",
        icon: (
          <span>
            <FaGitAlt className="text-2xl text-[#E94E31]" />
          </span>
        ),
      },
      {
        sid: 2,
        name: "GitHub",
        icon: (
          <span>
            <FaGithub className="text-2xl text-[#000]" />
          </span>
        ),
      },
    ],
  },
  {
    id: 4,
    heading: "Databases",
    photo: db,
    known: [
      {
        sid: 1,
        name: "SQL",
        icon: (
          <span>
            <AiOutlineConsoleSql className="text-2xl text-[#D47131]" />
          </span>
        ),
      },
      {
        sid: 2,
        name: "PostgreSQL",
        icon: (
          <span>
            <DiPostgresql className="text-2xl text-[#2F5D8D] font-semibold" />
          </span>
        ),
      },
    ],
  },
];

export default items;
