import logo from './logo.svg';
import React from "react";
import About from "./components/About";
import './App.css';
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
   
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
   
   
    </main>
   
  );
}

export default App;
