import React from "react";
import "./Portfolio.css";
import FloodImage from "./flood-image.jpeg";
import StockImage from "./stock-chart.jpeg";
import DogImage from "./dog-breed.jpeg";
import MLImage from "./ml-safety.jpeg";

function Portfolio() {

    const handleItemClick = (url) => {
        window.open(url, '_blank');
      };

    return (
        <section id='portfolio'>
            <span className="portfolioTitle"></span>
            <span className="portfolioContent">
                <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/Flood-Detection')}>
                    <img src={FloodImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <h2>Identifying Flood Water from Satellite Imagery</h2>
                        <p>Final project for a deep learning course at Georgia Tech. 
                            Various fully convolutional network architectures were implemented and trained to 
                            create segmentation maps of flooded areas. A vision transformer pretrained on generic satellite data 
                            was also used to compare and improve base performance.</p>
                    </div>
                </div>
                <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/Kaggle-Dog-Breed-Identification/')}>
                    <img src={DogImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <h2>Classifying Dog Breeds</h2>
                        <p>Used transfer learning with InceptionV3 as the base pretrained model to classify 120 different breeds of dogs as part of
                            a Kaggle competition.</p>
                    </div>
                </div>
                <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/Stock-Sentiment')}>
                    <img src={StockImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <h2>Stock Sentiment Tool</h2>
                        <p>Developed a tool that allows a user to perform sentiment analysis on news headlines for a specific stock ticker using the 
                            NLTK natural language library.
                        </p>
                    </div>
                </div>
                <div className="portfolioItem" onClick={() => handleItemClick('https://github.com/jenni4j/CAIS-Intro-to-ML-Safety')}>
                    <img src={MLImage} alt="" className="portfolioItemImg" />  
                    <div className="portfolioItemText">
                        <h2>Intro to Machine Learning Safety</h2>
                        <p>A repository with completed assignments from an Introduction to Machine Learning Safety course hosted by the Center for AI Safety.</p>
                    </div>
                </div>
            </span>
        </section>        
    );
  }


  export default Portfolio;