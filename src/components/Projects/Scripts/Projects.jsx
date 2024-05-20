import Contact from "../../Contact/Contact";
import ProCard from "./ProCard";

export default function Projects() {
  return (
    <div
      className="bg-gradient-to-br from-[#000001] to-[#122755] absolute top-[340vh] md:top-[300vh] h-fit w-[100%] overflow-x-hidden"
      id="projects"
    >
      <h1 className="text-center text-white text-4xl font-semibold my-10">
        <u>Projects</u>
      </h1>
      <ProCard />
      <Contact />
    </div>
  );
}
