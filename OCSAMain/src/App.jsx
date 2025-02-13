import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import "./main.css"
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import EBoardSection from './components/eBoardSection';
import Carousel from "./components/carousel";
import carouselItems from "./assets/carouselItems";
import FaithSection from './components/faithSection';

function App() {
    return (
        <div>
            <Navbar />
            <Carousel items = {carouselItems} />
            <FaithSection />
            <EBoardSection />
            <Footer />
        </div>
    )
}


export default App;