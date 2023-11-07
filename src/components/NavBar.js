
import React, { useState }  from "react";

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
navigate("/GondringPortfolio2024/");}
const CSLink = () => {
  navigate("/GondringPortfolio2024/Casestudy");
  }
  const GalleryLink = () => {
    navigate("/GondringPortfolio2024/Gallery");
    }
    const ResumeLink = () => {
      navigate("/GondringPortfolio2024/Resume");
      }
      const CodeLink = () => {
        navigate("/GondringPortfolio2024/codeprojects");
        }
        const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

        const toggleMobileNav = () => {
          setIsMobileNavOpen(!isMobileNavOpen);
        };
          
  return (
    <header>
      <nav>
      <ul className="navbarTop">
        <li className="liNavTop">
          <Link href="" onClick={homeLink} className="NaBarLink">Home</Link></li>
            <li className="liNavTop"><Link href="" onClick={CSLink} className="NaBarLink">Case Studies (UX) </Link></li>
            <li className="liNavTop">
              <Link href="" onClick={CodeLink} className="NaBarLink">
              Code Projects</Link></li>
            <li className="liNavTop"><Link href="" onClick={GalleryLink} className="NaBarLink">Gallery</Link></li>
            <li className="liNavTop"><Link href="" onClick={ResumeLink} className="NaBarLink">Resume</Link></li>
        </ul>
      </nav>

    

    </header>
  );
}