import React from "react";
import './TotalRequest.scss';

const RequestList = ({ bgColor, iconClass, number, label }) => {
    return (
        <div className={`col-sm-12 col-md-6 col-lg-6 col-xl-3`}>
            <div className={`card bg-${bgColor} img-card box-${bgColor}-shadow`}>
                <div className="card-body">
                    <div className="d-flex">
                        <div className="text-white">
                            <h2 className="mb-0 number-font">{number}</h2>
                            <p className="text-white mb-0">{label}</p>
                        </div>
                        <div className="ms-auto">
                            <i className={`fa ${iconClass} text-white fs-30 me-2 mt-2`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestList;
