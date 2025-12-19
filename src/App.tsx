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
        <div className="relative min-h-screen w-full text-white">
          <div className="fixed inset-0 w-full h-screen  -z-10 pointer-events-none bg-black">
            {/* <Particles /> */}
          </div>
          <div className="fixed inset-x-0 top-[100vh] h-screen md:hidden -z-10 pointer-events-none bg-black" />
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
