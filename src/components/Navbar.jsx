import React from "react";

const Navbar = () => {
  return (
    <div className="text-xl text-neutral-400 fixed z-10 bg-neutral-950 w-full p-2 flex items-center justify-around">
      <span className="cursor-pointer hover:text-white duration-300"><a href="#hero-container">About Me</a></span>
      <span className="cursor-pointer hover:text-white duration-300" ><a href="#projects-container">Projects</a></span>
      <span className="cursor-pointer hover:text-white duration-300" ><a href="#contact">Contact</a></span>
      <div className="flex justify-end">
        <span className="text-white mr-8 hover:cursor-pointer hover:text-blue-400 duration-300"><a href="https://drive.google.com/file/d/10JA8m5yGGzQPWOFieXqtgtX_p-MWfc4d/view?usp=sharing" target={"_blank"} rel="noreferrer">CV</a></span>
        <span className="text-white hover:cursor-pointer hover:text-blue-400 duration-300"><a href="https://www.linkedin.com/in/lautaro-blasco-739644206/" target={"_blank"} rel="noreferrer">Linkedin</a></span>
      </div>
    </div>
  )
}

export default Navbar;
