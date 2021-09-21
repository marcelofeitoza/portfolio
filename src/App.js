import "./App.css";

import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App bg-dark w-100 h-100 smooth-scroll">
      <NavBar />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
