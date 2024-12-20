import { RiGraduationCapFill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import bolt from "../../assets/about/boltiot.png";
import crim from "../../assets/about/crimson.png";

const items = [
  {
    id: 1,
    icon: <RiGraduationCapFill className="text-4xl" />,
    heading: "Education",
    titles: [
      {
        sid: 1,
        what: "Bachelor of Technology",
        where: "G Pulla Reddy Engineering College",
        duration: "2020-2024",
        icon: <FaUserGraduate />,
        color: "#000",
      },
      {
        sid: 2,
        what: "Intermediate",
        where: "Sri Chaitanya Junior College",
        duration: "2018-2020",
        icon: <IoSchool />,
        color: "#000",
      },
      {
        sid: 3,
        what: "SSC",
        where: "Cattamanchi Ramalinga Reddy High School",
        duration: "2017-2018",
        icon: <FaSchool />,
        color: "#000",
      },
    ],
  },
  {
    id: 2,
    icon: <MdWorkHistory className="text-4xl" />,
    heading: "Work Experience",
    titles: [
      {
        sid: 1,
        what: "Frontend Developer Intern",
        where: "Crimson Innovative Technologies",
        duration: "Dec 2023 - Apr 2024",
        icon: (
          <span className="w-[20px] h-[20px]">
            <img src={crim} className="w-[25px] h-[20px] rounded-full" />
          </span>
        ),
        color: "#942828",
      },
      {
        sid: 2,
        what: "Student Intern",
        where: "Bolt Iot",
        duration: "Apr 2023 - Jun 2023",
        icon: (
          <span className="w-[20px] h-[20px]">
            <img src={bolt} className="w-[25px] h-[20px] rounded-full" />
          </span>
        ),
        color: "#49e943",
      },
    ],
  },
];

export default items;
