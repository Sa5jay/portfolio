
import TextType from "@/components/TextType";
import { Github, Linkedin } from "lucide-react";


const Home = () => {
     

  
  

  

  

  
  return (
    <div>
      <section
        id="home"
        className="h-screen  flex   items-center"
      >
        <div>
          <h1 className="home-page md:text-8xl text-6xl font-Bebas Neue font-bold leading-tight">
            HI,
            <br /> I'm Sanjay Neelakandan
          </h1>
          <TextType
            text={[
              "Frontend Developer",
              "React Developer",
              "Mern Stack Developer",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-3xl text-black md:text-6xl font-serif"
          />
          <h3 className="md:text-3xl text-lg opacity-90 mt-2">
            I love to build things for the web.
          </h3>

          <div className="flex items-center gap-5 font-semibold mt-5">
            <a href="/MyResume.pdf">
              <button className="border-white text-lg hover:bg-white cursor-pointer hover:text-black  border transition-transform duration-300 px-4 py-3 rounded-lg">
                View Resume
              </button>
            </a>
            <a href="https://github.com/Sa5jay" className="curosr-pointer"><Github className="w-10 h-10 hover:text-black"/></a>
            <a href="https://www.linkedin.com/in/sanjay-neelakandan-4b8832320/" className="curosr-pointer"><Linkedin className="w-10 h-10 hover:text-black"/> </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
