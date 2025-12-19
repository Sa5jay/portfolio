import ScrollFloat from "@/components/ScrollFloat";

const Projects = () => {
  return (
    <div>
        <section id="projects" className="min-h-screen text-center ">
              
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                >
                  PROJECTS
                </ScrollFloat>

                <div className="grid grid-cols-2 grid-rows-6  md:grid-cols-8 md:grid-rows-4  gap-5 h-[500px]">
                  <div className="md:col-span-3 col-span-2 row-span-2 md:row-span-2 rounded-lg overflow-hidden hover:scale-105 shadow-xl hover:shadow-pink-400 transition-transform duration-400">
                    <a href="https://game-ten-steel.vercel.app/">
                      <img
                        src="/game.png"
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </div>

                  <div className="md:col-span-3 col-span-1   row-span-2 md:row-span-2 overflow-hidden rounded-lg hover:scale-105 shadow-xl hover:shadow-pink-400 transition-transform duration-400">
                    <a href="https://task-manager-app-zeta-nine.vercel.app/">
                      <img
                        src="/task.png"
                        className="w-full h-full object-cover "
                      />
                    </a>
                  </div>

                  <div className="overflow-hidden col-span-1 row-span-2 md:col-span-2 md:row-span-2 rounded-lg hover:scale-105 shadow-xl hover:shadow-pink-400 transition-transform duration-400">
                    <a href="https://sanjay-portfolio-iota-five.vercel.app/">
                      <img
                        src="/doctor.png"
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </div>

                  <div className="overflow-hidden md:col-span-4 col-span-1 row-span-2 md:row-span-2 rounded-lg hover:scale-105 shadow-xl hover:shadow-pink-400 transition-transform duration-300">
                    <a href="https://codejavid-apps-448w.vercel.app/">
                      <img
                        src="/tattoo.png"
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </div>

                  <div className="overflow-hidden col-span-1 row-span-2 md:col-span-4 md:row-span-2 rounded-lg hover:scale-105 shadow-xl hover:shadow-pink-400 transition-transform duration-300">
                    <a href="https://sanjay-portfolio-iota-five.vercel.app/">
                      <img
                        src="/bookit.png"
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </div>
                </div>
              
            </section>
    </div>
  )
}

export default Projects