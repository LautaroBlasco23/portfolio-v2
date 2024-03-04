import React from "react";

const Hero = () => {
  return (
    <div id="hero-container" className="h-screen w-full grid grid-cols-10 grid-rows-10">
      <h1 className="row-start-2 self-center col-start-2 col-end-10 text-4xl font-bold">Profile</h1>
      <div className="row-start-3 col-start-2 col-end-11 w-full">

        <p className="py-2">
        <span className="text-2xl ">👋<span className="font-bold">Hi</span>, </span>
          My name is Lautaro Blasco, I'm a software developer from Argentina 🇦🇷.
        </p>

        <p className="my-4">
          I'm Currently focused on backend development, using primarly Java and Go, but I also have experience with Typescript and Rust.
        </p>

        <p className="my-4">
          I'm always open to listen new ideas and learn new things every day.
        </p>

        <p className="mt-4 font-bold text-xl">
          📚 Interested in learning about:
        </p>

        <ul className="flex flex-col list-disc list-inside mb-4">
          <li className="">Software Architectures</li>
          <li className="">Design Patterns</li>
          <li className="">Cloud Computing</li>
        </ul>

        <span className="font-bold text-xl">👨‍🏭 Some of my skills are:</span>
        <div className="flex flex-wrap">
          <span className="mx-4">◾ Git</span>
          <span className="mx-4">◾ Docker</span>
          <span className="mx-4">◾ Kubernetes</span>
          <span className="mx-4">◾ AWS</span>
          <span className="mx-4 col-start-5 col-end-7">◾ Spring & Spring Boot</span>
          <span className="mx-4">◾ Node</span>
          <span className="mx-4 col-start-1 col-end-4 row-start-2">◾ Linux (fedora & Ubuntu mainly)</span>
          <span className="mx-4">◾ GraphQL</span>
          <span className="mx-4 col-start-4 row-start-2 col-end-7">◾ React (HTML, CSS)</span>
        </div>

        <div className="mt-4">
          <span className="font-bold text-xl">Languages: </span>
          <div className="flex flex-col">
            <span>🇺🇸 English: B2  </span>
            <span>🇪🇸 Spanish: Native </span>
            <span>🇩🇪 German: A1 </span>
          </div>
        </div>

        

      </div> 
      <div className="col-start-8 col-end-11 mr-10 flex justify-center items-center rounded-md font-bold row-start-9 mt-8 text-2xl">
        <span>Watch my projects below!</span>
      </div>
    </div>
  )
}

export default Hero;
