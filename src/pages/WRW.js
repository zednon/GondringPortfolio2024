import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from "../components/Footer.js";
import NavBar from "../components/NavBar.js";
import photo1 from "../media/wrwcasestudy/TGTSNBN Tea Tin.png"
import photo2 from "../media/wrwcasestudy/img2.png"
import photo3 from "../media/wrwcasestudy/img3.png"
import photo4 from "../media/wrwcasestudy/img4.png"
const WRW = () => {
    return (    <>
    <NavBar />
    <div className="tealLine">
          <h1 className="mainFont mainInfo project">
        Wizard Retreat Weekend
          </h1>
          </div> 
<div className="gridTwoBlocks">
  <div className="projectBox CSpadding"><br></br>
  <h2>About the Project</h2> <br></br>
    <p><strong>Title:</strong> Head of Desing and Development</p><br></br>
    <p><strong>Client:</strong> Urban Wizards, 50c</p><br></br>
<p><strong>Duration:</strong> July 2021 project is ongoing with pauses</p>
<br></br><p><strong>Tools: </strong>Figma, HTML, CSS, WordPress</p>
<br></br>
<p><strong>Overview of the clents:<br></br></strong> the world’s largest in-person Harry Potter meetup group. They have over 4,000 members and hold events threw out the Metro of New York City. </p>
</div>
          <div className="projectBox">
<img src={photo1} alt="Logo of Urban Wizards and phonix over nyc skyline" className="projectImg"></img>
</div></div>
<div className="gridTopics">
<div className="topicLineL">
</div>
          <h2 className="mainFont">
      Problems 
          </h2><div className="topicLineL">
          </div> </div>
          <div className="threeBlocks">
            <div className="projectBox CSpadding">
              <h2>Main Problem</h2><br></br>
              <p>Getting New Yorkers to travel out of NYC </p>
<br></br>
<p>New Yorkers dont own cars for the most part traveling away from the subway system is hard and time intensive there location isn't on a bus route so a cab is required.</p>

              </div>
              <div className="projectBox CSpadding">
             <h2>Problem 2</h2><br></br>
             
             <p>The Time Frame</p><br></br>
             <p>The bref was given to me two weeks before the site needed to be finished. I had to design and develop a full site in two weeks for people to be able to buy tickets for the event.</p> 
              </div>
              <div className="projectBox CSpadding">
              <h2>Problem 3</h2><br></br>
             
             <p>House Colors and fall colors</p><br></br>
             <p>Its best to avoid house colors so the site couldn't use yellow, blue, black, red, green, gray, and Urban Wizards wanted a fall theme.</p> 
                         
              </div>       
            </div>
            <div className="gridTopics">
<div className="topicLineL">
</div>
<h2 className="mainFont">Solutions</h2>
<div className="topicLineL">
</div>
</div>
<div className="threeBlocks">
<div className="projectBox CSpadding">
              <h2>Main Solution</h2><br></br>
              <p>Getting New Yorkers to travel out of NYC </p>
<br></br>
<p>Using information from running other event inculting a 500 person convention in Laconia NH, where the nearest train, or bus was an hour and half from the location. Using that date I was able to make design choices. </p>

              </div>
              <div className="projectBox CSpadding">
             <h2>Solution 2</h2><br></br>
             
             <p>The Time Frame</p><br></br>
             <p>14 days, for a project from start to finish isn't much time, I broke the project into desing using pior gathered data while developing the site while making plains with the team</p> 
              </div>
              <div className="projectBox CSpadding">
              <h2>Solution 3</h2><br></br>
             
             <p>House Colors and fall colors</p><br></br>
             <p>I got aproveal from the team pretty fast on the colars for the site, I would use gold, purple orange and black.</p> 
                         
              </div>       


            </div>
            <div className="tealLine">
          <h1 className="mainFont mainInfo project">
        Research
          </h1>
          </div>
           <div className="gridTopics">
          <div className="topicLineL">
</div>
<h2 className="mainFont">Competitor</h2>
<div className="topicLineL">
</div></div>
<div className="fourBlocks"><div></div>
  <div className="projectBox CSpadding">
  <p>  Since Harry Potter Fans who are adults and well travel for a weekend 
  to go to Harry Potter Themed actives for 3 days is a pretty nict group. 
  I only reviewed Pax unplugged its' also a fairly nitch group as well.  </p>
</div>
<div className="projectBox CSpadding">
 <img src={photo2} alt="Harry Potter Fans at a party drinking and having fun in custom"
 className="dancingWitch"></img>
 </div><div></div></div>
  <div className="gridTwoBlocks">
  <div className="projectBox CSpadding">
<img src={photo3} alt="Harry Potter Fans at a party drinking and having fun in custom"></img>

  </div>
          <div className="projectBox CSpadding">
<img src={photo4} alt="Harry Potter Fans at a party drinking and having fun in custom"></img>
          </div>
  </div>

          <div className="fourBlocks">
          <div className="projectBox CSpadding"></div>
          <div className="projectBox CSpadding"></div>
          <div className="projectBox CSpadding"></div>
          <div className="projectBox CSpadding"></div>
          </div>


    <Footer /></>    );
    };
    
    export default WRW;
    