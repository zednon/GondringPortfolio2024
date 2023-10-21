import logo from './logo.svg';
import React from "react";
import Home from "./pages/home.js";
import './App.css';
import WRW from "./pages/WRW.js";
import Casestudy from "./pages/casestudy.js";
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
   <ul>
        <li className="liNavTop"><Link className="NavBarLink" to='/home'>Home</Link></li>
        <li className="liNavTop"><Link className="NavBarLink" to='/casestudy'>Case Studies</Link></li>
         </ul>
        <Routes>
   
          <Route path='/home' element={<Home/>} />
          <Route path='/casestudy/wrw' element={<WRW/>} />
          <Route path='/casestudy' element={<Casestudy/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
