import React from "react";
import About from "./About";
import WRW from "../pages/wrw.js";
import {
    BrowserRouter as Router,  Routes,
    Route,
    useParams,
    useNavigate,
    Link,
    BrowserRouter, 
   
  } from "react-router-dom";
export default function Footer () {
const navigate = useNavigate();

const wrwLink = () => {
navigate("/GondringPortfolio2024/wrw");
}

const GalleryLink = () => {
    navigate("/GondringPortfolio2024/gallery");
    }

const HomeLink = () => {
navigate("/"); }
const CSLink = () => {
    navigate("/GondringPortfolio2024/casestudy");
    }
    const ResumeLink = () => {
        navigate("/GondringPortfolio2024/resume");
        }
return (
<footer>
<div className="footerBox">

<nav className="navBottom">
<div></div>
    <ul className="ulNavBottom">
<li className="ilFirstNavBottom"> 
<Link href="" onClick={HomeLink} className="NaBarLink">
    <strong>About me</strong></Link></li>
<li className="ilNavBottom"> <Link href="" onClick={GalleryLink} className="NaBarLink">Gallery</Link></li>
<li className="ilNavBottom"><Link href="" onClick={ResumeLink} className="NaBarLink">Resume</Link></li>
<li className="ilNavBottom">Certifications</li>
    </ul>
    <ul  className="ulNavBottom">   
<li className="ilFirstNavBottom"><Link href="" onClick={CSLink} className="NaBarLink"><strong>Case Studies</strong></Link></li>

<li className="ilNavBottom">TBN</li>

<li className="ilNavBottom">    

    <Link href="" onClick={wrwLink} className="NaBarLink">Wizard Retreat
    </Link> </li>
<li className="ilNavBottom"><Link href="" onClick={CSLink} className="NaBarLink">More</Link></li>

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