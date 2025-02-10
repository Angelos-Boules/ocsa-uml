import React from "react";

function EBoardCard({ name, role, image, major, minor, year }) {

    return (
        <div className="col-md-3 my-1">
            <div className="card text-center bg-light shadow-lg">
                <img src={image} className="profile-img" />
                <div className="card-body">
                    <h5 className="card-name">{name}</h5>
                    <p className="card-text text-muted">{role}</p>
                    <ul className="list-unstyled">
                        <li>{major}</li>
                        <li>{minor && `${minor} Minor`}</li>
                    </ul>   
                    <p className="card-text text-muted">{year}</p>
                </div>
            </div>
        </div>
    );
}

export default EBoardCard;