import logo from './logo.svg';
import React from "react";
import Home from "./pages/home.js";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <Router>
      <div>
        <li className="liNavTop"><Link className="NavBarLink" to='/home'>Home</Link></li>
        <Routes>
          <Route path='/home' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
