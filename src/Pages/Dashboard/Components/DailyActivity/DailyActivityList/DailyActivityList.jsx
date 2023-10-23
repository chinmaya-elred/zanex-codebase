import React from "react";
import './DailyActivity.scss';

const TaskItem = ({ iconClass, title, date, description, link, linkText }) => {
    return (
        <li>
            <i className={`task-icon ${iconClass}`}></i>
            <h6>{title}<span className="text-muted fs-11 mx-2">{date}</span></h6>
            <p className="text-muted fs-12">
                {description} <a href={link} className="fw-semibold">{linkText}</a>
            </p>
        </li>
    );
}

export default TaskItem;
