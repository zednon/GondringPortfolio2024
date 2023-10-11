import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Footer from "../components/Footer";


const CaseStudies = () => {
return (    
    <><About /><Projects /><Skills /><Footer /></>
);
};

export default CaseStudies;


