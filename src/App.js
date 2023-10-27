import logo from './logo.svg';
import React from "react";
import Home from "./pages/home.js";
import './App.css';
import WRW from "./pages/wrw.js";
import Casestudy from "./pages/casestudy.js";
import './css/About.css';
import { img } from "./media/wrwcomputer.jpg"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
  NavLink
} from "react-router-dom";




function App() {

  return (
    
    <Router>
      <div>
        <nav>
   <ul>
        <li className="liNavTop">
          <Link className="NavBarLink" to='GondringPortfolio2024/'>
            Home</Link></li>
        <li className="liNavTop">
          <Link className="NavBarLink" to='GondringPortfolio2024/casestudy'>
            Case Studies</Link></li>
         </ul></nav>
        <Routes>
          <Route path='GondringPortfolio2024/' element={<Home/>} /> </Routes>
          <Routes>  
    <Route path='GondringPortfoli2024/casestudy/wrw' element={<WRW />} /></Routes>
          <Routes> <Route path='GondringPortfolio2024/casestudy' element={<Casestudy/>} /> 
          </Routes>
      </div>
    </Router>
  );
}

export default App;
