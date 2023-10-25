import React from "react";
import './TotalProject.scss';

const TotalProjectList = ({ title, iconClass, number, label, color, progress }) => {
    return (
        <div className="col-xl-3 col-md-12 col-lg-6">
            <div className="card overflow-hidden">
                <div className="card-body text-center">
                    <h6>
                        <span className={`text-${color}`}>
                            <i className={`fa ${iconClass} mx-2 fs-20 text-${color}-shadow`}></i>
                        </span>
                        {title}
                    </h6>
                    <h3 className="text-dark counter mt-0 mb-3 number-font">{number}</h3>
                    <div className="progress h-1 mt-0 mb-2">
                        <div className={`progress-bar progress-bar-striped bg-${color} w-${progress}`} role="progressbar"></div>
                    </div>
                    <div className="row mt-4">
                        <div className="col text-center">
                            <span className="text-muted">{label}</span>
                            <h4 className="fw-normal mt-2 mb-0 number-font1">8</h4>
                        </div>
                        <div className="col text-center">
                            <span className="text-muted">Monthly</span>
                            <h4 className="fw-normal mt-2 mb-0 number-font1">23</h4>
                        </div>
                        <div className="col text-center">
                            <span className="text-muted">Total</span>
                            <h4 className="fw-normal mt-2 mb-0 number-font1">31</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalProjectList;
