import React from "react";
import BrowserCard from "./BrowserCard/BrowserUsage";

const BrowserCards = () => {
    const browserData = [
        { icon: 'fa-chrome', browser: 'Chrome', count: '35,502', change: 12.75, iconClass: 'bg-purple-gradient', changeClass: 'text-success' },
        { icon: 'fa-opera', browser: 'Opera', count: '12,563', change: -15.12, iconClass: 'bg-secondary-gradient', changeClass: 'text-danger' },
        { icon: 'fa-firefox', browser: 'IE', count: '25,364', change: 24.37, iconClass: 'bg-primary-gradient', changeClass: 'text-success' },
        { icon: 'fa-edge', browser: 'Firefox', count: '14,635', change: 15.63, iconClass: 'bg-info-gradient', changeClass: 'text-success' },
        { icon: 'fa-android', browser: 'Android', count: '15,453', change: -23.70, iconClass: 'bg-success-gradient', changeClass: 'text-danger' },
    ];

    return (
        <div className="col-xl-4 col-md-12">
            <div className="card">
                <div className="card-header bg-white">
                    <h4 className="card-title fw-semibold">Browser Usage</h4>
                </div>
                <div className="card-body pt-2 pb-2">
                    {browserData.map((data, index) => (
                        <BrowserCard key={index} {...data} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BrowserCards;

