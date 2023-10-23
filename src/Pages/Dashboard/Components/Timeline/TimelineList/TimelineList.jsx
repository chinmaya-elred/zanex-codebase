import React from "react";
import './Timeline.scss';

const TimelineList = ({ iconClass, userName, action, time, badgeClass, icon }) => {
    return (
        <div className="activity-blog">
            <div className={`activity-img brround ${iconClass}`}>
                <i className={`fa ${icon} fs-20`}></i>
            </div>
            <div className="activity-details d-flex">
                <div>
                    <b><span className="text-dark">{userName}</span></b>
                    {action}
                    <span className="d-flex text-muted fs-11">{time}</span>
                </div>
                <div className="ms-auto fs-13 text-dark fw-semibold">
                    <span className={`badge ${badgeClass}`}>5m</span>
                </div>
            </div>
        </div>
    );
}

export default TimelineList;
