
import React from "react";
import { projects } from "../data";
import {
  BrowserRouter as Router,  Routes,
  Route,
  useParams,
  useNavigate,
  Link,
  BrowserRouter, 
 
} from "react-router-dom";
export default function Projects() {
  const navigate = useNavigate();
  const wrwLink = () => {
    navigate("/GondringPortfolio2024/WRW");
    }
  return (


    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <div className="tealLine">
          <h2 className="mainFont mainInfo project">
        Lastest Projects
          </h2>
          </div>   
         
          <p className="mainInfo center">
I am a UX designer who is fully able to code and develop my own designs. I have a passion for creating beautiful, functional, and accessible websites and applications. I am a strong believer in the power of design and its ability to make a difference in the world.
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
                <button className="projectButton" role="button">
                  <Link href="" onclick={wrwLink} className="projectLink">
                    {project.button}</Link></button>
              </div>
              </div>
         
            ))}
             
           </div>
         
        </div>
    
      
    </section>
  );
}