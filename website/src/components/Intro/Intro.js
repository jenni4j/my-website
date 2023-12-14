import React from "react";
import pic from "./IMG_4691.JPG";
import "./Intro.css";
import {Link} from 'react-scroll';

function Intro() {
    return (
      <section id="intro">
        <div className="introContent">
          <p className="introText">Welcome to my digital corner!</p>
        </div>
        <img src={pic} alt="Jenn Jordache" className="pic" />
      </section>
    );
  }
  
  export default Intro;