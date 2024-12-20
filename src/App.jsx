import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Nav from "./Components/Navigation/Nav";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";
import { useRef, useEffect } from "react";

function App() {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  });

  return (
    <div
      ref={chatContainerRef}
      className="flex flex-col h-fit gap-0 w-full overflow-hidden"
    >
      <Nav />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
