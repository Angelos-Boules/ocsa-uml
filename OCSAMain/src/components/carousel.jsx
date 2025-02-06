import React, { useState } from "react";
import carouselItems from "../assets/carouselItems";

function Carousel() {
    const [currIndex, setCurrIndex] = useState(0);

    const nextItem = () => {
        setCurrIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
    };

    const prevItem = () => {
        setCurrIndex(prevIndex => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    };

    return (
        <div className="carousel-container">
            {/* Carousel item */}
            test
            <div className="carousel-item">
                <img src={carouselItems[currIndex].image}/>
                {console.log(carouselItems[currIndex].title)}
                <h2>{carouselItems[currIndex].title}</h2>
                <p>{carouselItems[currIndex].desc}</p>
            </div>

            {/* Navigation buttons */}
            <button onClick={prevItem} className="prev-button">Prev</button>
            <button onClick={nextItem} className="next-button">Next</button>
        </div>
    )
}

export default Carousel;