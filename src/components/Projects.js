
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (


    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <div className="tealLine">
          <h2 className="mainFont mainInfo project">
        Lastest
          </h2>
          </div>   
         
          <p className="mainInfo">
I am a UX designer who is fully able to code and develop my own designs. I have a passion for creating beautiful, functional, and accessible websites and applications. I am a strong believer in the power of design and its ability to make a difference in the world. I am a hard worker, a quick learner, and a team player. I am always looking for new opportunities to learn and grow as a designer and developer. I am currently looking for a full-time position as a UX designer or front-end developer. I also know a thing or two about accessilble design and would love to help you make your website or application more accessible. 
          </p>
        </div>
        
        
        <div className="threeBlocks">
            {projects.map((project) => (
         
                <div className="projectBox">
                <div className="projectpadding">
            <p className="projectDate">{project.date}</p>
                <p className="projectSubtitle">{project.subtitle}</p>
                <h2 className="projectTitle">{project.title}</h2>
                <div className="lineThin"></div>
                <p className="projectDescription">{project.description}</p>
                </div>
              <div className="yellowBox">
                <button className="projectButton" role="button"><a href="{project.link}" className="projectLink">{project.button}</a></button>
              </div>
              </div>
         
            ))}
             
           </div>
          <div className="tealLine"></div>
        </div>
    
      
    </section>
  );
}