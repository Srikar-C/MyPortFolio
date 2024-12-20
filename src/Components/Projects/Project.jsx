import app from "../../App.module.css";
import Cards from "./Cards";

export default function Project() {
  return (
    <div
      className="w-[100%] mx-auto flex flex-col p-3 gap-10 bg-gradient-to-b from-[#efc9af]"
      id="projects"
    >
      <h1
        className={`${app.lato} text-4xl font-semibold text-center underline`}
      >
        Projects
      </h1>
      <div className="w-[80%] mx-auto">
        <Cards />
      </div>
    </div>
  );
}
