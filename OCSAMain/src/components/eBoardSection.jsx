import React from "react";
import EBoardCard from "./eBoardCard";
import EBoardMembers from "../assets/eboardData";

function EBoardSection() {
    return (
        <section className="py-5 text-white" style = {{backgroundColor: "#1a1a1a"}}>
            <div className="container">
                <h2 className="text-center mb-4" style={{fontFamily:"Montserrat", color:"#E4BD1F"}}> Meet the E-Board </h2>
                <div className="row justify-content-center">
                {EBoardMembers.map((member, index) => (
                    <EBoardCard key={index} {...member} />
                ))}
                </div>
            </div>
        </section>
    )
}

export default EBoardSection;