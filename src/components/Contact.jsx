import React from "react";

const Contact = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className="rounded-br-2xl bg-blue-200 border border-black p-4 flex-col flex justify-center md:h-[400px] md:w-[800px]">
        <h2 className="mx-auto text-2xl font-bold">Get In Touch!</h2>
        <span className="mt-6">YOUR EMAIL</span>
        <input className="" type={"email"} placeholder="email..."/>
        <span className="mt-4">YOUR MESSAGE</span>
        <textarea className="md:h-[200px]" type={"text"} placeholder="message..."/>
        <button className="border border-black hover:bg-black hover:text-white duration-200 mx-auto px-2 mt-2 focus:bg-black focus:text-white">Send Email</button>
      </div>
    </div>
  )
}

export default Contact;
