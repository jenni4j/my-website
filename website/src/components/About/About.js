import React from "react";
import pic from "../About/IMG_4691.JPG";
import {Link} from 'react-scroll';

function About() {
    return (
      <section id="about">
        <div className="aboutContent">
          <span className="aboutTitle">Jenn Jordache</span>
          <p className="aboutText">A software developer with a passion for learning and creating.</p>
        </div>
        <img src={pic} alt="Jenn Jordache" className="aboutPic" />
      </section>
    );
  }
  
  export default About;