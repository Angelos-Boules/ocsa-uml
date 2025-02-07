import React, { useState, useEffect } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    
    // Snap navbar to fixed top once it reaches the top by scrolling
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.nav-wrapper-custom');
    
            if (window.scrollY >= navbar.getBoundingClientRect().height) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // Close drawer menu by clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen) {
                const sidePane = document.querySelector(".side-pane");
                if (sidePane && !sidePane.contains(event.target)) {
                    setIsOpen(false);
                }
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (     
        <header className="nav-object-wrapper">                   
            <div className= "navbar bg-dark text-light div-wrapper-custom">
                
                {/* Heading - medium + large screens */}
                <header className="fs-1 banner mx-auto d-none d-md-block"> 
                    Orthodox Christian 
                    <img src="../../orthocross.svg" height="35px" alt="Orthodox Cross Icon"/>
                    Student Association 
                </header>
                
                {/* Wrapper div for fixed smaller menu nav */}
                <div className="navbar-fixed d-md-none">
                    <div className="navbar bg-dark text-light div-wrapper-custom"> 
                        {/* Heading - small screens */}
                        <header className="brand navbar-brand fs-1 banner d-md-none"> 
                            <img src="../../orthocross.svg" height="35px" alt="Orthodox Cross Icon"/>
                            O.C.S.A. 
                        </header>
                        
                        {/* Hamburger Menu Button + Icon */}
                        <button className="drawer-button-custom d-md-none" 
                            type="button" onClick={toggleMenu}>
                            <img src="../../menu-icon.png" height="35px"/>
                        </button>
                    </div>
                </div>
            
            </div>

            {/* Navbar for larger screen sizes */}
            <nav className={`navbar navbar-dark bg-dark d-none d-md-block nav-wrapper-custom
                ${isFixed ? 'fixed-top' : ''}`} id="menubar-custom">
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
            </nav>

            {/* Navbar side pane for smaller screens */}
            <div className={`side-pane ${isOpen ? 'open' : ''} d-md-none`}>
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="navbar-nav mx-auto d-flex flex-column text-center gap-3">
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
                </nav>
            </div>

        </header>
    );
}

export default Navbar;
