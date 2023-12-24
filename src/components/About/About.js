import React from "react";
import "./About.css";

function About() {
    return (
        <section id='about'>
            <span className="aboutTitle"></span>
            <span className="aboutContent">
            <p>Hi, I’m Jenn - welcome to my portfolio! I’m currently based in Vancouver, Canada and in the process of completing a masters degree 
            remotely at Georgia Tech in computer science, with a focus on machine learning.</p>
            
            <p>Prior to pursuing a graduate degree, I studied business at the University of British Columbia and gained a few years of experience in the finance industry. 
                Highlights include working on the trading floor at Bank of America and as a data analyst on quantitative investing teams at the Canada Pension Plan Investment 
                Board and Connor, Clark & Lunn Investment Management. </p> 
            
            <p>I love thinking about how to apply technology to pressing global issues or ways to improve human life, which is why the projects you will find here 
                are often inspired by this, as well as tools I am currently learning. Some themes that will often spark my interest are climate change and the environment, 
                economic inequality, and healthcare. </p>
            
            When I’m not in front of a computer screen, you can usually find me in the mountains on bikes or skis, or playing Chopin on the piano. 
            Feel free to reach out if collaborating on projects would be of interest to you!</span>
        </section>        
    );
  }


  export default About;