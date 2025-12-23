import ScrollFloat from "@/components/ScrollFloat";
import { Github, Linkedin } from "lucide-react";

const about = () => {
  return (
    <div><section
              id="about"
              className="min-h-screen text-center    text-white"
            >
              <div>
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                >
                  ABOUT ME
                </ScrollFloat>
              </div>
              <div className="md:flex md:justify-between items-center w-full gap-10">
  
  {/* Image Section */}
  <div className="w-72 h-72 md:w-lg md:h-1/4 rounded-full overflow-hidden mx-auto md:mx-0">
    <img
      src="/dp.jpg"
      alt="Sanjay Neelakandan"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="flex flex-col md:w-1/2 mt-10 md:mt-0">
    <p className="font-semibold text-justify text-lg leading-relaxed">
      I'm from a CSE background and I love to build and develop things for web pages.
      My passion lies in creating functional and beautiful web applications that bring ideas to life.
      I'm constantly trying to learn new technologies and frameworks, always pushing myself to become
      better in tech. Whether it's frontend design or backend logic, I enjoy every aspect of web
      development and the challenges it brings. Each project is an opportunity for me to grow and
      refine my skills as a developer.
    </p>

    <div className="flex gap-5 justify-center mt-5">
                    <a href="https://www.linkedin.com/in/sanjay-neelakandan-4b8832320/"><Linkedin className=" hover:text-black w-10 h-10"/></a>
                    <a href="https://github.com/Sa5jay"><Github className="w-10 h-10 hover:text-black"/></a>
                  </div>
  </div>

</div>

            </section></div>
  )
}

export default about