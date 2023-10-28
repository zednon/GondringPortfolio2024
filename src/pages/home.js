import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Home = () => {
return (    
    <><NavBar /><About /><Projects /><Skills /><Footer /></>
);
};

export default Home;


