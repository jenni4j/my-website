import React from "react";
import "./Portfolio.css";
import FloodImage from "./flood-image.jpeg";
import StockImage from "./stock-chart.jpeg";
import DogImage from "./dog-breed.jpeg";
import SARImage from "./SAR-image.jpeg";

function Portfolio() {
    return (
        <section id='portfolio'>
            <span className="portfolioTitle">Portfolio</span>
            <span className="portfolioContent">
                <div className="portfolioItem">
                    <img src={FloodImage} alt="Flood Detection" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <h2>Flood Detection Project</h2>
                        <p>This is the flood detection project</p>
                    </div>
                </div>
                <div className="portfolioItem">
                    <img src={SARImage} alt="SAR" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <h2>Search and Rescue Project</h2>
                        <p>This is the search and rescue project</p>
                    </div>
                </div>
                <div className="portfolioItem">
                    <img src={DogImage} alt="Dog Breeds" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <h2>Dog Breed Classification Project</h2>
                        <p>This is the dog breed classification project</p>
                    </div>
                </div>
                <div className="portfolioItem">
                    <img src={StockImage} alt="Stock Sentiment" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <h2>Stock Sentiment Project</h2>
                        <p>This is the stock sentiment project</p>
                    </div>
                </div>
            </span>
        </section>        
    );
  }


  export default Portfolio;