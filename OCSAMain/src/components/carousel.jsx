import React, { useState, useEffect } from "react";
import carouselItems from "../assets/carouselItems";

function Carousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getNextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const getLastItem = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? carouselItems.length - 1 : prevIndex + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getNextItem();
        },3000);

        return () => clearInterval(interval)
    }, [currentIndex]); {/* Reset interval count everytime the current one changes */}

    return (
        <div className="carousel-top-level">
            <div className="carousel-container w-75">
                <img src="https://placehold.co/600x400"/>
                <h1 className="carousel-header"> Hello World </h1>
                <p className="carousel-description"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat illo mollitia consequatur inventore hic exercitationem eos culpa ut possimus debitis.</p>
                <button className="carousel-button next-button" onClick={getNextItem}>
                    <i class="bi bi-caret-right-fill"></i>
                </button>
                <button className="carousel-button last-button" onClick={getLastItem}>
                    <i class="bi bi-caret-left-fill"></i>
                </button>

            </div>
        </div>
    );
}

export default Carousel;