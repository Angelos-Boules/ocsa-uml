import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import "./main.css"
import React from "react";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";

function App() {
    return (
        <div>
            <Navbar />
            <Carousel />
        </div>
    )
}


export default App;