import React, { useState } from "react";

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <button
                        className="accordion-header text-center"
                        onClick={() => toggleAccordion(index)}>
                        {item.title}
                    </button>

                    {activeIndex === index && (
                        <div className="accordion-body">
                            <p>{item.content}</p>
                        </div>
                    )}

                    <i className={`bi ${activeIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'} accord-arrow`}></i>

                </div>
            ))}
        </div>
    );
};

export default Accordion;