import React, { useState, useEffect } from "react";

function Carousel({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const getNextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const getLastItem = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? items.length - 1 : prevIndex - 1);
    };

    const handleCarouselButtonClick = (index) => {
        setCurrentIndex(index);
    };

    const togglePause = () => {
        setPaused((prevPaused) => !prevPaused);
    }

    useEffect(() => {
        if (paused) return;

        const interval = setInterval(() => {
            getNextItem();
        }, 4000); 

        return () => clearInterval(interval)
    }, [currentIndex, paused]);

    return (
        <div className="carousel-top-level">
            <div className="carousel-container w-100">
                <img src={items[currentIndex].image}/>
                <h1 className="carousel-header"> {items[currentIndex].title} </h1>
                <p className="carousel-description"> {items[currentIndex].desc} </p>
                <button className="carousel-button next-button" onClick={getNextItem}>
                    <i class="bi bi-caret-right-fill"></i>
                </button>
                <button className="carousel-button last-button" onClick={getLastItem}>
                    <i class="bi bi-caret-left-fill"></i>
                </button>

                {/* Status Buttons */}
                <div className="carousel-controls">
                    <div className="carousel-status-buttons">
                        {items.map((_, index) => (
                            <button 
                                key = {index}
                                className = {`status-button ${index === currentIndex ? 'active' : ''}`}
                                onClick = {() => handleCarouselButtonClick(index)}
                            ></button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Carousel;