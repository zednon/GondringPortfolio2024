import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./components/About";
import WRW from "./pages/wrw.js";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home.js";
import Casestudy from "./pages/casestudy.js";
import Gallery from "./pages/designs.js";
import Resume from "./pages/resume.js";
import Code from "./pages/codeprojects.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Certification from "./pages/Certifications.js";

const router = createBrowserRouter([
  {
    path: "/GondringPortfolio2024/",
    element: <Home />,
  },
  {
    path: "/GondringPortfolio2024/casestudy",
    element: <Casestudy />,
  },
  {
    path: "/GondringPortfolio2024/wrw",
    element: <WRW />,
  },
  {
    path: "/GondringPortfolio2024/gallery",
    element: <Gallery />,
  },
  {
    path: "/GondringPortfolio2024/resume",
    element: <Resume />,
  },
  {
    path: "/GondringPortfolio2024/codeprojects",
    element: <Code />,
  },
  {
    path: "/GondringPortfolio2024/certifications",
    element: <Certification />,
  },
  {
    path: "/GondringPortfolio2024/casestudy/wrw",
    element: (
      <>
        <p>This is the wizard page!</p>
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();