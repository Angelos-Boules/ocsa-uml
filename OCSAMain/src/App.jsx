import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import "./main.css"
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Carousel from "./components/carousel";
import carouselItems from "./assets/carouselItems";

function App() {
    return (
        <div>
            <Navbar />
            <Carousel items = {carouselItems} />
            <Footer />
        </div>
    )
}


export default App;