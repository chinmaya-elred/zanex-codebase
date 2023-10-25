import React from "react";
import RequestList from './TotalRequestList/TotalRequestList';

const TotalRequestCards = () => {
    return (
        <div className="row">
            <RequestList
                bgColor="primary"
                iconClass="fa-send-o"
                number="23,536"
                label="Total Requests"
            />
            <RequestList
                bgColor="secondary"
                iconClass="fa-bar-chart"
                number="45,789"
                label="Total Revenue"
            />
            <RequestList
                bgColor="success"
                iconClass="fa-dollar"
                number="89,786"
                label="Total Profit"
            />
            <RequestList
                bgColor="info"
                iconClass="fa-cart-plus"
                number="43,336"
                label="Monthly Sales"
            />
        </div>
    );
}

export default TotalRequestCards;
