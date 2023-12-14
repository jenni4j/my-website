import React from "react";
import pic from "../About/IMG_4691.JPG";
import "./About.css";
import {Link} from 'react-scroll';

function About() {
    return (
      <section id="about">
        <div className="aboutContent">
          <span className="aboutTitle">Jenn Jordache</span>
          <p className="aboutText">“If you don't know, the thing to do is not to get scared, but to learn.”</p>
        </div>
        <img src={pic} alt="Jenn Jordache" className="pic" />
      </section>
    );
  }
  
  export default About;