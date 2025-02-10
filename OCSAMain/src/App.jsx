import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import "./main.css"
import React from "react";
import Card from "./components/eBoardCard";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import EBoardSection from './components/eBoardSection';
import Carousel from "./components/carousel";
import carouselItems from "./assets/carouselItems";

function App() {
    return (
        <div>
            <Navbar />
            <Carousel items = {carouselItems} />
            <EBoardSection source="" />
            <Footer />



        </div>
    )
}


export default App;