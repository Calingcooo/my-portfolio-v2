import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center">
      <div className="py-15 mb-10 md:mx-40 md:py-40 lg:mx-80 lg:py-20 max-w-[600px]">
        <h1 className="whitespace-nowrap text-center text-[#64ffda] text-xl tracking-widest font-bold capitalize mb-4 lg:mb-10">
          what’s next?
        </h1>
        <h2 className="whitespace-nowrap text-center text-[#ccd6f6] text-5xl tracking-wide font-extrabold capitalize mb-4 lg:mb-10">
          get in touch
        </h2>
        <p className="text-center text-md w-full text-slate-400 text-wrap">
          I'm actively seeking full-time roles and available for freelance
          projects. Whether you have a job opening, collaboration idea, or a
          tech challenge to solve, I'd love to hear from you. Let’s connect!
        </p>
        <div className="flex justify-center w-full mt-4 lg:mt-10">
          <a
            href="mailto:calingco.je@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans outline-[#64ffda] max-w-2xs outline-1 font-semibold max-wd-sm tracking-widest rounded-sm px-5 py-3 cursor-pointer text-[#f4f4f4] dark:text-[#64ffda] bg-[#0f0f0f] dark:bg-transparent hover:-translate-1.5 hover:shadow-[5px_5px_0_0_#64ffda] transition-all duration-300 ease-in-out"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
