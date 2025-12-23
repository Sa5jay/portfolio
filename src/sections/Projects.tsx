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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 auto-rows-[minmax(100px,auto)] gap-3 sm:gap-4 md:gap-5">
  {/* Game Project - Large featured */}
  <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 row-span-2 rounded-lg overflow-hidden hover:scale-105 shadow-xl hover:shadow-black transition-transform duration-400">
    <a href="https://game-ten-steel.vercel.app/" className="block w-full h-full">
      <img
        src="/game.png"
        alt="Game Project"
        className="w-full h-full object-cover"
      />
    </a>
  </div>

  {/* Task Manager - Large featured */}
  <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 row-span-2 overflow-hidden rounded-lg hover:scale-105 shadow-xl hover:shadow-black transition-transform duration-400">
    <a href="https://task-manager-app-zeta-nine.vercel.app/" className="block w-full h-full">
      <img
        src="/task.png"
        alt="Task Manager"
        className="w-full h-full object-cover"
      />
    </a>
  </div>

  {/* Doctor Website - Medium */}
  <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-2 overflow-hidden rounded-lg hover:scale-105 shadow-xl hover:shadow-black transition-transform duration-400">
    <a href="https://doctor-web-orpin.vercel.app/" className="block w-full h-full">
      <img
        src="/doctor.png"
        alt="Doctor Website"
        className="w-full h-full object-cover"
      />
    </a>
  </div>

  {/* Tattoo Website - Wide */}
  <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 row-span-2 overflow-hidden rounded-lg hover:scale-105 shadow-xl hover:shadow-black transition-transform duration-300">
    <a href="https://codejavid-apps-448w.vercel.app/" className="block w-full h-full">
      <img
        src="/tattoo.png"
        alt="Tattoo Website"
        className="w-full h-full object-cover"
      />
    </a>
  </div>

  {/* Book It - Wide */}
  <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4 row-span-2 overflow-hidden rounded-lg hover:scale-105 shadow-xl hover:shadow-black transition-transform duration-300">
    <a href="https://book-it-cyan.vercel.app/" className="block w-full h-full">
      <img
        src="/bookit.png"
        alt="Book It"
        className="w-full h-full object-cover"
      />
    </a>
  </div>

  {/* Digital Agency - Wide */}
  <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4 row-span-2 overflow-hidden rounded-lg hover:scale-105 shadow-xl hover:shadow-black transition-transform duration-300">
    <a href="https://intern-project-sigma-topaz.vercel.app/" className="block w-full h-full">
      <img
        src="/digital.png"
        alt="Digital Agency"
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