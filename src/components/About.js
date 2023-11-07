
import React from "react";
import photo1 from "../media/photo1.png";

export default function About() {
  return (
    <section id="about">
      
<div className="mainBoarder imgPadding">
<br></br>
   <h1 className="mainInfo nameSize">Ana Gondring's</h1>
  
   <br></br>
   <p className="fontBig mainInfo">
    UX Design & <br></br>Front-End <br></br> Portfolio</p>   
 
    <br></br>
   <p className="mainInfo">I like to design things, coding, making sure everything is accessible.</p>

<div className="imgPadding">
   <img src={photo1} 
   alt="A red head women drinking coffee using a computer with a cat under foot"
className="heroImg"/>
</div>
</div>
    </section>
  );
}

