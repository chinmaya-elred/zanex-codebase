
import React from "react";
import './TotalVisit.scss';

const TotalVisit = ({ iconClass, title, value, description }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <div className="card">
                <div className="card-body text-center">
                    <i className={`fs ${iconClass} fs-3x`}></i>
                    <h6 className="mt-4 mb-2">{title}</h6>
                    <h2 className="mb-2 number-font">{value}</h2>
                    <p className="text-muted">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TotalVisit;
