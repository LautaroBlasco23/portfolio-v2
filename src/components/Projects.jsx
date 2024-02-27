import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    fetch("https://api.github.com/users/lautaroblasco23/repos")
    .then(data => data.json())
    .then((data) => {
        data = data.filter((repo) => {
          return !repo.description.includes("personal project")
        })
        setRepos(data);
    })
  }, []);
  
  return (
    <div id="projects-container" className="projects-container h-screen w-screen flex flex-col items-center ">
      <h2 className="text-4xl mt-8 mx-12">Apps I've developed (not ready)</h2>
      <div className="w-full h-full mt-4 grid grid-cols-3 grid-rows-2 place-items-center mx-auto">
        {
          repos.map((repo) => {
          return (
            <ProjectCard title={repo.name} text={repo.description} link={repo.html_url}/>
          )
        })       
        }
      </div>
    </div>
  )
}

export default Projects;
