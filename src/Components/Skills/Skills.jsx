import { useEffect, useState } from "react";
import app from "../../App.module.css";
import items from "./Items.jsx";
import skill from "./skill.module.css";
import Card from "./Card.jsx";

export default function Skills() {
  const [hover, setHover] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    setHover(hover);
  }, []);

  return (
    <div
      className="w-[100%] md:w-[100%] py-10 mx-auto my-5 flex flex-col p-3 gap-10 bg-[#efc9af6c]"
      id="skills"
    >
      <h1
        className={`${app.lato} text-4xl font-semibold text-center underline`}
      >
        Skills
      </h1>
      <div className="flex flex-wrap gap-20 justify-around">
        {items.map((item) => (
          <div className="" key={item.id}>
            <Card
              items={item}
              hover={hoveredId === item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
