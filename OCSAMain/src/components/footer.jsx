import React from "react";

function Footer() {
    const currYear = new Date().getFullYear();

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-secondary">{`© ${currYear} O.C.S.A.`}</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="https://www.instagram.com/ocsa_uml?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        Contact us <i className="bi bi-instagram"></i>
                    </a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
