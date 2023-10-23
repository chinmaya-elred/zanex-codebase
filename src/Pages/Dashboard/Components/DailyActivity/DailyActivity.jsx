import React from "react";
import DailyActivity from "../DailyActivity/DailyActivityList/DailyActivityList";

const dailyTasks = [
    {
        iconClass: 'bg-primary',
        title: 'Task Finished',
        date: '29 Oct 2020',
        description: 'Adam Berry finished task on',
        link: 'javascript:void(0);',
        linkText: 'Project Management'
    },
    {
        iconClass: 'bg-secondary',
        title: 'New Comment',
        date: '25 Oct 2020',
        description: 'Victoria commented on Project',
        link: 'javascript:void(0);',
        linkText: 'AngularJS Template'
    },
    {
        iconClass: 'bg-primary',
        title: 'New Comment',
        date: '25 Oct 2020',
        description: 'Victoria commented on Project',
        link: 'javascript:void(0);',
        linkText: 'AngularJS Template'
    },
    {
        iconClass: 'bg-secondary',
        title: 'Task Overdue',
        date: '25 Oct 2020',
        description: 'Victoria commented on Project ',
        link: 'javascript:void(0);',
        linkText: 'Integrated management'
    },
    {
        iconClass: 'bg-primary',
        title: 'Task Overdue',
        date: '25 Oct 2020',
        description: 'Victoria commented on Project',
        link: 'javascript:void(0);',
        linkText: 'Integrated management'
    },
];

const DailyActivities = () => {
    return (
        <div className="col-xl-4 col-md-12">
            <div className="card h-100">
                <div className="card-header">
                    <h4 className="card-title fw-semibold">Daily Activity</h4>
                </div>
                <div className="card-body pb-0 text-start">
                    <ul className="task-list">
                        {dailyTasks.map((task, index) => (
                            <DailyActivity key={index} {...task} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DailyActivities;
