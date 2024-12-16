import app from "../../App.module.css";
import Cards from "./Cards";

export default function Project() {
  return (
    <div className="w-[80%] mx-auto flex flex-col p-3 gap-10 " id="projects">
      <h1
        className={`${app.lato} text-4xl font-semibold text-center underline`}
      >
        Projects
      </h1>
      <Cards />
    </div>
  );
}
