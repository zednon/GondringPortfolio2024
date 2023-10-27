import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Welcome to my app!</h1>
      <p>
        Check out my <Link to={"/about"}>about</Link> page
      </p>
    </>
  );
}

export default App;
