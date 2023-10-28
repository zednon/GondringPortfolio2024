import React from "react";

import {
  BrowserRouter as Router,  Routes,
  Route,
  useParams,
  useNavigate,
  Link,
  BrowserRouter, 
 
} from "react-router-dom";



export default function Navbar() {
  const navigate = useNavigate();

const homeLink = () => {
navigate("/");}
const CSLink = () => {
  navigate("/casestudy");
  }
  const GalleryLink = () => {
    navigate("/gallery");
    }
    const ResumeLink = () => {
      navigate("/resume");
      }

  return (
    <header>
      <nav>
      <ul>
        <li className="liNavTop"><Link href="" onClick={homeLink} className="NaBarLink">Home</Link></li>
            <li className="liNavTop"><Link href="" onClick={CSLink} className="NaBarLink">Case Studies</Link></li>
            <li className="liNavTop"><a>Code Projects</a></li>
            <li className="liNavTop"><Link href="" onClick={GalleryLink} className="NaBarLink">Gallery</Link></li>
            <li className="liNavTop"><Link href="" onClick={ResumeLink} className="NaBarLink">Resume</Link></li>
        </ul>
      </nav>
      

    </header>
  );
}