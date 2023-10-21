import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";


const WRW = () => {
    return (    
        <><Projects /><Skills /><Footer /></>
    );
    };
    
    export default WRW;