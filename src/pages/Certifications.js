import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from "../components/Footer.js";
import NavBar from "../components/NavBar.js";



const Certifications = () => {
    return (    <>
    <NavBar />
    <div className="tealLine">
          <h1 className="mainFont mainInfo project">
          Certifications
          </h1>
          </div> 

    <Footer /></>    );
    };
    
    export default Certifications;