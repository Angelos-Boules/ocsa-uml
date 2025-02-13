import React from "react";
import Accordion from "./accordion";

import historyItems from "../assets/historyData";

function FaithSection() {

    return (
        <section className="py-5 faith-section mx-3">
            <h1 className="faith-section-header text-center">One Lord, One Faith, One Baptism</h1>
            <p className="mt-4 mb-0 faith-section-text lead" style={{textAlign:"justify"}}>
                The <strong>Orthodox Christian Student Association</strong> represents the community of students belonging to the ancient
                apostolic faith, established by our Lord Jesus Christ during his earthly ministry and passed down through
                generations as a Holy Tradition by his holy and pure Apostles and Church Fathers. The Church has long since
                stood strong in the face of persecution, clinging to her Orthodox faith, and faithfully passing it down from
                generation to generation, refusing to conform to the world.
                <br />
            </p>
            <br />
            <div className="lead verse"> "Do not be conformed to this world, but be transformed by the renewing of your mind"
                - Romans 12:2 </div>
            <br />
            <div className="lead verse mb-4"> "If the world is against the truth, then I am against the world" - St.
                Athanasius the Great </div>
            <hr className="verse-separator" />
            <h4 className="text-center pb-2">Timeline of Signficant Events in Church History</h4>
            <Accordion items={historyItems} />
        </section>
    );
}

export default FaithSection;