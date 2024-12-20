import { useEffect, useState } from "react";
import app from "../../App.module.css";
import items from "./Items.jsx";
import Card from "./Card.jsx";

export default function Skills() {
  const [hover, setHover] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    setHover(hover);
  }, []);

  return (
    <div
      className="w-[100%] md:w-[100%] py-10 mx-auto flex flex-col p-3 gap-10 bg-gradient-to-b from-[#fff] to-[#efc9af]"
      id="skills"
    >
      <h1
        className={`${app.lato} text-4xl font-semibold text-center underline`}
      >
        Skills
      </h1>
      <div className="flex flex-wrap gap-20 justify-around" data-aos="zoom-in">
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
