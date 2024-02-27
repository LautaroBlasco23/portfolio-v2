import React from "react";

const ProjectCard = (repoData) => {
  return (
    <div className="shadow-2xl hover:border-white hover:border relative flex flex-col items-center mt-4 border border-black rounded-md p-4 bg-blue-950 text-white h-[280px] w-[260px] hover:scale-110 ease-in duration-500">
      <h1 className="font-bold text-xl">{repoData.title}</h1>
      <div className="w-full h-1 bg-white mt-2"></div>
      <p className="mt-4">{repoData.text}</p>
      <button className="absolute bottom-4 bg-white border border-black rounded hover:bg-blue-950 cursor-pointer hover:text-white hover:border-white duration-300 px-2 text-black">
        <a href={repoData.link} target={"_blank"}>
          View code
        </a>
      </button>
    </div>
  )
}

export default ProjectCard;
