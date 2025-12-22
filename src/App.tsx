// src/App.tsx
import ClickSpark from "./components/ClickSpark";
import Contact from "@/sections/Contact";
import  Home  from "@/sections/Home";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";

export default function App(): React.ReactElement {
  return (
    <div>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="relative min-h-screen w-full text-white bg-linear-to-r from-neutral-950 via-neutral-500  to-neutral-950">
          <main className="relative max-w-7xl md:mx-35 mx-5">
            <Navbar/>
            <Home />
            <About />
            <Skills/>
            <Projects />
            <Contact/>
            <Footer/>
          </main>
        </div>
      </ClickSpark>
    </div>
  );
}
