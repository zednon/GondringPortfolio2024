import React from "react";
import wrwimg1 from "../media/wrwcomputer.jpg"
import {
  BrowserRouter as Router,  Routes,
  Route,
  useParams,
  useNavigate,
  Link,
  BrowserRouter, 
 
} from "react-router-dom";
export default function Layout() {
  const navigate = useNavigate();

  const wrwLink = () => {
    navigate("/GondringPortfolio2024/WRW");
    }
  

  return (
    <section>
      <div className="tealLine">
        <h1 className="mainFont mainInfo project">
        Case Studies 
        </h1>
      </div>
      <div className="threeBlocks">
<div className="projectBox">
<h2 className="pojectHeadline">
UX, UI, Front End-Engineering, Email
</h2>

<h2 className="projectpadding projectTitle">
 Wizard Retreat Weekend </h2>
 <br />
<p className="projectpadding">I was the solo designer and developer for this project. I created the branding, website, and marketing materials. I also created the content for the website and social media. I also develop emails for this project, customizing them for release and coding them</p>

<div className="ojBox">
  <button className="projectButtonoj" role="button"><a href="" onClick={wrwLink}>View Study</a></button>
              </div>
</div></div>



    </section>
  );
};
