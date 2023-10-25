import React from "react";
import TotalProjectList from "./TotalProjectList/TotalProjectList";

const TotalProject = () => {
    return (
        <div className="row">
            <TotalProjectList
                title="Total Projects"
                iconClass="fa-file-text"
                number="7,896"
                label="Weekly"
                color="primary"
                progress="70"
            />
            <TotalProjectList
                title="Total Employees"
                iconClass="fa-users"
                number="2,897"
                label="Male"
                color="secondary"
                progress="50"
            />
            <TotalProjectList
                title="Ongoing Projects"
                iconClass="fa-award"
                number="1,567"
                label="Weekly"
                color="success"
                progress="60"
            />
            <TotalProjectList
                title="Total Tasks"
                iconClass="fa-tag"
                number="4,293"
                label="Weekly"
                color="info"
                progress="40"
            />
        </div>
    );
}

export default TotalProject;
