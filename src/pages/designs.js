import React from "react";
import Navbar from "../components/NavBar.js";
import Footer from "../components/Footer";
import img1 from "../media/designs/img1.jpg";
import img2 from "../media/designs/img2.gif";
import img3 from "../media/designs/img3.png";
import img4 from "../media/designs/img4.jpg";
import img5 from "../media/designs/img5.png";
import img6 from "../media/designs/img6.jpg";
import img7 from "../media/designs/img7.gif";
import img8 from "../media/designs/img8.png";
import img9 from "../media/designs/img9.jpg";
import img10 from "../media/designs/img10.gif";
import img11 from "../media/designs/img11.jpg";
import img12 from "../media/designs/img12.jpg";
import img13 from "../media/designs/img13.png";
import img14 from "../media/designs/img14.jpg";
const Designs = () => {
    return (    
      
        <><Navbar/>
          <div className="tealLine">
          <h1 className="mainFont mainInfo project">
          Gallery
          </h1>
          </div> 
          <div className="threeBlocks">            
          <img src={img7} alt=" " className="designImg projectBox"/>
            
              <img src={img13} alt=" " className="designImg projectBox"/>
              <img src={img8} alt=" " className="designImg projectBox"/>
              <img src={img2} alt=" " className="designImg projectBox"/>
              <img src={img3} alt=" " className="designImg projectBox"/>
              <img src={img4} alt=" " className="designImg projectBox"/>
              <img src={img6} alt=" " className="designImg projectBox"/>
             
             
              <img src={img1} alt="cell phone mock up of a VR travel experince " className="designImg projectBox"/>                 
              <img src={img10} alt=" " className="designImg projectBox"/>
              <img src={img11} alt=" " className="designImg projectBox"/>
              <img src={img14} alt=" " className="designImg projectBox"/>
              <img src={img12} alt=" " className="designImg projectBox"/>
             
              <img src={img5} alt=" " className="designImg projectBox"/>
              </div>

        <Footer /></>
    );
    };
    
    export default Designs;