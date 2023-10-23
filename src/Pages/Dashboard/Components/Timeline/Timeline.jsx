import React from "react";
import TimelineList from "../Timeline/TimelineList/TimelineList";

const activities = [
    { iconClass: 'bg-primary-transparent text-primary', userName: 'Mr John', action: 'Started following you', time: '01 June 2020', badgeClass: 'bg-primary text-white', icon: 'fa-user-plus' },
    { iconClass: 'bg-secondary-transparent text-secondary', userName: 'Lily', action: '1 Commented applied', time: '01 July 2020', badgeClass: 'bg-danger text-white' , icon: 'fa-comment'},
    { iconClass: 'bg-success-transparent text-success', userName: 'Kevin', action: 'liked your site', time: '05 July 2020', badgeClass: 'bg-warning text-white' , icon: 'fa-thumbs-up'},
    { iconClass: 'bg-info-transparent text-info', userName: 'Andrena', action: 'posted a new article', time: '09 October 2020', badgeClass: 'bg-info text-white' , icon: 'fa-envelope'},
    { iconClass: 'bg-danger-transparent text-danger', userName: 'Sonia', action: 'Delivery in progress', time: '12 October 2020', badgeClass: 'bg-warning text-white', icon: 'fa-shopping-bag' },
];

const Timeline = () => {
    return (
        <div className="col-xl-4 col-md-12">
            <div className="card overflow-hidden">
                <div className="card-header">
                    <div>
                        <h3 className="card-title">Timeline</h3>
                    </div>
                </div>
                <div className="card-body pb-0 pt-4">
                    <div className="activity1">
                        {activities.map((activity, index) => (
                            <TimelineList key={index} {...activity} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
