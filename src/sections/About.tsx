import ScrollFloat from "@/components/ScrollFloat";
import { Github, Instagram, Linkedin } from "lucide-react";

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
              <div className="md:flex flex-row justify-items-center w-full gap-10 ">
                <div className="w-72 h-72 md:w-3/4 md:h-3/4  rounded-full overflow-hidden ">
                  <img
                    src="/dp.jpg"
                    alt="Sanjay Neelakandan"
                    className="w-full h-full  object-cover"
                  />
                </div>
                <div className="flex-col mt-10 md:mt-0 justify-items-center">
                  <p className="font-semibold text-xl">
                    Not that much, I am from cse background and i love to build and develop things for web pages, I am trying to learn new things and make myself better in tech.
                  </p>
                  <div className="flex gap-5 mt-5">
                    <Linkedin/>
                    <Github/>
                    <Instagram/>
                  </div>
                </div>
              </div>
            </section></div>
  )
}

export default about