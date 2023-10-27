import React from "react";
import About from "./About";
import WRW from "../pages/WRW.js";
import {
    BrowserRouter as Router,  Routes,
    Route,
    useParams,
    useNavigate,
    Link,
    BrowserRouter, 
   
  } from "react-router-dom";
export default function Footer () {
const params = useParams();
const navigate = useNavigate();

const wrwLink = () => {


navigate("/GondringPortfolio2024/casestudy/wrw");
}

return (
<footer>
<div className="footerBox">

<nav className="navBottom">
<div></div>
    <ul className="ulNavBottom">
<li className="ilFirstNavBottom"><strong>About me</strong></li>
<li className="ilNavBottom">Designs</li>
<li className="ilNavBottom">Resume</li>
<li className="ilNavBottom">Certifications</li>

    </ul>
    <ul  className="ulNavBottom">
<li className="ilFirstNavBottom"><strong>Case Studies</strong></li>
<li className="ilNavBottom">TBN</li>

<li className="ilNavBottom">       

    <a href="" onClick={wrwLink}>Wizard Retreat
      </a> </li>
<li className="ilNavBottom">More</li>

    </ul>
    <ul  className="ulNavBottom">
<li className="ilFirstNavBottom"><strong>Code Projects</strong></li>
<li className="ilNavBottom">TBN</li>
<li className="ilNavBottom">TBN</li>
<li className="ilNavBottom">TBN</li>

    </ul>
    <ul  className="ulNavBottom">
<li className="ilFirstNavBottom"><strong>Social Links</strong></li>
<li className="ilNavBottom">Linkedin</li>
<li className="ilNavBottom">Behance</li>
<li className="ilNavBottom">Github</li>

    </ul>
    <div></div>
    </nav>

    </div>
</footer>
    );}