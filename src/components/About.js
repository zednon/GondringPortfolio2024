
import React from "react";
import photo1 from "../media/photo1.png";

export default function About() {
  return (
    <section id="about">
        <div className="gridTwoBlocks">
<div className="mainBoarder">

   <h1 className="mainFont mainInfo">Ana Gondring's</h1>
   <div className="lineThin"></div>

   <p className="mainFont mainInfo">
    UX/Front-End Engineering Portfolio</p>
   <div className="lineThin"></div>

   <p className="mainInfo">I like to design things, coding, making sure everything is accessible, drinking coffee, and cats. I really like cats.</p>
</div>
<div className="mainBoarder">
   <img src={photo1} 
   alt="A red head women drinking coffee using a computer with a cat under foot"
className="heroImg"/>
</div>
</div>
    </section>
  );
}

