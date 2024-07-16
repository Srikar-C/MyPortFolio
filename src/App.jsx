import About from "./components/About/Scripts/About";
import Nav from "./components/Navigation/Nav";
import Projects from "./components/Projects/Scripts/Projects";
import Skills from "./components/Skills/Scripts/Skills";

export default function App() {
  return (
    <div className="flex flex-col overflow-x-hidden p-0 m-0">
      <Nav />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
