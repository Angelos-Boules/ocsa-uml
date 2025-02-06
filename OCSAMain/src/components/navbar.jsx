import React, { useState} from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    
    return (     
        <header>                   
        <div className= "navbar bg-dark text-light">
            {/* Heading - diff screen sizes */}
            <header className="fs-1 banner mx-auto d-none d-md-block"> Orthodox Christian Student Association </header>
            <header className="brand navbar-brand fs-1 banner d-md-none"> 
                <img src="../../orthocross.svg" height="35px" alt="Orthodox Cross Icon"/>
                O.C.S.A. 
            </header>
            
            {/* Hamburger Menu Button + Icon */}
            <button className="drawer-button-custom d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <img src="../../menu-icon.png" height="35px"/>
            </button>
        </div>

            {/* Nav Menu Items
            <nav className="navbar navbar-dark bg-dark">
            <div className="container">                    
                <ul className="navbar-nav mx-auto d-flex flex-row gap-3">
                                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
        </header>







    );
}

export default Navbar;
