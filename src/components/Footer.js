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
navigate("/GondringPortfolio2024/WRW");
}

const GalleryLink = () => {
    navigate("/GondringPortfolio2024/Gallery");
    }

const HomeLink = () => {
navigate("/GondringPortfolio2024/"); }
const CSLink = () => {
    navigate("/GondringPortfolio2024/Casestudy");
    }
    const ResumeLink = () => {
        navigate("/GondringPortfolio2024/Resume");
        }
        const CodeLink = () => {
            navigate("/GondringPortfolio2024/codeprojects");
            }
            const CertificationLink = () => {
                navigate("/GondringPortfolio2024/certifications");}
return (
<footer>
<div className="footerBox">

<nav className="navBottom">
<div></div>
    <ul className="ulNavBottom">
<li className="ilFirstNavBottom"> 
<Link href="" onClick={HomeLink} className="NaBarLink">
    <strong>About me</strong></Link></li>
<li className="ilNavBottom"> 
<Link href="" onClick={GalleryLink} className="NaBarLink">Gallery</Link></li>
<li className="ilNavBottom">
    <Link href="" onClick={ResumeLink} className="NaBarLink">Resume</Link></li>
<li className="ilNavBottom">
<Link href="" onClick={CertificationLink} className="NaBarLink">Certifications</Link></li>
    </ul>
    <ul  className="ulNavBottom">   
<li className="ilFirstNavBottom">
    <Link href="" onClick={CSLink} className="NaBarLink"><strong>Case Studies</strong></Link></li>

<li className="ilNavBottom">TBN</li>

<li className="ilNavBottom">    

    <Link href="" onClick={wrwLink} className="NaBarLink">Wizard Retreat
    </Link> </li>
<li className="ilNavBottom">
    <Link href="" onClick={CSLink} className="NaBarLink">More</Link></li>

    </ul>
    <ul  className="ulNavBottom">
<li className="ilFirstNavBottom">
    <Link href="" onClick={CodeLink} className="NaBarLink">
    <strong>Front-End</strong></Link></li>
<li className="ilNavBottom">Accessibility</li>
<li className="ilNavBottom">HTML&CSS</li>
<li className="ilNavBottom">JavaScript</li>

    </ul>
    <ul  className="ulNavBottom">
<li className="ilFirstNavBottom"><strong>Social Links</strong></li>
<li className="ilNavBottom">
    <a href="https://www.linkedin.com/in/agondring/"
     className="NaBarLink">
        Linkedin</a></li>
<li className="ilNavBottom"> <a href="https://github.com/zednon"
     className="NaBarLink">Github</a></li>
<li className="ilNavBottom">
    <a href="https://www.behance.net/anagondring"
     className="NaBarLink">Behance</a></li>


    </ul>
    <div></div>
    </nav>
    <h4 className="footnote">Designed and Hand Coded by me in React</h4>
    </div>
    
</footer>
    );}