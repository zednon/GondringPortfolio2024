import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from "../components/Footer.js";
import NavBar from "../components/NavBar.js";



const CodeProjects = () => {
    return (    <>
    <NavBar />
    <div className="tealLine">
          <h1 className="mainFont mainInfo project">
          Code Projects
          </h1>
          </div> 

    <Footer /></>    );
    };
    
    export default CodeProjects;