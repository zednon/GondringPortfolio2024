import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">

        
          <div className="tealLine">
            <h2 className="mainFont mainInfo project"> 
            Skills &amp; Technologies</h2></div>
           
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="threeBlocks">
          {skills.map((skills) => (
           <div className="projectBox">
<div className="projectpadding">
               
                <h2 className="projectTitle">{skills.title}</h2>
                <div className="lineThin"></div>
                <p className="projectDescription">{skills.description}</p>
                </div>

</div>
           
          ))}
        </div></div>
      </div>
    </section>
  );
          } 