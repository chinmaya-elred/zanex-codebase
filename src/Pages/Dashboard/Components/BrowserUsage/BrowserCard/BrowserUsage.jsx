import './BrowserUsage.scss'
import React from "react";

const BrowserUsage = ({ icon, browser, count, change, changePercent, iconClass, changeClass }) => {
    return (
        <div className="d-md-flex align-items-center browser-stats">
            <div className={`d-flex me-1`}>
                <i className={`fa ${icon} text-white me-2 ${iconClass}`}></i>
                <p className="fs-16 my-auto mb-0">{browser}</p>
            </div>
            <div className="ms-auto my-auto">
                <div className="d-flex">
                    <span className="my-auto fs-16">{count}</span>
                    <span className={`fs-15 ${changeClass}`}>
                        <i className={`fa ${change > 0 ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
                        {change}%
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BrowserUsage;

