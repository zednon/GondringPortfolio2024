import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from "../components/Footer.js";
import NavBar from "../components/NavBar.js";



const Resume = () => {
    return (    <>
    <NavBar />
    <div className="tealLine">
          <h1 className="mainFont mainInfo project">
          Career Journey
          </h1>
          </div> 

    <Footer /></>    );
    };
    
    export default Resume;