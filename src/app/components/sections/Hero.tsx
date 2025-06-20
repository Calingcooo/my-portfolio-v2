import React from 'react'

const Hero = () => {
  return (
    <section className="flex items-center text-white min-w-full min-h-svh">
      <div className="flex flex-col justify-center w-full h-full lg:mx-5 xl:mx-10">
        <h1 className="text-[#64ffda] text-sm md:text-base font-semibold tracking-widest mb-4 md:mb-10">
          Hi, my name is
        </h1>
        <h2 className="text-[clamp(30px,8vw,80px)] text-slate-200 font-black md:text-4xl xl:text-6xl leading-tight tracking-wide">
          Jhon Edmir Calingco.
        </h2>
        <h2 className="text-[clamp(30px,8vw,80px)] text-slate-400 font-black md:text-4xl xl:text-6xl leading-tight tracking-wide">
          I build reliable web applications.
        </h2>
        <p className="text-slate-400 mt-4 lg:mt-10 max-w-[700px] text-md md:text-lg">
          I’m a full-stack developer with a backend focus, currently building scalable web apps as a Junior Full-stack Web Developer using Node.js, PostgreSQL, and React.
        </p>
        <button 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('project-highlights')?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="font-sans outline-[#64ffda] max-w-64 outline-1 font-light mt-7 lg:mt-10 tracking-widest rounded-sm px-5 py-3 cursor-pointer text-[#f4f4f4] dark:text-[#64ffda] bg-[#0f0f0f] dark:bg-transparent hover:-translate-1.5 hover:shadow-[5px_5px_0_0_#64ffda] transition-all duration-300 ease-in-out"
        >
          Check out my work
          {" "}
          <span className='inline-block -rotate-45 text-sm'>→</span>
        </button>
      </div>
    </section>
  )
}

export default Hero
