import React from "react";
import TotalVisitList from './TotalVisitList/TotalVisit';

const TotalVisitsCard = () => {
    return (
        <div className="row">
            <TotalVisitList
                iconClass="fa-firefox text-primary"
                title="Total Visit"
                value="834"
                description="Sed ut perspiciatis unde omnis accusantium doloremque"
            />
            <TotalVisitList
                iconClass="fa-dollar text-secondary"
                title="Cost per Click"
                value="$34,516"
                description="Sed ut perspiciatis unde omnis accusantium doloremque"
            />
            <TotalVisitList
                iconClass="fa-comment-o text-success"
                title="Investment"
                value="80%"
                description="Sed ut perspiciatis unde omnis accusantium doloremque"
            />
            <TotalVisitList
                iconClass="fa-pie-chart text-info"
                title="Revenue"
                value="70k"
                description="Sed ut perspiciatis unde omnis accusantium doloremque"
            />
        </div>
    );
}

export default TotalVisitsCard;