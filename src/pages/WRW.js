import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from "../components/Footer.js";
import NavBar from "../components/NavBar.js";



const WRW = () => {
    return (    <>
    <NavBar />
    <div className="tealLine">
          <h1 className="mainFont mainInfo project">
        Wizard Retreat Weekend
          </h1>
          </div> 

    <Footer /></>    );
    };
    
    export default WRW;
    